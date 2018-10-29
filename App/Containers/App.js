import React, { Component } from 'react'
import PrimaryNav from './../Navigation/AppNavigation'

import { NativeRouter, Route} from "react-router-native";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>

        <Route path="/" component={PrimaryNav}/>
      </NativeRouter>
    )
  }
}