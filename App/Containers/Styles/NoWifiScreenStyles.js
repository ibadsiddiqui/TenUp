import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(20,72,130)',
        width: width,
        height: height
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: width * 0.5,
        width: width
    },
    connectionText: {
        color: 'white',
        fontSize: height * 0.03,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        width: width * 0.6,
        height: height * 0.25,
    },
    loginBtnContainer: {
        marginTop: 20,
        width: width * 0.33,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5,
    },
    
    loginText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: width * 0.027
    },
});


export default styles;