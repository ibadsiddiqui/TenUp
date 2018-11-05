import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles'
export default class TUPInfo extends Component {
    render() {
        return (
            <View>

                <View style={[styles.Container, styles.MarginTopScreenTupAddress]}>
                    <Text style={styles.TupCode}>1LZeXnhQZ5xyncwkeKJad</Text>
                </View>
                <View style={styles.rowView}>
                    <View style={[styles.Container]}>
                        <Image style={styles.qrCodeSize} source={require('./../../../../Assets/home-screen/qrcode.png')} />
                    </View>
                    <View style={[styles.tupInfoContainer, styles.TupInfoMargin]}>
                        <Text style={styles.tupInfoTUPstyle}>TUP</Text>
                        <Text style={styles.tupInfoTupCurrency}>0.0000078</Text>
                        <Text style={styles.tupInfoUSDCurrency}>$350</Text>
                    </View>
                </View>
            </View>

        )
    }
}
