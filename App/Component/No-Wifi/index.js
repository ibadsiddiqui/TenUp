import React, { Component } from 'react'
import {
    Image, 
    Text, 
    TouchableOpacity,
    View, 
} from 'react-native'
import styles from './styles'

export default class NoWifi extends Component {
    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.centerContainer}>

                    <Image source={require('./../../Assets/no-wifi-screen/no-internet.png')} style={styles.imageContainer} resizeMode="contain" />

                    <Text style={styles.connectionText}>No Internet Connection</Text>

                    <TouchableOpacity style={[styles.centered, styles.loginBtnContainer]}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
