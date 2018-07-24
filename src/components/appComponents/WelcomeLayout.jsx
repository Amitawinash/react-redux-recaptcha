import React, { Component } from 'react';
import MyApp from "./MyApp.jsx";


export default class WelcomeLayout extends Component {
  render() {
    return (
      <MyApp className="welcomeLayout" align="center">
        Welcome Layout
      </MyApp>
    )
  }
}