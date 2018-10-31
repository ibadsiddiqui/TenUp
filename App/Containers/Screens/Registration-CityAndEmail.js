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
    AsyncStorage
} from 'react-native'
import styles from "./../Styles/Registration-CityAndEmailStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'


export default class RegistrationCityAndEmail extends Component {
    constructor() {
        super();
        this.setEmail = this.setEmail.bind(this);
        this.setCity = this.setCity.bind(this);

        this.moveToPasswordAndNumber = this.moveToPasswordAndNumber.bind(this)
        this.state = {
            city: '',
            email: ''
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }

    async setCity(text) {
        this.setState({
            city: text
        });
    }
    async setEmail(text) {
        this.setState({
            email: text
        });
        await AsyncStorage.setItem('city', this.state.city);
        await AsyncStorage.setItem('email', this.state.email);
    }
    moveToPasswordAndNumber() {

        if (this.state.city !== '' && this.state.email !== '') {
            if (this.state.email.search('@') !== -1) {
                if (this.state.email.search('-') !== -1) {
                    this.props.navigation.navigate('PasswordAndPhoneNumber')
                }
                else {
                    ToastAndroid.showWithGravity('Please Enter a valid Email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                }
            }
        }
        else {
            ToastAndroid.showWithGravity('Please Enter City and Email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }
    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {/* Header */}
                <SignUpHeader />


                {/* Body */}
                <View style={styles.container}>


                    <View style={styles.rowView}>
                        <View style={styles.cityIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/city.png')} style={styles.cityIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="City"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setCity(text)}
                            value={this.state.username}
                            keyboardType="email-address" />
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.emailIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/email.png')} style={styles.emailIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email Address"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setEmail(text)}
                            value={this.state.gender} />
                    </View>

                </View>

                <TouchableOpacity style={[styles.centered, styles.nextBtnContainer]} onPress={this.moveToPasswordAndNumber}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>

                {/* Footer */}
            </View>
        )
    }
}
