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
    AsyncStorage,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import styles from "./../Styles/Registration-PasswordAndPhoneNumberStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'
import SuccessfulRegister from './../../Component/SuccessfulRegister'

const { width, height } = Dimensions.get('window')


export default class RegistrationPasswordAndPhoneNumber extends Component {
    constructor() {
        super();
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setPassword = this.setPassword.bind(this);

        this.confirmRegistration = this.confirmRegistration.bind(this)
        this.state = {
            showhidePassword:true,
            password: '',
            phoneNumber: '',
            password2: '',
            isRegistered: false,
            attemptingtoRegister: false,
            movingToLogin: false
        }
    }
    toggleShowHidePassword=()=>{
        this.setState({showhidePassword:!this.state.showhidePassword});

    }
    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }
  
    checkPassword(text) {
        var passwordRegex = /^((?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=(.*[@\"|!#$%&/*^\-_\+`~:\[\]()=?»«@£§€{}.;'<>_,]){1})(?=.*[a-zA-Z0-9@\"|!#$%&/*^\-_\+`~:\[\]()=?»«@£§€{}.;'<>_,])).{8,}$/;
        return passwordRegex.test(text)
    }
    checkPhoneNumber(text){
        var phoneRegex = /[0-9]{8,13}/;
        return phoneRegex.test(text)
    }


    async setPassword(text) {
        var password=text.replace(/ /g,'');
        this.setState({
            password: password
        });
        await AsyncStorage.setItem('password', this.state.password)
    }

    async setPhoneNumber(text) {
        this.setState({
            phoneNumber: text
        });
        await AsyncStorage.setItem('phoneNumber', this.state.phoneNumber)
    }

    setPassword2(text) {
        var password = text.replace(/ /g, '');
        this.setState({
            password2: password
        })

    }
    async confirmRegistration() {
        const username = await AsyncStorage.getItem('username')
        const fullname = await AsyncStorage.getItem('fullname')
        const email = await AsyncStorage.getItem('email')
        const age = await AsyncStorage.getItem('age')
        const gender = await AsyncStorage.getItem('gender')
        const city = await AsyncStorage.getItem('city')
        const password = await AsyncStorage.getItem('password')
        const phoneNumber = await AsyncStorage.getItem('phoneNumber')
        if (this.state.password !== "" && this.state.phoneNumber !== '') {
            http://51.144.95.223:81/

            if (this.checkPassword(this.state.password) && this.checkPhoneNumber(this.state.phoneNumber)) {

                if (this.state.password2 === this.state.password) {
                    ToastAndroid.show("password matched", ToastAndroid.SHORT)

                    this.setState({
                        attemptingtoRegister: true,
                    })

                    await setTimeout(() => {
                        fetch('http://192.168.15.145:3000/api/auth/register', {
                            method: 'POST', // or 'PUT'
                            body: JSON.stringify({
                                "username": username,
                                "fullname": fullname,
                                "email": email,
                                "password": password,
                                "dob": age,
                                "gender": (gender === "Male") ? 0 : 1,
                                "city": city,
                                "phoneNumber": phoneNumber,
                                "profileImg": ""
                            }), // data can be `string` or {object}!n
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        }).then(res => res.json())
                            .then(response => {
                                if (response.isRegistered) {
                                    this.setState({
                                        isRegistered: response.isRegistered,
                                        attemptingtoRegister: false,
                                        message: response.message,
                                        movingToLogin: true
                                    })
                                    // this.props.navigation.navigate('ProfileScreen
                                    ToastAndroid.show("Welcome", ToastAndroid.LONG);
                                    setTimeout(() => {
                                        this.setState({
                                            attemptingtoRegister: false,
                                            isRegistered: true
                                        })
                                        this.props.navigation.navigate('LoginScreen')
                                    }, 4000);

                                } else {
                                    this.setState({
                                        attemptingtoRegister: false,
                                        isRegistered: false,
                                        movingToLogin: false,
                                    });
                                    ToastAndroid.show("A User Already Exist of that Data", ToastAndroid.LONG);
                                    this.props.navigation.navigate('RegistrationScreen')
                                }
                            })
                            .catch(error => Alert.alert('Error:', error));
                    }, 2000);
                }else {
                    ToastAndroid.show("Password didn't matched  ", ToastAndroid.SHORT);
                }
            } else {
                ToastAndroid.show("Password minimum should be 8 chracters containing 1 capital leter and special character and Phone Number should be between 8 and 13 character ", ToastAndroid.SHORT);
            }
        } else {
            ToastAndroid.show("Please enter values in the field", ToastAndroid.SHORT);

        }

    }
    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />

                {
                    this.state.attemptingtoRegister === true && this.state.isRegistered === false
                    &&
                    <ActivityIndicator size="large" color="#ffffff" style={{ alignSelf: 'center', marginTop: height * 0.47 }} />

                }
                {
                    this.state.attemptingtoRegister === false && this.state.isRegistered === true
                    &&
                    <SuccessfulRegister />
                }
                {
                    this.state.attemptingtoRegister === false && this.state.isRegistered === false && this.state.movingToLogin === false
                    &&
                    <SignUpHeader />
                }


                {
                    this.state.attemptingtoRegister === false && this.state.isRegistered === false && this.state.movingToLogin === false
                    &&
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
                                secureTextEntry={this.state.showhidePassword}
                                value={this.state.password} />
                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.toggleShowHidePassword}>
                                <Image source={(this.state.showhidePassword) ? require('./../../Assets/signup-screen/blind.png') : require('./../../Assets/signup-screen/eye.png')} style={styles.btnImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.passwordIconStyle}>
                                <Image source={require('./../../Assets/signup-screen/password.png')} style={styles.passwordIcon} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Confirm Password"
                                placeholderTextColor="white"
                                secureTextEntry={this.state.showhidePassword}
                                onChangeText={(text) => this.setPassword2(text)}
                                value={this.state.password2} />
                               
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


                        <TouchableOpacity style={[styles.centered, styles.doneBtnContainer]} onPress={this.confirmRegistration}>
                            <Text style={styles.doneText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}
