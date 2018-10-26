import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    rowView: {
        flexDirection: 'row',
    },

    textInput: {
        height: 40,
        borderColor: 'purple',
        borderWidth: 2,
        width: 25,
        margin: 5,
        textAlign: 'center'
    },

    btn: {
        backgroundColor: '#34495e',
        borderRadius: 3,
        padding: 13,
        flex: 1,
    },

    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },

    containerBtn: {
        marginTop: 10,
        height: 50,
        width: 80
        

    },

});

export default styles;
