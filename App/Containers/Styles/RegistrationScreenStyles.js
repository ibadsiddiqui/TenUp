import { StyleSheet, Dimensions, } from 'react-native'

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    cardView: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    centered:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    rowView: {
        flexDirection: 'row',
    },

    textInput: {
        borderBottomColor: 'black',
        borderColor: 'transparent',
        borderWidth: 2,
        width: width * 0.8,
        paddingBottom: -10,
        marginBottom: 10,
        marginTop: -12,
        marginLeft: -2
    },

    uploadBtn: {
        marginLeft: width * 0.3,
        width: 60,
        borderRadius: 10,
        height: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        marginLeft: 20,
        marginTop: -3
    },
    uploadBtnText: {
        color: 'white',
    }
});

export default styles;
