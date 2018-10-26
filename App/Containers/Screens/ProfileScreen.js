import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Button } from 'react-native-elements'

import {
    View,
    Text,
    ToastAndroid,
    ActivityIndicator,
    Alert,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import ProfileView from './../../Component/ProfileView';
import EditView from './../../Component/EditView'
import QRCodeGenerator from './../../Component/QR-Code-Generator'
export default class ProfileScreen extends Component {
    constructor() {
        super();
        this.changetoEditView = this.changetoEditView.bind(this)
        this.changetoProfileView = this.changetoProfileView.bind(this)
        this.RoutePassword=this.RoutePassword.bind(this)
        this.state = {
            profileView: true,
            editProfileView: false,
        }
    }

    changetoEditView() {
        this.setState({
            profileView: false,
            editProfileView: true,
        })
    }
  RoutePassword(){
      this.props.navigation.navigate('ChangePassswordScreen');
        // await AsyncStorage.setItem('loginToken', response.token);
        
    }
    async onSubmit() {
        const token = await AsyncStorage.getItem('loginToken')
        Alert.alert('Token', token)


         fetch('http://192.168.100.32:3000/api/userprofile/updateProfile', {
            method: 'POST', // or 'PUT'
             headers: {
                 Accept:'application/json',
                 "Content-Type": 'application/json',
                 "Authorization": 'Bearer ' + token

             },
             body: JSON.stringify({
                 email: "ibadsiddiqui01@gmail.com",
                 firstName: "Ibad",
                 lastName: "Iqbal",
                 dob: "25/05/1996",
                 gender: 1,
                 city: "Lahore",
                 phoneNumber: "7889789189"
             }),// data can be `string` or {object}!
         
        }).then(res => res.json())
            .then(response => {
        // //         if (response.isChanged) {
        // //             Alert.alert('updated', "profile has been updated")
        // //         }
                Alert.alert('Response', JSON.stringify(response))
        //     ToastAndroid.show(response, ToastAndroid.SHORT)
        //     })
        // //     .catch(error => Alert.alert('Error:', error));
    });
}

    changetoProfileView() {
        this.setState({
            profileView: true,
            editProfileView: false,
        })
    }
    render() {
        const { profileView, editProfileView } = this.state
        return (

            <View style={{ alignItems: 'center', marginTop: 100 }}>
                <View>
                    {
                        profileView == true 
                        &&
                        <ProfileView/>
                    }
                    {
                        editProfileView == true && profileView == false 
                        && 
                        <Text style={{ fontSize: 100 }}>Ibad here</Text>

                    }
                    <EditView/>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'yellow', borderColor: 'yellow', borderRadius: 20 }} onPress={this.changetoEditView}>
                        <Text style={{ color: 'black', fontSize: 25, textAlign: "center", padding: 10 }}>changetoEditView</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'yellow', borderColor: 'yellow', borderRadius: 20 }} onPress={this.changetoProfileView}>
                        <Text style={{ color: 'black', fontSize: 25, textAlign: "center", padding: 10 }}>changetoProfileView</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}
