import { StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 
        'rgb(20,72,130)'
    },
    rowView:{
        flexDirection: 'row'
    },
    upperInfo:{
        marginTop: height * 0.2,
        left: width * 0.1,
        position: 'absolute'
    },
    profileImage:{
        width: width * 0.24,
        height: height * 0.12,
    },
    userName:{
        color:'white',
        marginLeft: width * 0.01,
        marginTop: height * 0.02,
        fontSize: width * 0.055,
        fontWeight: '700'
    },
    userLocation:{
        color: 'white',
        left: width * 0.32,
        top: width * 0.12,
        position: 'absolute',
        fontSize: width * 0.035

    },
    locationIcon:{
        width: width * 0.035,
        height: height * 0.022,
        position: 'absolute',
        left: width * 0.27,
        top: width * 0.12
    },
    colorWhite:{
        color: 'white'
    },
    listStyling:{
        marginTop: width * 0.08,
        marginLeft: width * 0.05
    },
    listIcons:{
        marginTop: 2,
        width: width * 0.05,
        height: height * 0.038
    },
    listText:{
        fontSize: height * 0.025,
        fontWeight: '700',
        marginLeft: width * 0.1
    }
});

export default styles;