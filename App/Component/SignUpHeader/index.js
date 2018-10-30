import React, { Component } from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import styles from './styles'


export default class SignUpHeader extends Component {
    render() {
        return (
            <View>
                <View style={[styles.headingContainer, styles.rowView]}>
                    <Image source={require('./../../Assets/login-screen/line.png')} style={styles.loginTextLine} />
                    <Text style={styles.headingText}>Sign Up</Text>
                </View>
                <View style={styles.subtitle}>
                    <Text style={styles.subtitleText}>Please enter your sign up details to continue.</Text>
                </View>
            </View>

        )
    }
}
