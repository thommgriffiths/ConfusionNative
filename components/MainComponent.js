import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { View, Platform } from 'react-native';
import { creatStackNavigator } from 'react-navigation';
import createStackNavigator from 'react-navigation/src/navigators/createStackNavigator';


//this is a javascript object
const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu},
  Dishdetail: { screen: Dishdetail}

},{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle:{
      backgroundColor: '#512DA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff'
    }
  }
} )

class Main extends Component {

  render() {
 
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MenuNavigator/>   
        </View>
    );
  }
}
  
export default Main;        