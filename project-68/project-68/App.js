import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FB from './Screens/fb';
import IN from './Screens/in';

export default class BuzzApp extends React.Component{
  render(){
    return(
      
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FB},
  Instagram:{screen:IN}
})

const AppContainer = createAppContainer(TabNavigator)