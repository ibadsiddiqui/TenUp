import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create(
    {
        body: {
            backgroundColor: 'rgb(255,255,255)',
            width: width,
            height: height,
            marginTop: 10,
        },
        backIcon: {
            width: width * 0.04,
            height: height * 0.04,
            margin: width * 0.04,
            top: width * 0.05,
            position: 'absolute'
        },
        backgroundImage: {
            backgroundColor: 'white',
            top: 0, left: 0, bottom: 0, right: 0

        },

        rowView: {
            flexDirection: 'row',

        },
        bottomBorder: {
            borderBottomColor: 'rgb(211, 211, 211)',
            borderBottomWidth: 1,
            width: width / 1.7,
        },
        sentBtnContainer: {
            marginTop: 60,
            width: width * 0.5,
            height: height * 0.06,
            backgroundColor: 'rgb(6,183,233)',
            borderRadius: 5
        },
        sentText: {
            fontSize: width * 0.04,
            color: 'white',
            fontWeight: '600'
        },
        centered: {
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        },
        converter: {
            justifyContent: 'center',
            paddingTop: height * 0.1,
        },
        currencyValue: {
            justifyContent: 'center',
            paddingTop: 0.1,

        },
        cryptoCurrencyValue: {
            color: '#08bfdb',
            fontWeight: 'bold',
        },
        cryptoCurrencyText: {
            color: '#08bfdb',
            fontSize: 20,
            paddingRight: width * 0.24,
        },
        normalCurrencyValue: {
            color: 'rgb(115, 115, 115)',
            fontWeight: 'bold',
        },
        normalCurrencyText: {

            fontSize: 20,
            color: 'rgb(115, 115, 115)'
            //   paddingRight: width * 0.24,
        },
        converterText: {
            paddingLeft: 20,
            paddingRight: 20,
            fontSize: 25,
            borderBottomColor: 'rgb(211, 211, 211)',
            borderBottomWidth: 1,

        },
        centerImage: {
            marginLeft: width / 2,
            marginTop: 2,
            width: 50,
            height: 50,
        },
        subHeadTo: {
            marginTop: height * 0.1,
            marginLeft: width * 0.06,
            fontSize: height * 0.04,
            fontWeight: 'bold',
            position: 'absolute'
        },
        subHeadQRCode: {
            marginTop: height * 0.05,
            marginLeft: width * 0.75,
        },
        subHeadQRCodeSize: {
            width: 80,
            height: 80,

        },

        heading: {
            marginTop: height * 0.115,
            marginLeft: width * 0.1,
            color: '#0c3b87',
            marginBottom: height * 0.03,
            fontSize: height * 0.035,
            fontWeight: "bold",
            position: 'absolute'
        },
        walletCode: {
            marginTop: -5,
            marginLeft: width * 0.07,
            fontSize: height * 0.03,
            fontWeight: 'bold',
            color: 'rgb(115, 115, 115)	',
        }
    }

);

export default styles;