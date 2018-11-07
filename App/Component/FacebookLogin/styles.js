import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    fbContainer:{
        position: 'absolute',
        // width: width * 0.05,
        top: height * 0.88,
        // left: width * 0.28,
        // zIndex: 0
        
    },
    fbButton:{
        // margin: 100,
        // width: width * 0.2,
        // zIndex: 1
    }
});

export default styles;
