import React, {Component} from 'react';
import {View, Image, Text} from 'react-native'
import styles from './styles'


export default class WelcomeBack extends Component {
  render() {
    return (
    <View style={[styles.headingContainer, styles.rowView]}>
        <Image source={require('./../../Assets/login-screen/line.png')} style={styles.welcomeTextLine} />
        <Text style={styles.welcomeText}>Welcome Back...</Text>
    </View>
    )
  }
}

