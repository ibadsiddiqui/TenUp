/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, NetInfo, StyleSheet, Text, View,Alert } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      online: null,
      offline: null,
    }
  }

  componentWillMount() {
    NetInfo.getConnectionInfo().then(reach => {
      Alert.alert('Connection info', reach.type)
      this.onConnectivityChange(reach);
    });
    NetInfo.addEventListener('connectionChange', this.onConnectivityChange)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.onConnectivityChange)
  }

  onConnectivityChange = reach => {
    // const type = reach.toLowerCase();
    this.setState({
      online: reach != 'none',
      offline: reach === 'none'
    })
  }

  renderMask() {
    if (this.state.offline) {
      return (
        <View style={styles.mask}>
          <View style={styles.msg}>
            <Text style={styles.alert}>Seems like you do not have
    network connection anymore.</Text>
            <Text style={styles.alert}>You can still continue
    using the app, with limited content.</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>My Awesome App</Text>
        <Text style={styles.text}>Lorem...</Text>
        <Text style={styles.text}>Lorem ipsum...</Text>
        {this.renderMask()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#F5FCFF',
  },
  toolbar: {
  backgroundColor: '#3498db',
  padding: 15,
  fontSize: 20,
  color: '#fff',
  textAlign: 'center',
  },
  text: {
  padding: 10,
  },
  });