
import React, { Component } from 'react';
import {

  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import styles from '../Styles/PINScreenStyles';
import SplashScreen from 'react-native-splash-screen';
export default class ConfirmPINScreen extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    SplashScreen.hide()
    BackHandler.addEventListener('hardwareBackPress', () => { return true });
  }



  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor="transparent" translucent={true} />

        <Image source={require('./../../Assets/pincode-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />

        <View style={styles.PINCodeHeaderContainer}>
          <Text style={styles.PINCodeHeaderText}>For your security{'\n'}PIN code is needed </Text>
        </View>

        <TouchableOpacity style={styles.backBtnContainer}>
          <Image source={require('./../../Assets/pincode-screen/cut.png')} style={styles.backBtn} />
        </TouchableOpacity>

        <Image source={require('./../../Assets/pincode-screen/bar.png')} style={styles.inputUnderline} />

        <View style={styles.numericContainer}>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>2</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>ABC</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>3</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>DEF</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>4</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>GHI</Text>
            </TouchableOpacity>

            <TouchableOpacity>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>5</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>JKL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>6</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>MNO</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>7</Text>
              <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>PQRS</Text>

            </TouchableOpacity>

            <TouchableOpacity>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>8</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>TUV</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>9</Text>
                <Text style={[styles.numericSubtitleKeys, styles.textCenter]}>WXYZ</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.rowView}>

            <TouchableOpacity style={styles.numbericBtn}>
              <Text style={[styles.numericHeaderKey, styles.textCenter]}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity>


              <View style={[styles.centerHeaderKey, styles.numbericBtn]}>
                <Text style={[styles.numericHeaderKey, , styles.textCenter]}>0</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numbericBtn}>
              <View>
                <Text style={[styles.numericHeaderKey, styles.textCenter]}>#</Text>
              </View>
            </TouchableOpacity>

          </View>


        </View>
      </View>
    );
  }
}