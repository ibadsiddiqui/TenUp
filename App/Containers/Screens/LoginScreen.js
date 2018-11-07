import React, { Component } from 'react'
import {
  Text,
  View,
  ToastAndroid,
  Image,
  StatusBar,
  BackHandler,
  TextInput,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import styles from "./../Styles/LoginScreenStyles";
import SplashScreen from 'react-native-splash-screen'
import WelcomeBack from '../../Component/Welcomeback';
import LoginHeader from './../../Component/LoginHeader'
import LoginFooter from '../../Component/LoginFooter';
const { height } = Dimensions.get('window')

import FacebookLogin from './../../Component/FacebookLogin'

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.moveToSignUp = this.moveToSignUp.bind(this)
    this.state = {
      username: "",
      password: "",
      loginToken: "",
      isUserLoggedIn: false,
      attemptingLogin: false,
      message: ''
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }


  checkUsername(text) {
    var RegexResult = /[!#$%^&*(),?":{}|<>=/+;:'-]/g
    return RegexResult.test(text);
  }
  checkPassword(text) {
    var passwordRegex = /^((?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=.*[a-zA-Z0-9])).{8,}$/;
    return passwordRegex.test(text)
  }


  setUsername(text) {
    var username = text.replace(/[!#$%^&*(),?":{}|<>=/+;:'-]/g, '');

    this.setState({
      username: username
    });
  }

  setPassword(text) {
    this.setState({
      password: text
    });
  }


  async onSubmit() {
    if (this.state.password !== "" && this.state.username !== "") {

      if (!this.checkUsername(this.state.username.toString())) {
        if (this.checkPassword(this.state.password.toString())) {
          this.setState({
            attemptingLogin: true,
          })
          await setTimeout(() => {

            fetch('http://192.168.15.145:3000/api/auth/login', {
              method: 'POST', // or 'PUT'
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
              }), // data can be `string` or {object}!
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(async response => {
                if (response.isUserLoggedIn !== undefined && response.isUserLoggedIn === true) {
                  setTimeout(() => {
                    
                    this.setState({
                      username: '',
                      password: '',
                      isUserLoggedIn: response.isUserLoggedIn,
                      attemptingLogin: false,
                    })
                  }, 3000);
                  
                  await AsyncStorage.setItem('loginToken', response.token);
                  this.props.navigation.navigate('DashboardScreen')
                } else {
                  this.setState({

                    username: '',
                    password: '',
                    attemptingLogin: false,
                    isUserLoggedIn: false,
                    message: response.message

                  })

                  if (this.state.message == "Unauthorized") {

                    ToastAndroid.showWithGravity("Username does not exist", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                    this.props.navigation.navigate('LoginScreen')

                  } else if (this.state.message == "Verify your Email") {

                    ToastAndroid.showWithGravity(this.state.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                    this.props.navigation.navigate('LoginScreen')
                  }

                }
              })
              .catch(error => Alert.alert('Error:', error));
          }, 3000);
        } else {
          ToastAndroid.showWithGravity('Please Enter A Valid Password', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
      } else {
        ToastAndroid.showWithGravity('A Username should only have Alphabets and Numbers. No Special Characters.', ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    } else {
      ToastAndroid.showWithGravity('Please Enter Your Credentials', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

  }

  moveToSignUp() {
    this.props.navigation.navigate('RegistrationScreen')
  }
  render() {
    return (
      <View >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
        {/* <FacebookLogin /> */}
        {
          this.state.attemptingLogin === true && this.state.isUserLoggedIn === false
          &&
          <ActivityIndicator size="large" color="#ffffff" style={{ alignSelf: 'center', marginTop: height * 0.47 }} />

        }
        {
          this.state.attemptingLogin === false && this.state.isUserLoggedIn === true
          &&
          <WelcomeBack />
        }
        {
          this.state.attemptingLogin === false && this.state.isUserLoggedIn === false
          &&
          <View>

            <LoginHeader />

            <View style={styles.container}>

              <View style={styles.rowView}>
                <View style={styles.usernameIconStyle}>
                  <Image source={require('./../../Assets/login-screen/email.png')} style={styles.usernameIcon} />
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Username"
                  placeholderTextColor="white"
                  onChangeText={(text) => this.setUsername(text)}
                  value={this.state.username} />
              </View>
              <View style={styles.rowView}>
                <View style={styles.usernameIconStyle}>
                  <Image source={require('./../../Assets/login-screen/password.png')} style={styles.errorIcon} />
                </View>
                <TextInput
                  on
                  style={styles.textInput}
                  placeholder="Enter Password"
                  placeholderTextColor="white"
                  onChangeText={(text) => this.setPassword(text)}
                  value={this.state.password} />

              </View>
              <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}> Forgot Password? </Text>
              </View>
              <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.onSubmit}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.moveToSignUp}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}

            <LoginFooter />
          </View>
        }

      </View>
    )
  }
}
