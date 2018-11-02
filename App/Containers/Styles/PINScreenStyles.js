import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        width: width,
        height: height
    },
    backBtnContainer: {
        position: 'absolute',
        top: height * 0.3,
        right: width * 0.1,
        marginBottom: height * 0.02,

    },
    colorWhite:{
        color: 'white'
    },
    backBtn: {
        width: width * 0.07,
        height: height * 0.025,
    },
    stericKey:{
        marginTop: 3
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputUnderline: {
        position: 'absolute',
        width: width * 0.8,
        height: height * 0.005,
        position: 'absolute',
        top: height * 0.35,
    },

    PINCodeHeaderContainer: {
        width: width * 0.7,
        position: 'absolute',
        top: height * 0.13
    },
    PINCodeHeaderText: {
        fontSize: height * 0.025,
        color: 'white',
        textAlign: 'center'
    },

    rowView: {
        flexDirection: 'row',
        marginBottom: height * 0.05,
    },
    numbericBtn: {
        width: width * 0.3,
    },
    numericContainer: {
        position: 'absolute',
        top: height * 0.45,

    },
    numericHeaderKey: {
        color: 'rgb(0,186,235)',
        fontSize: height * 0.04
    },
    centerHeaderKey:{
        // width: width * 0.2,
        // height: height * 0.05,
    },
    numericSubtitleKeys:{
        color: 'white',
        fontSize: height * 0.012,
    },
    textCenter: {
        textAlign: 'center'
    },

});

export default styles;
