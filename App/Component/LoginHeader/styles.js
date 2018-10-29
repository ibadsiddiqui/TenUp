import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({


    headingText:{
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: 'normal',
        marginLeft: width * 0.02,
        marginTop: height * 0.01
    },
    
    headingContainer:{
        height: height * 0.06,
        marginLeft: width * 0.13,
        marginTop: height * 0.13,
    },

    loginTextLine:{
        width: width * 0.01,
        height: height * 0.06
    },

    loginText:{
        fontSize: width * 0.04,
        color : 'white',
        fontWeight: '600'
    },


    rowView: {
        flexDirection: 'row',
    },
    subtitle:{
        marginLeft: width * 0.13,
        marginTop: height * 0.02,
    },

    subtitleText:{
        color: 'rgb(128,165,218)',
        fontSize: width * 0.035
    },
});

export default styles;
