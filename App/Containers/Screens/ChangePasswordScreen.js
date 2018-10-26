import React, { Component } from "react";
import { Button, Card } from 'react-native-elements'


import {
    View,
    Text,
    Alert,
    TextInput,
    AsyncStorage
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'


export default class ChangePasswordScreen extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            oldPassword:'',
            newPassword:''
        }
    }

    async componentDidMount() {
        await SplashScreen.hide();

    }
    async onSubmit() {
        const token = await AsyncStorage.getItem('loginToken')
        Alert.alert('Token', JSON.stringify(this.state.oldPassword))
        fetch('http://192.168.100.32:3000/api/userprofile/changePassword',{
            method: 'POST', // or 'PUT'
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + token

            },
            body:JSON.stringify({
                oldPassword:this.state.oldPassword,
                newPassword:this.state.newPassword
            }),
        }).then(res=>res.json()).then(response=>{
            Alert.alert('Response',JSON.stringify(response))
        });
     }
    render() {
        return (
            <View>
                <Card title='Update Password' >
                    <Text>Old Password</Text>
                    <TextInput 
                        onChangeText={(text) => { this.setState({ oldPassword: text }) }} />
                    <Text>New Password</Text>
                    <TextInput 
                        onChangeText={(text) => { this.setState({ newPassword: text }) }} /> 
                    <Button
                        backgroundColor='#03A9F4'
                        title='changePassword'
                        onPress={this.onSubmit} />
                </Card>
            </View>
        )
    }
}