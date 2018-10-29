import { StackNavigator } from 'react-navigation'

import NoWifiScreen from './../Containers/Screens/NoWifiScreen';
import SplashScreenLoader from './../Containers/Screens/SplashScreen';
import SetPINScreen from './../Containers/Screens/SetPINScreen';
import ConfirmPINScreen from './../Containers/Screens/ConfirmPINScreen';

import LoginScreen from './../Containers/Screens/LoginScreen'
// import RegistrationScreen from './../Containers/Screens/RegisterationScreen'
// import ProfileScreen from './../Containers/Screens/ProfileScreen'
// import ChangePasswordScreen from './../Containers/Screens/ChangePasswordScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SplashScreen: { screen: SplashScreenLoader },
  NoWifiScreen: { screen: NoWifiScreen },
  SetPINScreen: { screen: SetPINScreen },
  ConfirmPINScreen: {
    screen: ConfirmPINScreen,
    headerLeft: null
  },
  LoginScreen: { screen: LoginScreen },
  // RegistrationScreen: { screen: RegistrationScreen },
  // ProfileScreen: { screen: ProfileScreen },
  // ChangePassswordScreen: { screen: ChangePasswordScreen }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      //
    }
  })

export default PrimaryNav
