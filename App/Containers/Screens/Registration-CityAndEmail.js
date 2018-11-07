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

    cityValidator(text) {
        var validator = /[a-zA-Z\s]/
        return validator.test(text)
    }
    setCity(text) {
        this.setState({
            city: text
        });
    }
    
    EmailValidator(text)
    {
        var validator =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        return validator.test(text)
    }
    setEmail(text) {
        var username = text.replace(/[!#$%^&*(),?":{}|<>=/+;:'-]/g, '');
        
        this.setState({
            email: username
        });
        
    }
    
    
    async moveToPasswordAndNumber() {
        await AsyncStorage.setItem('email', this.state.email);
        await AsyncStorage.setItem('city', this.state.city);
        if (this.cityValidator(this.state.city)) {

            if (!(this.EmailValidator(this.state.email))) {
                ToastAndroid.showWithGravity('Please Enter a valid Email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            } 
            
            else if (this.state.email !== '' && this.state.city !== '' && this.EmailValidator(this.state.email)) {
                this.props.navigation.navigate('PasswordAndPhoneNumber')
            }
            else {
                ToastAndroid.showWithGravity('Please Enter City and Email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
           
        }
        else {
            ToastAndroid.showWithGravity('Please Enter valid City ', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
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
                            value={this.state.city}
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
                            value={this.state.email} />
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
