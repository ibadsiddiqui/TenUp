// import React, { Component } from 'react'
// import {
//     View,
//     Alert,
//     TextInput,
//     Dimensions,
//     Text,
// } from 'react-native';
// import { LoginButton, AccessToken } from 'react-native-fbsdk';

// const { width, height } = Dimensions.get('window')


// import styles from './styles'

// export default class FacebookLogin extends Component {
//     state = {
//         data: null,
//         token: null,
//     }
//     componentDidCatch(){
// }

//     render() {
//         return (
//             <View style={{marginTop: 100}}>
//                 <LoginButton 
//                     onLoginFinished={
//                         (error, result) => {
//                             if (error) {
//                                 console.log("login has error: " + result.error);
//                             } else if (result.isCancelled) {
//                                 Alert.alert("login is cancelled.");
//                             } else {
//                                 AccessToken.getCurrentAccessToken().then(
//                                     {/* async (data) => {
//                                         this.setState({
//                                             token: data.accessToken.toString()
//                                         })
//                                         // Alert.alert(data.accessToken.toString())
//                                         const response = await fetch(
//                                             `https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email,about,picture`
//                                         );
//                                         this.setState({
//                                             data: response._bodyText,
//                                         })
//                                     } */}
//                                 )
//                             }
//                         }
//                     }
//                     onLogoutFinished={() => Alert.alert("logout.")}/>

//                 {/* <Text >
//                     {JSON.stringify(this.state.data)}
//                 </Text>
//                 <TextInput value=
//                     {JSON.stringify(this.state.token)}
//                 /> */}

//             </View>
//         )
//     }
// }


import React, { Component } from 'react'
import {
    TouchableOpacity,
    TextInput,
    Text,
    View,
    AsyncStorage,
    Alert
} from 'react-native'

import {
    LoginManager,
    AccessToken
} from 'react-native-fbsdk'
var value
export default class FacebookLogin extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            token: String
        }
    }
    async handleFacebookLogin() {

        await LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {

            if (result.isCancelled) {
                Alert.alert('Login cancelled', JSON.stringify(result))
            } else {
                AccessToken.getCurrentAccessToken().then(
                    async (data) => {

                        // Alert.alert("", data.accessToken)
                        token = data.accessToken.toString();
                        // Alert.alert('getting token', this.state.token)
                        // await AsyncStorage.setItem('fbAccessToken', token)
                        // setTimeout(() => {

                        // Alert.alert('getting token', token)
                        // }, 1000);
                        // this.setState({
                        //     token
                        // });

                        await fetch('http://192.168.15.145:4000/login', {
                            method: 'POST', // or 'PUT'
                            body: JSON.stringify({
                                username: data.accessToken
                            }), // data can be `string` or {object}!
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                        // await fetch(
                        //     `https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email,about,picture`

                        // );
                        // Alert.alert("", JSON.stringify(response._bodyText)
                        // )
                        // this.setState({
                        //     data: response._bodyText,
                        // })

                    })
            }
        })
        // value = await AsyncStorage.getItem('fbAccessToken');
        // Alert.alert('getting token', value)

        // await this.setState({
            // token: value
        // })
    }
    getValue() {
        this.setState({
            token: token
        })
    }
    render() {
        return (
            <View>

                <TouchableOpacity
                    onPress={this.handleFacebookLogin}>
                    <Text style={{ color: "#4267B2", marginTop: 100 }}>
                        Continue with fb
                </Text>
                </TouchableOpacity>

                {/* <TextInput value={this.state.token} /> */}
                <Text onPress={this.getValue}>
                    get value of token{this.state.token}
                </Text>
            </View>
        )
    }
}