import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
  Text,
  View,
  Alert,
  AsyncStorage,
  TextInput,
  ToastAndroid,
  BackHandler,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../Styles/PINScreenStyles';

import { StackActions, NavigationActions } from 'react-navigation';
import Loader from '../../Component/Loader';

export default class SetPINScreen extends Component {

  constructor(props) {
    super(props);
    this.textInput2 = React.createRef();
    this.textInput3 = React.createRef();
    this.textInput4 = React.createRef();
    this.focusTextInput2 = this.focusTextInput2.bind(this);
    this.focusTextInput3 = this.focusTextInput3.bind(this);
    this.focusTextInput4 = this.focusTextInput4.bind(this);

    // function button 
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: "",
    };
  }

  async componentWillMount() {
    try {
      const value = await AsyncStorage.getItem('PINCode');
      if (value !== null) {
        // const resetAction = StackActions.reset({
        //   index: 0,
        //   actions: [NavigationActions.navigate({ routeName: 'ConfirmPINScreen' })],
        // });
        // this.props.navigation.dispatch(resetAction);
        setTimeout(() => {
          this.setState({
            value: true
          })

        }, 3000);
        this.props.navigation.navigate('ConfirmPINScreen')
      } else {
        setTimeout(() => {
          this.setState({
            value: false
          })

        }, 3000);
        ToastAndroid.show('Please Set a PIN for the App', ToastAndroid.BOTTOM);
      }
    } catch (error) {
      Alert.alert("Error in PIN Set up", error)
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }


  focusTextInput2(text) {
    this.setState({ password: this.state.password + text })
    this.textInput2.current.focus();
  }

  focusTextInput3(text) {
    this.setState({ password: this.state.password.concat(text) })
    this.textInput3.current.focus();
  }
  focusTextInput4(text) {
    this.setState({ password: this.state.password + text })
    this.textInput4.current.focus();
  }
  focusRemove(text) {
    this.setState({ password: this.state.password + text });
    Keyboard.dismiss()
  }

  async onSubmit() {
    try {
      if (this.state.password.length !== 4){
        Alert.alert('Incomplete Pin', "Please Enter a 4-digit pin")
      }

      else {
        await AsyncStorage.setItem('PINCode', this.state.password.toString());
        ToastAndroid.showWithGravity('Pincode has been set.', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        this.props.navigation.navigate('ConfirmPINScreen');
      }
    } catch (error) {
      Alert.alert("Error", error)
    }
  }



  render() {
    const loader = <Loader />
    return (
      <KeyboardAvoidingView style={styles.container} >

        {
          this.state.value === true
            &&
          loader
        }
        {
          this.state.value === false
          &&
          <View style={styles.container}>
            <Text style={styles.centered}>Set a PIN:</Text>
            <View style={styles.rowView}>
              <TextInput
                maxLength={1}
                placeholder="*"
                style={styles.textInput}
                keyboardType="number-pad"
                onChangeText={(text) => this.focusTextInput2(text)}
                secureTextEntry />

              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => this.focusTextInput3(text)}
                placeholder="*"
                ref={this.textInput2}
                style={styles.textInput}
                secureTextEntry />

              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => this.focusTextInput4(text)}
                placeholder="*"
                ref={this.textInput3}
                style={styles.textInput}
                secureTextEntry />

              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => this.focusRemove(text)}
                placeholder="*"
                ref={this.textInput4}
                style={styles.textInput}
                secureTextEntry />

            </View>

            <View style={styles.containerBtn}>
              <TouchableOpacity
                onPress={this.onSubmit}
                style={styles.btn}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </KeyboardAvoidingView>
    );
  }
}