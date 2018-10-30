import React, { Component } from 'react'
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import styles from './styles'
export default class LoginFooter extends Component {
    render() {
        return (
            <View style={[styles.centered, styles.signUpContainer]}>
                <Text style={styles.signUpText}>Login with</Text>

                <View style={styles.rowView}>
                    <TouchableOpacity>
                        <Image source={require('./../../Assets/login-screen/fb-logo-btn.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./../../Assets/login-screen/twitter.png')} style={styles.midMargin} />

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('./../../Assets/login-screen/instagram.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
