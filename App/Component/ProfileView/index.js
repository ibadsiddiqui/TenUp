import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'

import {
    View,
    Text,
    ActivityIndicator,
    Alert,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import ProfileData from './ProfileData';

export default class ProfileView extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: true,
        }
    }
    componentDidMount(){
        SplashScreen.hide();
    }
    async componentWillMount() {
        try {
            const token = await AsyncStorage.getItem('loginToken');
            fetch('http://192.168.100.32:3000/api/userprofile/getProfile', {
                method: 'Get', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(response =>
                setTimeout(() => {
                    this.setState({
                        isFetching: false,
                        ProfileData: [
                            response.email,
                            response.firstName,
                            response.lastName,
                            response.city,
                            response.dob,
                            response.gender ? "Male" : "Female",
                            response.phoneNumber
                        ],
                    })
                }, 2000)
            ).catch(error => Alert.alert('Error:', error));
        } catch (error) {
            Alert.alert('Error', 'please retry again')
        }
    }
    render() {
        const { isFetching} = this.state
        return (

            <View style={{ alignItems: 'center', marginTop: 100 }}>
                <View>
                    {
                        isFetching
                        &&
                        <ActivityIndicator size="large" color="#0000ff" />
                    }
                    {
                        !isFetching
                        &&
                        <ProfileData details={this.state.ProfileData} />
                    }

                </View>

            </View>
        )
    }
}
