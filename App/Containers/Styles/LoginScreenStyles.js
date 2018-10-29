import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: height
    },
    centered: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        marginTop: width * 0.15,
        alignItems: 'center',

    },

    forgotPasswordContainer: {
        left: width * 0.24
    },

    forgotPasswordText: {
        color: 'white',
        fontSize: width * 0.033,

    },

    headingText: {
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: 'normal',
        marginLeft: width * 0.02,
        marginTop: height * 0.01
    },

    headingContainer: {
        height: height * 0.06,
        marginLeft: width * 0.13,
        marginTop: height * 0.13,
    },
    errorIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginLeft: -30,
        marginRight: 5,
        paddingBottom: height * 0.061,
        width: 25,
        height: 20,
    },
    loginTextLine: {
        width: width * 0.01,
        height: height * 0.06
    },
    loginBtnContainer: {
        marginTop: 20,
        width: width * 0.33,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },

    loginText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },

    midMargin: {
        marginLeft: width * 0.09,
        marginRight: width * 0.09
    },
    rowView: {
        flexDirection: 'row',
    },
    signUpContainer: {
        marginTop: height * 0.1,
    },
    signUpText: {
        color: 'white',
        fontSize: width * 0.045,
        marginBottom: width * 0.05
    },
    subtitle: {
        marginLeft: width * 0.13,
        marginTop: height * 0.02,
    },

    subtitleText: {
        color: 'rgb(128,165,218)',
        fontSize: width * 0.035
    },

    textInput: {
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: 'transparent',
        borderWidth: 2,
        width: width * 0.7,
        paddingBottom: -10,
        marginBottom: 10,
        marginTop: -12,
        fontSize: 15,
        textAlign: 'justify',
        color: "white",
        textDecorationLine: 'none'
    },

    usernameIcon: {
        width: 25,
        height: 25,
    },

    usernameIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
        marginRight: -10,
        paddingBottom: 25,
        width: 45,
        height: 40,
    },
    welcomeTextLine: {
        width: width * 0.01,
        height: height * 0.08
    }
});

export default styles;
