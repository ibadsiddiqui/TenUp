import React, { Component } from 'react';
import {
    NetInfo,

    Image,
    View,
    StatusBar
} from 'react-native';

import styles from './../Styles/CheckWifiScreenStyles'
import Loader from './../../Component/Loader'

export default class CheckWifiScreen extends Component {
    constructor() {
        super();
        this.state = {
            Status: null,
            offline: null,
        }
    }

    // // Network Check
    // componentWillMount() {
    //     NetInfo.getConnectionInfo().then(reach => {
    //         // Alert.alert('Connection info', reach.type)
    //         this.onConnectivityChange(reach);
    //     });
    //     NetInfo.addEventListener('connectionChange', this.onConnectivityChange)
    // }

    // // removes listener
    // componentWillUnmount() {
    //     NetInfo.removeEventListener('connectionChange', this.onConnectivityChange)
    // }

    // onConnectivityChangereach(reach) {
    //     this.setState({
    //         online: reach !== 'none',
    //         offline: reach === 'none'
    //     })
    // }

    render() {
        return (
         <Loader/>
        )
    }
}