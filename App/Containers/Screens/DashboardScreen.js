import React, { Component } from 'react'
import {
    View,
    StatusBar,
    Image
} from 'react-native'
import styles from './../Styles/DashboardScreenStyles'

export default class DashboardScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor="transparent" />
                <View style={styles.lowerNavBar}>
                    <View style={styles.iconsContainer}>
                        <Image source={require('./../../Assets/Bottam_tab-assets/sent_select.png')} style={styles.lowerNavBarIcons} />
                    </View>
                    <View style={styles.iconsContainer}>
                        <Image source={require('./../../Assets/Bottam_tab-assets/received_select.png')} style={styles.lowerNavBarIcons} />

                    </View>
                    <View style={styles.iconsContainer}>
                        <Image source={require('./../../Assets/Bottam_tab-assets/transaction_select.png')} style={styles.lowerNavBarIcons} />

                    </View>
                    <View style={styles.iconsContainer}>
                        <Image source={require('./../../Assets/Bottam_tab-assets/backup_select.png')} style={styles.lowerNavBarIcons} />

                    </View>
                    <View style={styles.iconsContainer}>
                        <Image source={require('./../../Assets/Bottam_tab-assets/setting_select.png')} style={styles.lowerNavBarIcons} />


                    </View>
                </View>
            </View>
        )
    }
}
