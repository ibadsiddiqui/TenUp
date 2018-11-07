import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StatusBar,
    BackHandler,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import styles from "./../Styles/RegistrationScreenStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'
import SignUpFooter from '../../Component/SignUpFooter';


export default class RegisterScreen extends Component {
    constructor() {
        super();
        this.setFullName = this.setFullName.bind(this);
        this.setUsername = this.setUsername.bind(this);

        this.moveToAgeAndGender = this.moveToAgeAndGender.bind(this)
        this.state = {
            username: '',
            fullname: ''
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
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
    setFullName(text) {
        this.setState({
            fullname: text
        });
    }
    async moveToAgeAndGender() {
        await AsyncStorage.setItem('fullname', this.state.fullname);
        await AsyncStorage.setItem('username', this.state.username);

        if (this.state.fullname !== '' && this.state.username !== '' && this.state.username.length >=8) {
            this.props.navigation.navigate('AgeAndGender');
        } else if(this.state.username.length <8){
            ToastAndroid.showWithGravity('Username should atleast contain 8 chracters', ToastAndroid.SHORT, ToastAndroid.BOTTOM);

        }
        else {
            ToastAndroid.showWithGravity('Please Enter Your Full Name and Username', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
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

                    <View style={styles.userIconStyle}>
                        <Image source={require('./../../Assets/signup-screen/user1.png')} />

                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.usernameIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setUsername(text)}
                            value={this.state.username} />
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.usernameIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Full Name"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setFullName(text)}
                            value={this.state.fullname} />

                    </View>


                </View>

                <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} onPress={this.moveToAgeAndGender}>
                    <Text style={styles.loginText}>Next</Text>
                </TouchableOpacity>

                {/* Footer */}

                <SignUpFooter />
            </View>
        )
    }
}
