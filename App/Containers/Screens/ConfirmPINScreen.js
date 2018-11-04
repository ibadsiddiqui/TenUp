
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
import styles from '../Styles/PINScreenStyles';
import SplashScreen from 'react-native-splash-screen';
export default class ConfirmPINScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PIN: [],
      value:null
    }
  }

  async componentWillMount(){
    const value = await AsyncStorage.setItem('PINCode', JSON.stringify(this.state.PIN))
    if(value !== null){
      this.setState({
        value : JSON.parse(value)
      })
    } else {
      return;
    }
  }
  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }

  async enterPIN(number) {
    if (this.state.PIN.length <= 2) {
      this.setState((prevState) => ({
        PIN: [...prevState.PIN, number]
      }));
      // await AsyncStorage.setItem('PINCode', JSON.stringify(this.state.PIN))
      // this.props.navigation.navigate('LoginScreen')
    } else {

      this.setState((prevState) => ({
        PIN: [...prevState.PIN, number]
      }));
      await AsyncStorage.setItem('PINCode', JSON.stringify(this.state.PIN))
      if(this.state.PIN === this.state.value){
        ToastAndroid.show('Navigating to login screen');
        this.props.navigation.navigate('LoginScreen')
      } else {
        this.props.navigation.navigate('confirmPINScreen')        
      }
    }
  }

  async removeLastPIN() {
    this.state.PIN.pop()
    this.setState( prevState => ({
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

        <TouchableOpacity style={styles.backBtnContainer} onPress={() => this.removeLastPIN()}>
          <Image source={require('./../../Assets/pincode-screen/cut.png')} style={styles.backBtn} />
        </TouchableOpacity>

        <Image source={require('./../../Assets/pincode-screen/bar.png')} style={styles.inputUnderline} />

        <View style={styles.numericContainer}>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(1)}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.enterPIN(2)}>
              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>2</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>ABC</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(3)}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>3</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>DEF</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(4)}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>4</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>GHI</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.enterPIN(5)}>

              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>5</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>JKL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(6)}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>6</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>MNO</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(7)}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>7</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>PQRS</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.enterPIN(8)}>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]} >
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>8</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>TUV</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn} onPress={() => this.enterPIN(9)}>
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

            <TouchableOpacity onPress={() => this.enterPIN(0)}>


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