import React, { Component } from 'react';
import {
    NetInfo,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';

import NoWifi from './../../Component/No-Wifi';

export default class NoWifiScreen extends Component {
    constructor() {
        super();
        this.state = {
            online: null,
            offline: null,
        }
    }

    // Network Check
    componentWillMount() {
        NetInfo.getConnectionInfo().then(reach => {
            // Alert.alert('Connection info', reach.type)
            this.onConnectivityChange(reach);
        });
        NetInfo.addEventListener('connectionChange', this.onConnectivityChange)
    }

    // removes listener
    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this.onConnectivityChange)
    }


    onConnectivityChange = reach => {
        // const type = reach.toLowerCase();
        this.setState({
            online: reach === 'none',
            offline: reach !== 'none'
        })
    }

    render() {
        if (this.state.offline) {
            return <NoWifi />
        } else {
            return (

                <View style={styles.container}>
                    <Text style={styles.toolbar}>My Awesome App</Text>
                    <Text style={styles.text}>Lorem...</Text>
                    <Text style={styles.text}>Lorem ipsum...</Text>
                </View>
            )

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    toolbar: {
        backgroundColor: '#3498db',
        padding: 15,
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    text: {
        padding: 10,
    },
});