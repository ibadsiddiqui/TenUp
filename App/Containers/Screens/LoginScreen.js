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


export default class LoginScreen extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      loginToken: "",
      isUserLoggedIn: false,
      attemptingLogin: false,
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }


  checkUsername(text) {
    var RegexResult = /^[a-zA-Z0-9]{8,30}$/
    return RegexResult.test(text);
  }
  checkPassword(text) {
    var passwordRegex = /^((?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=.*[a-zA-Z0-9])).{8,}$/;
    return passwordRegex.test(text)
  }


  setUsername(text) {
    var username = text.replace(/\s+/g, '');
    username = username.replace(/\@/g, '');
    username = username.replace(/\!/g, '');
    username = username.replace(/\./g, '');
    username = username.replace(/\-/g, '');
    username = username.replace(/\=/g, '');
    username = username.replace(/\`/g, '');
    username = username.replace(/\,/g, '');
    username = username.replace(/\//g, '');
    username = username.replace(/\+/g, '');
    username = username.replace(/\_/g, '');
    username = username.replace(/\#/g, '');
    username = username.replace(/\$/g, '');
    username = username.replace(/\%/g, '');
    username = username.replace(/\&/g, '');
    username = username.replace(/\*/g, '');
    username = username.replace(/\(/g, '');
    username = username.replace(/\)/g, '');

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

      if (this.checkUsername(this.state.username.toString())) {
        if (this.checkPassword(this.state.password.toString())) {
          this.setState({
            attemptingLogin: true,
          })
          await setTimeout(() => {

            fetch('http://192.168.15.145:3000/api/auth/login', {
              method: 'POST', // or 'PUT'
              body: JSON.stringify({
                username: "Ibadsiddiqui01",
                password: "Ibad0110"
              }), // data can be `string` or {object}!
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
              .then(async response => {
                if (response.isUserLoggedIn) {
                  await AsyncStorage.setItem('loginToken', response.token);
                  this.setState({
                    isUserLoggedIn: response.isUserLoggedIn,
                    attemptingLogin: false,
                  })
                  // this.props.navigation.navigate('ProfileScreen')
                } else {
                  this.setState({
                    attemptingLogin: false,
                    isUserLoggedIn: response.isUserLoggedIn,

                  })
                }
              })
              .catch(error => Alert.alert('Error:', error));
          }, 3000);
        } else {
          ToastAndroid.showWithGravity('Please Enter A Valid Password', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
      }
      else {
        ToastAndroid.showWithGravity('Please Enter A Valid Username', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
    } else {
      ToastAndroid.showWithGravity('Please Enter Your Credentials', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }



  }
  render() {
    return (
      <View >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />

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
              <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.onSubmit}>
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
