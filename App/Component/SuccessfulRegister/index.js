import React, {Component} from 'react';
import {View, Image, Text} from 'react-native'
import styles from './styles'


export default class SuccessfulRegister extends Component {
  render() {
    return (
    <View style={[styles.headingContainer, styles.rowView]}>
        <Image source={require('./../../Assets/login-screen/line.png')} style={styles.successTextLine} />
        <Text style={styles.successText}>You have been successfully registered.</Text>
    </View>
    )
  }
}

