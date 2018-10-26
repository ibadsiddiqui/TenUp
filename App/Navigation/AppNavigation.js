import { StackNavigator } from 'react-navigation'

// import NoWifiScreen from './../Containers/Screens/NoWifiScreen';
import CheckWifiScreen from './../Containers/Screens/CheckWfiScreen';
// import SetPINScreen from './../Containers/Screens/SetPINScreen';
// import ConfirmPINScreen from './../Containers/Screens/ConfirmPINScreen';

// import LoginScreen from './../Containers/Screens/LoginScreen'
// import RegistrationScreen from './../Containers/Screens/RegisterationScreen'
// import ProfileScreen from './../Containers/Screens/ProfileScreen'
// import ChangePasswordScreen from './../Containers/Screens/ChangePasswordScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CheckWifiScreen: { screen: CheckWifiScreen },
  // NoWifiScreen: { screen: NoWifiScreen },
  // SetPINScreen: { screen: SetPINScreen },
  // ConfirmPINScreen: {
  //   screen: ConfirmPINScreen,
  //   headerLeft: null
  // },
  // LoginScreen: { screen: LoginScreen },
  // RegistrationScreen: { screen: RegistrationScreen },
  // ProfileScreen: { screen: ProfileScreen },
  // ChangePassswordScreen: { screen: ChangePasswordScreen }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'CheckWifiScreen',
    navigationOptions: {
      //
    }
  })

export default PrimaryNav
