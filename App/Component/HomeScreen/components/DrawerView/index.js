import React, { Component } from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './styles';


export default class DrawerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperInfo}>

                    <View style={styles.rowView}>
                        <Image source={require('./../../../../Assets/sidemenu-assets/image.png')} style={styles.profileImage} />
                        <Text style={styles.userName}>Vivek Ravin</Text>
                    </View>

                    <Image source={require('./../../../../Assets/sidemenu-assets/location.png')} style={styles.locationIcon} />

                    <Text style={styles.userLocation}>California</Text>


                    <TouchableOpacity>
                        <View style={[styles.rowView, styles.listStyling]}>
                            <Image source={require(`./../../../../Assets/sidemenu-assets/profile.png`)} style={styles.listIcons} />
                            <Text style={[styles.colorWhite, styles.listText]}>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.rowView, styles.listStyling]}>
                            <Image source={require(`./../../../../Assets/sidemenu-assets/send.png`)} style={styles.listIcons} />
                            <Text style={[styles.colorWhite, styles.listText]}>Send</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={[styles.rowView, styles.listStyling]}>
                            <Image source={require(`./../../../../Assets/sidemenu-assets/received.png`)} style={styles.listIcons} />
                            <Text style={[styles.colorWhite, styles.listText]}>Received</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={[styles.rowView, styles.listStyling]}>
                            <Image source={require(`./../../../../Assets/sidemenu-assets/transaction.png`)} style={styles.listIcons} />
                            <Text style={[styles.colorWhite, styles.listText]}>Transaction History</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
}
