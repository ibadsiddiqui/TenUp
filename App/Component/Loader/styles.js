import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    bgImage:{
        position: 'absolute',
        width: width,
        height: height
    },

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 247)',
    },
    logo:{
        width: width * 0.4,
        height: height * 0.2
    }
});

export default styles;
