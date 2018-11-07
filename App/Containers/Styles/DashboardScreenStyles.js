import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    lowerNavBar:{
        height: height * 0.08,
        position: 'absolute',
        width: width,
        backgroundColor: 'rgb(20,72,130)',
        flexDirection: 'row',
        bottom: 0,
    },
    lowerNavBarIcons:{
        width: width * 0.09,
        height: height * 0.055,
    },
    iconsContainer:{
        marginLeft: width * 0.09,
        marginTop: width * 0.025
    }
});

export default styles;
