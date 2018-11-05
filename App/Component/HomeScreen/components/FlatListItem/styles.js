import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({

    rowView: {
        flexDirection: 'row',
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
    tableShadowBox: {
        borderWidth: 1,
        borderColor: 'rgb(208,208,208)',
        borderBottomWidth: 0,
    },

});

export default styles;