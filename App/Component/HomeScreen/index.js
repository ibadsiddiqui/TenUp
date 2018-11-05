import React, { Component } from 'react'
import {
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    DrawerLayoutAndroid,
} from 'react-native'
const { width } = Dimensions.get('window')

// styles
import styles from './styles'

// components
import SplashScreen from 'react-native-splash-screen'
import TUPInfo from './components/TUPInfo';
import Transactions from './components/Transactions'
import DrawerView from './components/DrawerView'

export default class HomeScreen extends Component {
    constructor() {
        super()
        
        this.openMenu = this.openMenu.bind(this);
    }

    componentDidMount() {
        SplashScreen.hide()
    }
    openMenu() {
        this.menudrawer.openDrawer();
    }
    render() {
        return (

            <DrawerLayoutAndroid
                ref={(_menudrawer) => this.menudrawer = _menudrawer}
                drawerWidth={width }
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <DrawerView/>}>

                <TouchableOpacity onPress={() => this.openMenu()} style={styles.sandwichIconContainer}>
                    <Image source={require('./../../Assets/home-screen/sidemenu.png')} style={styles.sandwichIcon} />
                </TouchableOpacity>

                <Text style={styles.heading}>Home</Text>

                <View style={[styles.Container, styles.MarginTopScreenTupWalletTex]}>
                    <Text style={styles.walletAddress}>Your current tup wallet address</Text>
                </View>

                <TUPInfo/>
                <Text style={styles.tableHeading}>Transaction log</Text>

                <Transactions/>

            </DrawerLayoutAndroid>

        )
    }
}

