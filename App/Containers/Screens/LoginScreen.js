import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
  Image,
  StatusBar,
  BackHandler,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'
import styles from "./../Styles/LoginScreenStyles";
import SplashScreen from 'react-native-splash-screen'

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      userName: "",
      password: "",
      loginToken: "",
      isUserLoggedIn: false,
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }


  onSubmit() {
    fetch('http://192.168.100.32:3000/api/auth/login', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        username: this.state.userName,
        password: this.state.password
      }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(async response => {
        if (response.isUserLoggedIn) {
          this.props.navigation.navigate('ProfileScreen')
          await AsyncStorage.setItem('loginToken', response.token);
        }

      })
      .catch(error => Alert.alert('Error:', error));
  }
  render() {
    return (
      <View >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image source={require('./../../Assets/login-screen/background.jpg')} resizeMode="cover" style={styles.backgroundImage} />

        <View style={[styles.headingContainer, styles.rowView]}>
          <Image source={require('./../../Assets/login-screen/line.png')} style={styles.loginTextLine}/>
          <Text style={styles.headingText}>Login</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>Please enter your login details to continue.</Text>
        </View>


        <View style={styles.container}>


          <View style={styles.rowView}>
            <View style={styles.usernameIconStyle}>
              <Image source={require('./../../Assets/login-screen/email.png')} style={styles.usernameIcon} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Username"
              placeholderTextColor="white"
              onChangeText={(text) => { this.setState({ userName: text }) }} />
          </View>

          <View style={styles.rowView}>
            <View style={styles.usernameIconStyle}>
              <Image source={require('./../../Assets/login-screen/password.png')} style={styles.usernameIcon} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              placeholderTextColor="white"
              secureTextEntry
              onChangeText={(text) => { this.setState({ userName: text }) }} />
          </View>

          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}> Forgot Password? </Text>
          </View>

          <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>




        {/* Footer */}

        <View style={[styles.centered, styles.signUpContainer]}>
          <Text style={styles.signUpText}>Sign up with</Text>

          <View style={styles.rowView}>
            <TouchableOpacity>
              <Image source={require('./../../Assets/login-screen/fb-logo-btn.png')} />

            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./../../Assets/login-screen/twitter.png')} style={styles.midMargin} />

            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./../../Assets/login-screen/instagram.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
