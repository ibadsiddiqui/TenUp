import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    headingContainer: {
        height: height * 0.075,
        marginLeft: width * 0.13,
        marginTop: height * 0.45,
    },

    welcomeText: {
        marginLeft: height * 0.01, 
        fontSize: height * 0.045, 
        color: 'white', 
        marginTop: height * 0.015
    },

    rowView: {
        flexDirection: 'row',
    },
    welcomeTextLine: {
        width: width * 0.01,
        height: height * 0.08
    }
});

export default styles;
