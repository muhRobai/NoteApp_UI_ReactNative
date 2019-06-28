import React from "react";
import { createStackNavigator, createAppContainer,createSwitchNavigator } from "react-navigation";
import AppNavigator from './src/NavApp';


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
     return <AppContainer />;
  }
}

