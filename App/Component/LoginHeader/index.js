import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import styles from './styles'


export default class LoginHeader extends Component {
    render() {
        return (
            <View>
                <View style={[styles.headingContainer, styles.rowView]}>
                    <Image source={require('./../../Assets/login-screen/line.png')} style={styles.loginTextLine} />
                    <Text style={styles.headingText}>Login</Text>
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>Please enter your login details to continue.</Text>
                </View>
            </View>

        )
    }
}
