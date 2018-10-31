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
        marginTop: width * 0.11,
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
    errorIcon: {
        width: 25,
        height: 25,
    },
    errorIconStyle: {
        // borderWidth: 2,
        // borderBottomColor: 'rgb(131,182,228)',
        // borderColor: "transparent",
        marginLeft: -30,
        marginRight: 5,
        marginTop: 7,
        width: 25,
        height: 20,
    },
    loginTextLine: {
        width: width * 0.01,
        height: height * 0.06
    },
    nextBtnContainer: {
        marginTop: 20,
        width: width * 0.33,
        height: height * 0.06,
        backgroundColor: 'rgb(6,183,233)',
        borderRadius: 5
    },

    nextText: {
        fontSize: width * 0.04,
        color: 'white',
        fontWeight: '600'
    },


    rowView: {
        flexDirection: 'row',
        marginTop: width * 0.04
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

    cityIcon: {
        width: 25,
        height: 30,
    },
    emailIcon: {

        width: 25,
        height: 30,
    },
    cityIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
        marginRight: -10,
        paddingBottom: 25,
        width: 45,
        height: 40,
    },
    emailIconStyle: {
        borderWidth: 2,
        borderBottomColor: 'rgb(131,182,228)',
        borderColor: "transparent",
        marginBottom: 10,
        marginRight: -10,
        paddingBottom: 25,
        width: 40,
        height: 40,
    },

});

export default styles;
