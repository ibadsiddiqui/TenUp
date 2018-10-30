import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StatusBar,
    BackHandler,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import styles from "./../Styles/RegistrationScreenStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'
import SignUpFooter from '../../Component/SignUpFooter';


export default class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }


    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                <View>

                    <SignUpHeader />
                    <View style={styles.userIconStyle}>
                        <Image source={require('./../../Assets/signup-screen/user1.png')}/>

                    </View>


                    <View style={styles.container}>

                        <View style={styles.rowView}>
                            <View style={styles.usernameIconStyle}>
                                <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Username"
                                placeholderTextColor="white"
                                value={this.state.username} />
                        </View>
                        <View style={styles.rowView}>
                            <View style={styles.usernameIconStyle}>
                                <Image source={require('./../../Assets/signup-screen/user.png')} style={styles.usernameIcon} />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Full Name"
                                placeholderTextColor="white" />

                        </View>

                        <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]} >
                            <Text style={styles.loginText}>Next</Text>
                        </TouchableOpacity>

                    </View>

                    {/* Footer */}

                    <SignUpFooter />
                </View>
            </View>
        )
    }
}
