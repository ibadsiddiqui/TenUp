import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    centered:{
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    midMargin:{
        marginLeft: width * 0.09,
        marginRight: width * 0.09
    },

    rowView: {
        flexDirection: 'row',
    },
    signUpContainer:{
        marginTop: height * 0.1,
    },
    signUpText:{
        color: 'white',
        fontSize: width * 0.045,
        marginBottom: width * 0.05
    },
});

export default styles;
