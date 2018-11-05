import React, { Component } from 'react'
import {
    NetInfo,
    View,
    StatusBar,
    Image
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import Loader from './../../Component/Loader'



export default class SplashScreenLoader extends Component {

    constructor() {
        super();
        this.state = {
            online: false,
            offline: false,
            isFetching: true
        };
    }
    // Network Check
    componentWillMount() {
        NetInfo.getConnectionInfo().done(
            reach => this.setStatus(reach.type)
        );
        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
        SplashScreen.hide()

    }

    async handleFirstConnectivityChange(connectionInfo) {
        let result = Boolean;

        if (connectionInfo.type == 'wifi' || connectionInfo.type == 'cellular') {
            result = await true;

        } else if (connectionInfo.type == 'unknown')
            await ToastAndroid.showWithGravity('Unkonwn Connection', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        else
            result = await false
        return result
    }

    // removes listener    
    componentWillUnmount = () => {
        NetInfo.removeEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    };

    setStatus(reach) {

        if (reach == 'wifi' || reach == 'cellular') {

            setTimeout(() => {
                this.setState({
                    isFetching: false,
                    offline: false,
                    online: true,
                })

            }, 3000);
        } else {
            setTimeout(() => {
                this.setState({
                    isFetching: false,
                    offline: true,
                    online: false,
                })

            }, 3000);
        }

    }
    render() {

        const Load = <Loader />
        return (
            this.state.isFetching == true &&
            Load
            ||
            (this.state.online == true && this.state.offline == false) && this.props.navigation.navigate('LoginScreen')
            ||
            (!this.state.offline == true && this.state.online == false) && this.props.navigation.navigate('NoWifiScreen')
        )
    }
}
