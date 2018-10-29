import React, { Component } from 'react'
import {
  Text,
  View,
  Alert,
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
      regexTest: null,
    }
  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }


  checkUsername(text) {
    if(text === ""){
      return 
    }else {
      var RegexResult = '/^[a-zA-Z0-9]+$'
      return RegexResult.test(text)

    }
  }

  async setUsername(text) {
    result = await this.checkUsername(text)
    if (result) {
      this.setState({
        username: text,
        regexTest: false
      });
    } else {
      this.setState({
        regexTest: true
      });
    }
  }

  setPassword(text) {
    this.setState({
      password: text
    });
  }


  async onSubmit() {

    this.setState({
      attemptingLogin: true,
    })
    setTimeout(async () => {
      await this.setState({
        attemptingLogin: false,
        isUserLoggedIn: true
      })
    }, 3000);

    // await fetch('http://192.168.100.32:3000/api/auth/login', {
    //   method: 'POST', // or 'PUT'
    //   body: JSON.stringify({
    //     Username: this.state.username,
    //     password: this.state.password
    //   }), // data can be `string` or {object}!
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    //   .then(async response => {
    //     if (response.isUserLoggedIn) {
    //       this.props.navigation.navigate('ProfileScreen')
    //       await AsyncStorage.setItem('loginToken', response.token);
    //     }
    //   })
    //   .catch(error => Alert.alert('Error:', error));
  }
  render() {
    return (
      <View >
        <StatusBar backgroundColor="transparent" translucent={true} />
        <Image source={require('./../../Assets/login-screen/background.jpg')} resizeMode="cover" style={styles.backgroundImage} />

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
                  onChangeText={(text) => this.setUsername(text)} />
                {
                  this.state.regexTest
                  &&
                  <View style={styles.infoIconStyle}>
                    <Image source={require('./../../Assets/alert/info.png')} style={styles.usernameIcon} />
                  </View>
                }
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
                  onChangeText={(text) => this.setPassword(text)} />
                {
                  this.state.regexTest

                  &&

                  <View style={styles.infoIconStyle}>
                    <Image source={require('./../../Assets/alert/info.png')} style={styles.usernameIcon} />
                  </View>

                }
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
