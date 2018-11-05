import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({

    rowView: {
        flexDirection: 'row',
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
    tableMargin: {
        marginLeft: width * 0.1,
    },
    transactionStyle: {
        marginTop: height * 0.019,
        color: 'rgb(20,72,130)',
        marginBottom: height * 0.007,
        fontSize: height * 0.025,
    },
    toDateContainer: {

        borderLeftColor: 'rgb(152,148,147)',
        borderLeftWidth: 2,

    },
    TupBalanceStyle: {
        marginLeft: width * 0.09,
        color: 'rgb(0,188,236)',
        fontWeight: 'bold',
        fontSize: height * 0.02,
    },
    confirmedStyle: {
        marginBottom: height * 0.02,
        fontSize: height * 0.02,
    },
    tableBorder: {
        borderTopColor: '#499FDB',
        borderTopWidth: 1,
    },
    tableShadowBox: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'rgb(208,208,208)',
        borderBottomWidth: 0,
    },
    transactionScroll: {
        marginTop: height * 0.56,
        position: 'absolute',
        width: width,
        height: height * 0.35,
    }

});

export default styles;