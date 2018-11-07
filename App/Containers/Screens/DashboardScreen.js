import React, { Component } from 'react'
import {
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native'

// Route
import { NativeRouter, Route, Link } from "react-router-native";

// Styles
import styles from './../Styles/DashboardScreenStyles'

//  Component
import HomeScreen from './../../Component/HomeScreen/index'

export default class DashboardScreen extends Component {
    constructor() {
        super();
        this.state = {
            routeTo: '',
            routingOn: null,
        }
    }

    routeTo(place) {
        this.setState({
            routeTo: place,
            routingOn: true
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor="transparent" />

                <HomeScreen />
                <View style={styles.lowerNavBar}>


                    <TouchableOpacity onPress={() => this.routeTo('Sent')}>
                        <View style={styles.iconsContainer}>
                            {
                                (this.state.routeTo === 'Sent'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/sent_unselect.png')} style={styles.lowerNavBarIcons} />)
                                ||
                                (this.state.routeTo !== 'Sent'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/sent_select.png')} style={styles.lowerNavBarIcons} />)
                            }

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.routeTo('Receive')}>
                        <View style={styles.iconsContainer}>

                            {
                                (this.state.routeTo === 'Receive'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/received_unselect.png')} style={styles.lowerNavBarIcons} />)
                                ||
                                (this.state.routeTo !== 'Receive'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/received_select.png')} style={styles.lowerNavBarIcons} />)

                            }

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.routeTo('Transactions')}>
                        <View style={styles.iconsContainer}>

                            {
                                (this.state.routeTo === 'Transactions'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/transaction_unselect.png')} style={styles.lowerNavBarIcons} />)
                                ||
                                (this.state.routeTo !== 'Transactions'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/transaction_select.png')} style={styles.lowerNavBarIcons} />)

                            }


                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.routeTo('Backup')}>

                        <View style={styles.iconsContainer}>

                            {
                                (this.state.routeTo === 'Backup'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/backup_unselect.png')} style={styles.lowerNavBarIcons} />)
                                ||
                                (this.state.routeTo !== 'Backup'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/backup_select.png')} style={styles.lowerNavBarIcons} />)

                            }


                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.routeTo('Setting')}>

                        <View style={styles.iconsContainer}>

                            {
                                (   this.state.routeTo === 'Setting'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/setting_unselect.png')} style={styles.lowerNavBarIcons} />)
                                    ||
                                (   this.state.routeTo !== 'Setting'
                                    &&
                                    <Image source={require('./../../Assets/Bottam_tab-assets/setting_select.png')} style={styles.lowerNavBarIcons} />)

                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
