import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    logo: {
        marginTop: height * 0.35,
        width: width * 0.5,
        height: height * 0.3
    }

});

export default styles;
