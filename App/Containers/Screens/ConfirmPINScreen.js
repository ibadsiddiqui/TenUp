
import React, { Component } from 'react';
import {
  AsyncStorage,
  ToastAndroid,
  BackHandler,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const pinCode = 'PINCode';


import styles from '../Styles/PINScreenStyles';
import SplashScreen from 'react-native-splash-screen';
export default class ConfirmPINScreen extends Component {

  constructor() {
    super();
    this.state = {
      PIN: [],
      value: null,
      isPinCode: false,
      savePinCode: []
    }
  }

  async componentWillMount() {
    const value = await AsyncStorage.getItem(pinCode);
    if (value === null) {
      await this.setState({
        isPinCode: false

      })
      // Alert.alert('no PinCode', JSON.stringify(this.state.savePinCode))

    }
    else {
      const vaasd = await JSON.parse(value)
      await this.setState({
        isPinCode: true,
        savePinCode: vaasd
      })
      // Alert.alert(' PinCode', JSON.stringify(this.state.savePinCode))

    }

  }

  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }

  compare(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
      var num1 = arr1[index];
      var num2 = arr2[index];
      if (num1 === num2) {
      }
      else {
        return false
      }
    }
    return true
  }

  async enterPIN(number) {

    if (this.state.PIN.length <= 3) {

      await this.setState((prevState) => ({
        PIN: [...prevState.PIN, number],
      }));
    }
    if (this.state.PIN.length >= 4) {
      if (this.state.isPinCode) {
        if (this.compare(this.state.PIN, this.state.savePinCode)) {
          this.props.navigation.navigate('LoginScreen')
        }

        else {
          ToastAndroid.showWithGravity("Incorrect PIN", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        }
      }
      else {
        await AsyncStorage.setItem('PINCode', JSON.stringify(this.state.PIN))
        ToastAndroid.showWithGravity("Setting New PIN Code", ToastAndroid.SHORT, ToastAndroid.BOTTOM)

        this.props.navigation.navigate('LoginScreen')

      }
    }
  }

  async removeLastPIN() {
    this.state.PIN.pop()
    this.setState(prevState => ({
      PIN: [...prevState.PIN]
    }));
    await AsyncStorage.setItem('PINCode', '')

  }
  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor="transparent" translucent={true} />

        <Image source={require('./../../Assets/pincode-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />

        <Text style={{ top: 180, color: 'white', position: 'absolute', fontSize: 18 }}>{this.state.PIN}</Text>
        <View style={styles.PINCodeHeaderContainer}>
          <Text style={styles.PINCodeHeaderText}>For your security a 4-digit{'\n'}PIN code is needed </Text>
        </View>

        <TouchableOpacity style={styles.backBtnContainer} onPressOut={() => this.removeLastPIN()}>
          <Image source={require('./../../Assets/pincode-screen/cut.png')} style={styles.backBtn} />
        </TouchableOpacity>

        <Image source={require('./../../Assets/pincode-screen/bar.png')} style={styles.inputUnderline} />

        <View style={styles.numericContainer}>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('1')}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressOut={() => this.enterPIN('2')}>
              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>2</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>ABC</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('3')}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>3</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>DEF</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('4')}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>4</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>GHI</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressOut={() => this.enterPIN('5')}>

              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>5</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>JKL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('6')}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>6</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>MNO</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('7')}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>7</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>PQRS</Text>

            </TouchableOpacity>

            <TouchableOpacity onPressOut={() => this.enterPIN('8')}>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]} >
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>8</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>TUV</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPressOut={() => this.enterPIN('9')}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>9</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>WXYZ</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn}>
              <Text style={[styles.numericHeaderKey, styles.textCenter, styles.colorWhite, styles.stericKey]}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressOut={() => this.enterPIN('0')}>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]} >
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>0</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter, styles.colorWhite]}>#</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>

      </View>
    );
  }
}