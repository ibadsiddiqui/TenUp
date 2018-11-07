import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    sandwichIconContainer: {
        margin: width * 0.04,
        top: width * 0.08,
        position: 'absolute',
    },
    sandwichIcon: {
        width: width * 0.04,
        height: height * 0.03,
    },
    heading: {
        marginTop: height * 0.125,
        marginLeft: width * 0.1,
        color: '#0c3b87',
        marginBottom: height * 0.03,
        fontSize: height * 0.035,
        fontWeight: "bold",
        position: 'absolute'
    },
    tableHeading: {
        marginTop: height * 0.5,
        color: '#0c3b87',
        marginBottom: height * 0.01,
        fontSize: height * 0.03,
        fontWeight: "bold",
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
    },
    Container: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
    },
    MarginTopScreenTupWalletTex: {
        marginTop: height * 0.2
    },
    walletAddress: {
        fontSize: width * 0.04,
    },

    rowView: {
        flexDirection: 'row',
    },

});

export default styles;