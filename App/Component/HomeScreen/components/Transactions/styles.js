import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    transactionScroll: {
        marginTop: height * 0.53,
        position: 'absolute',
        width: width,
        height: height * 0.39,

    }

});

export default styles;