import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    TextInput,
    ScrollView
} from 'react-native'
import { Card, Button } from 'react-native-elements'
import styles from "./../Styles/RegistrationScreenStyles";



export default class RegistrationScreen extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dob: "",
            gender: Number,
            city: "karachi",
            phoneNumber: "7889789189",
            profileImg: ""
        }
    }

    sendRequest() {
        fetch('http://192.168.15.145:3000/api/auth/register', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                username: this.state.username,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                dob: this.state.dob,
                gender: (this.state.gender =="male" || this.state.gender == "Male") ? 1 : 2,
                city: this.state.city,
                phoneNumber: this.state.phoneNumber,
                profileImg: ""
            }), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => this.setState({ username: response }))
            .catch(error => Alert.alert('Error:', error));

    }
    async onSubmit() {
        this.sendRequest()
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card title='Registration' style={styles.cardView}>
                        <Text>Username: </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ username: text }) }} />
                        <Text>FirstName</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ firstName: text }) }} />

                        <Text>Lastname: </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ lastName: text }) }} />
                        <Text>Email</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ email: text }) }} />
                        <Text>password</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ password: text }) }} />
                        <Text>Date of Birth </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ dob: text }) }} />
                        <Text>Gender</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ gender: text }) }} />

                        <Text>City: </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ city: text }) }} />
                        <Text>Phone Number</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => { this.setState({ phoneNumber: text }) }} />
                        <View style={styles.rowView}>
                            <Text>profileImg:</Text>
                            <TouchableOpacity style={styles.uploadBtn}>
                                <Text style={styles.uploadBtnText}>
                                    Upload
                            </Text>
                            </TouchableOpacity>
                        </View>
                        <Button
                            backgroundColor='#03A9F4'
                            title='Login'
                            onPress={this.onSubmit} />

                    </Card>
                    <View style={styles.centered}>
                    <Text>{JSON.stringify(this.state.username)}</Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}
