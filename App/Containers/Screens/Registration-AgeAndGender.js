import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StatusBar,
    BackHandler,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import styles from "./../Styles/Registration-AgeAndGenderStyles";
import SplashScreen from 'react-native-splash-screen'
import SignUpHeader from './../../Component/SignUpHeader'
import DatePicker from './../../Component/Date-Picker'


export default class RegistrationAgeAndGender extends Component {
    constructor() {
        super();
        this.setGender = this.setGender.bind(this);
        this.setAge = this.setAge.bind(this);

        this.moveToCityAndEmail = this.moveToCityAndEmail.bind(this)
        this.state = {
            age: '',
            gender: '',
        }
    }

    componentDidMount() {
        SplashScreen.hide()
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }

    async setAge(text) {
        this.setState({
            age: text
        });


    }
    async setGender(text) {
        this.setState({
            gender: text
        });
        await AsyncStorage.setItem('age', this.state.age)
        await AsyncStorage.setItem('gender', this.state.gender)

    }
    moveToCityAndEmail() {


        if (this.state.gender !== '' && this.state.age !== '') {
            this.props.navigation.navigate('CityAndEmail')
        } else {
            ToastAndroid.showWithGravity('Please Enter Your Age And Gender', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }
    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require('./../../Assets/login-screen/background.png')} resizeMode="cover" style={styles.backgroundImage} />
                {/* Header */}
                <SignUpHeader />


                {/* Body */}
                <View style={styles.container}>


                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Select Your Age"
                        format="YYYY-MM-DD"

                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => { this.setState({ age: date }) }}
                    />
                    <View style={styles.rowView}>
                        <View style={styles.ageIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/age.png')} style={styles.ageIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            editable={false}
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setAge(text)}
                            disable={true}/>
                    </View>
                    <View style={styles.rowView}>
                        <View style={styles.genderIconStyle}>
                            <Image source={require('./../../Assets/signup-screen/gender.png')} style={styles.genderIcon} />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Gender"
                            placeholderTextColor="white"
                            onChangeText={(text) => this.setGender(text)}
                            value={this.state.gender}
                            keyboardType="ascii-capable" />

                    </View>


                </View>

                <TouchableOpacity style={[styles.centered, styles.nextBtnContainer]} onPress={this.moveToCityAndEmail}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>

                {/* Footer */}
            </View>
        )
    }
}
