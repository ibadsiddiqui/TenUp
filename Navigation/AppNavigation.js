import { StackNavigator } from 'react-navigation'

// import SetPINScreen from './../Containers/Screens/SetPINScreen'
// import ConfirmPINScreen from './../Containers/Screens/ConfirmPINScreen';
// import LoginScreen from './../Containers/Screens/LoginScreen'
// import RegistrationScreen from './../Containers/Screens/RegisterationScreen'
// import ProfileScreen from './../Containers/Screens/ProfileScreen'
// import ChangePasswordScreen from './../Containers/Screens/ChangePasswordScreen';
// import NoWifiScreen from './../Containers/Screens/NoWifiScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SetPINScreen: { screen: SetPINScreen },
  ConfirmPINScreen: {
    screen: ConfirmPINScreen,
    headerLeft: null
  },
  NoWifiScreen: { screen: NoWifiScreen },
  LoginScreen: { screen: LoginScreen },
  RegistrationScreen: { screen: RegistrationScreen },
  ProfileScreen: { screen: ProfileScreen },
  ChangePassswordScreen: { screen: ChangePasswordScreen }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'NoWifiScreen',
    navigationOptions: {
      //
    }
  })

export default PrimaryNav
