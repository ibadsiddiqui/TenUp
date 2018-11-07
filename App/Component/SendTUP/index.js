import React, { Component } from 'react'
import styles from "./styles"
import {
    View,
    Text,
    Image,
    StatusBar,
    DrawerLayoutAndroid,
    TouchableOpacity,
    BackHandler
} from 'react-native'

import { Link } from "react-router-native";


import SplashScreen from 'react-native-splash-screen'

export default class SendTup extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);

    }//end of constructor
    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }
    onSubmit() { }

    render() {

        return (
            <View style={styles.body}>
                <StatusBar translucent={true} backgroundColor='transparent' />
                <Link to="/../">
                    <Image style={styles.backIcon} source={require('./../../Assets/sent-tups-screen/back.png')} />
                </Link>
                <View>
                    <Text style={styles.heading}>Sent </Text>
                </View>
                {/* <View style={styles.rowView}>
                    <Text style={[styles.subHeadTo, styles.bottomBorder]}>To...</Text>
                    <Image style={[styles.subHeadQRCode, styles.subHeadQRCodeSize]} source={require('./../../Assets/sent-tups-screen/qr.png')} />
                </View>
                <View>
                    <Text style={styles.walletCode}>asdqJYQNAGusg63267sj218</Text>
                </View>
                <View style={[styles.rowView, styles.converter]}>
                    <Text style={[styles.converterText, styles.cryptoCurrencyValue]} >0.0007</Text>
                    <Image source={require('./../../Assets/sent-tups-screen/convert.png')} />
                    <Text style={[styles.converterText, styles.normalCurrencyValue]} >38.65</Text>

                </View>
                <View style={[styles.rowView, styles.currencyValue]}>
                    <Text style={styles.cryptoCurrencyText}>btc</Text>
                    <Text style={styles.normalCurrencyText}>usd</Text>
                </View>
                <TouchableOpacity style={[styles.centered, styles.sentBtnContainer]}>
                    <Text style={styles.sentText}>Send</Text>
                </TouchableOpacity> */}

            </View>


        );
    }

}