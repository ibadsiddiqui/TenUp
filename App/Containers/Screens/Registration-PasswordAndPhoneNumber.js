import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StatusBar,
    BackHandler,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import styles from "./../Styles/Registration-PasswordAndPhoneNumberStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'


export default class RegistrationPasswordAndPhoneNumber extends Component {
    constructor() {
        super();
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setPassword = this.setPassword.bind(this);

        this.moveToLogin = this.moveToLogin.bind(this)
        this.state = {
            password: '',
            phoneNumber: '',
            data: []
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }

    async setPassword(text) {
        this.setState({
            password: text
        });
        await AsyncStorage.setItem('password', this.state.password)
    }
    async setPhoneNumber(text) {
        this.setState({
            phoneNumber: text
        });
        await AsyncStorage.setItem('password', this.state.password)
        await AsyncStorage.setItem('phoneNumber', this.state.phoneNumber)


    }
    async moveToLogin() {
        this.setState({
            username: await AsyncStorage.getItem('username'),
            fullname: await AsyncStorage.getItem('fullname'),
            age: await AsyncStorage.getItem('age'),
            gender: await AsyncStorage.getItem('gender'),
            city: await AsyncStorage.getItem('city'),
            password: await AsyncStorage.getItem('password'),
            phoneNumber: await AsyncStorage.getItem('phoneNumber'),
        })

        // if (this.state.password !== "" && this.state.username !== "") {

        //     if (this.checkUsername(this.state.username.toString())) {
        //         if (this.checkPassword(this.state.password.toString())) {
        //             this.setState({
        //                 attemptingLogin: true,
        //             })
        //             await setTimeout(() => {

        //                 fetch('http://192.168.15.145:3000/api/auth/login', {
        //                     method: 'POST', // or 'PUT'
        //                     body: JSON.stringify({
        //                         username: "Ibadsiddiqui01",
        //                         password: "Ibad0110"
        //                     }), // data can be `string` or {object}!
        //                     headers: {
        //                         'Accept': 'application/json',
        //                         'Content-Type': 'application/json'
        //                     }
        //                 }).then(res => res.json())
        //                     .then(async response => {
        //                         if (response.isUserLoggedIn) {
        //                             await AsyncStorage.setItem('loginToken', response.token);
        //                             this.setState({
        //                                 isUserLoggedIn: response.isUserLoggedIn,
        //                                 attemptingLogin: false,
        //                             })
        //                             // this.props.navigation.navigate('ProfileScreen')
        //                         } else {
        //                             this.setState({
        //                                 attemptingLogin: false,
        //                                 isUserLoggedIn: response.isUserLoggedIn,

        //                             })
        //                         }
        //                     })
        //                     .catch(error => Alert.alert('Error:', error));
        //             }, 3000);
        //         } else {
        //             ToastAndroid.showWithGravity('Please Enter A Valid Password', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        //         }
        //     }
        //     else {
        //         ToastAndroid.showWithGravity('Please Enter A Valid Username', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        //     }
        // } else {
        //     ToastAndroid.showWithGravity('Please Enter Your Credentials', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        // }

    }

    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {/* Header */}
                <SignUpHeader />


                {/* Body */}
                <View style={styles.container}>


                    <View style={styles.rowView}>
                        <View style={styles.passwordIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/password.png')} style={styles.passwordIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setPassword(text)}
                            value={this.state.password} />
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.passwordIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/password.png')} style={styles.passwordIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Confirm Password"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setPassword(text)}
                            value={this.state.password} />
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.callIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/call.png')} style={styles.callIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Phone Number"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setPhoneNumber(text)}
                            value={this.state.phoneNumber}
                            keyboardType="numeric" />

                    </View>


                </View>

                <TouchableOpacity style={[styles.centered, styles.nextBtnContainer]} onPress={this.moveToLogin}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
                <Text>{JSON.stringify(this.state.username)}</Text>
                <Text>{JSON.stringify(this.state.fullname)}</Text>
                <Text>{JSON.stringify(this.state.age)}</Text>
                <Text>{JSON.stringify(this.state.gender)}</Text>
                <Text>{JSON.stringify(this.state.city)}</Text>
                <Text>{JSON.stringify(this.state.password)}</Text>
                <Text>{JSON.stringify(this.state.phoneNumber)}</Text>

                {/* Footer */}
            </View>
        )
    }
}
