import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    

    Container: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
    },
    MarginTopScreenTupAddress: {
        marginTop: height * 0.2
    },
    TupCode: {
        color: '#499FDB',
        fontWeight: 'bold',
        marginTop: height * 0.03,
        fontSize: width * 0.05,
    },
    rowView: {
        flexDirection: 'row',
    },
    qrCodeSize: {
        width: width * 0.32,
        height: width * 0.32,
        marginLeft: width * 0.14,
        marginTop: height * 0.73,
    },
    TupInfoMargin: {
        marginTop: height * 0.31
    },
    tupInfoContainer: {
        marginLeft: width * 0.65,
        position: 'absolute'
    },
    tupInfoTUPstyle: {
        fontWeight: 'bold',
        marginTop: height * 0.003,
        fontSize: width * 0.05,

    },
    tupInfoTupCurrency: {
        color: '#499FDB',
        fontWeight: 'bold',
        fontSize: width * 0.04,
        marginTop: height * 0.01,
    },
    tupInfoUSDCurrency: {
        fontWeight: 'bold',
        fontSize: width * 0.06,
        marginTop: height * 0.01,
    },

});

export default styles;