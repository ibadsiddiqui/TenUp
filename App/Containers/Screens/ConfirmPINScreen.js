
import React, { Component } from 'react';
import {
  Alert,
  AsyncStorage,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import styles from '../Styles/PINScreenStyles';

export default class ConfirmPINScreen extends Component {

  constructor(props) {
    super(props);
    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
    this.textInput3 = React.createRef();
    this.textInput4 = React.createRef();

    this.focusTextInput2 = this.focusTextInput2.bind(this);
    this.focusTextInput3 = this.focusTextInput3.bind(this);
    this.focusTextInput4 = this.focusTextInput4.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

    this.defaultState = {
      password: "",
      input1: "", // targeting input individual boxes
      input2: "",
      input3: "",
      input4: "",
    }
    this.state = this.defaultState;
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }

  async onSubmit() {
    try {

      // reset the values of those input boxes
      this.setState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      })

      if (this.state.password.length !== 4) {

        this.textInput1.current.focus();
        ToastAndroid.showWithGravity("Please Enter a 4-digit pin", ToastAndroid.SHORT, ToastAndroid.BOTTOM)

        this.setState({ ...this.defaultState });

      } else {

        const value = await AsyncStorage.getItem('PINCode');

        if (this.state.password !== value.toString()) {

          this.textInput1.current.focus();
          ToastAndroid.showWithGravity('Incorrect PIN ', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          this.setState({ ...this.defaultState });

        } else {

          ToastAndroid.showWithGravity('correct PIN ', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          this.props.navigation.navigate('LoginScreen')

        }

      }
    } catch (error) {
      Alert.alert("Error in PIN", "Please Close the App and Try Again")
    }
  }


  focusTextInput2(text) {
    this.setState({
      input1: text,
      password: this.state.password.concat(text)
    })
    this.textInput2.current.focus();
  }
  focusTextInput3(text) {
    this.setState({
      input2: text,
      password: this.state.password.concat(text)
    })
    this.textInput3.current.focus();
  }
  focusTextInput4(text) {
    this.setState({
      input3: text,
      password: this.state.password.concat(text)
    })
    this.textInput4.current.focus();
  }
  focusRemove(text) {
    this.setState({
      input4: text,
      password: this.state.password.concat(text)
    });
    Keyboard.dismiss()
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} >

        <Text style={styles.centered}>Enter a PIN</Text>
        <View style={styles.rowView}>
          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => this.focusTextInput2(text)}
            placeholder="*"
            ref={this.textInput1}
            style={styles.textInput}
            secureTextEntry
            value={this.state.input1} />

          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => this.focusTextInput3(text)}
            placeholder="*"
            ref={this.textInput2}
            style={styles.textInput}
            secureTextEntry
            value={this.state.input2} />

          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => this.focusTextInput4(text)}
            placeholder="*"
            ref={this.textInput3}
            style={styles.textInput}
            secureTextEntry
            value={this.state.input3} />

          <TextInput
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => this.focusRemove(text)}
            placeholder="*"
            ref={this.textInput4}
            style={styles.textInput}
            secureTextEntry
            value={this.state.input4} />

        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity
            onPress={this.onSubmit}
            style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView >
    );
  }
}