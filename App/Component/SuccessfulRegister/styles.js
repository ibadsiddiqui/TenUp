import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    headingContainer: {
        height: height * 0.5,
        marginLeft: width * 0.13,
        marginTop: height * 0.45,
    },

    successText: {
        marginLeft: height * 0.01, 
        fontSize: height * 0.035, 
        color: 'white', 
        // marginTop: height * 0.015,
        // marginBottom: height * 0.015
    },

    rowView: {
        flexDirection: 'row',
    },
    successTextLine: {
        width: width * 0.01,
        height: height * 0.08
    }
});

export default styles;
