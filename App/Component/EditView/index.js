import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import {
    View,
    Text,
    TextInput,
    Alert,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

export default class EditView extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: true,
            ProfileData: {}
        }
    }
    async componentDidMount() {
        await SplashScreen.hide();
    }
    async componentWillMount() {
        try {
            const token = await AsyncStorage.getItem('loginToken');
            fetch('http://192.168.15.145:3000/api/userprofile/getProfile', {
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
                            ProfileData: { ...response}
                        })
                    }, 1000)
                ).catch(error => Alert.alert('Error:', error));
        } catch (error) {
            Alert.alert('Error', 'please retry again')
        }
    }
    render() {
        const { isFetching } = this.state
        return (

            <View style={{ alignItems: 'center', marginTop: 100 }}>
                {
                    isFetching
                    &&
                    <ActivityIndicator size="large" color="#0000ff" />

                }
                {
                    isFetching == false
                    &&
                    <View>
                        <TextInput
                            value={this.state.ProfileData.email}
                            onChangeText={(email) => this.setState({ ProfileData: { email } })} />

                        <Text>{this.state.ProfileData.email}</Text>
                    </View>
                }
            </View>
        )
    }
}
