import React, { Component } from 'react'
import {
    View,
    StatusBar,
    Image,
} from 'react-native'
import styles from './styles'

export default class Loader extends Component {
    render() {
        return (
            <View style={styles.container} >
                <StatusBar translucent={true} hidden={true} />
                <Image source={require('./../../Assets/loader/Logo-Loop.gif')} style={styles.logo} />
            </View>
        )
    }
}
