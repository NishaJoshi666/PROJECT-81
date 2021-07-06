import React ,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {AppDrawerNavigator} from './AppDrawerNavigator'
import UserDetailsScreen from '../screens/UserDetailsScreen';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

export const AppStackNavigator = createStackNavigator({
    AppDrawer : {
      screen : HomeScreen,
      navigationOptions:{
        headerShown : false
      }
    },
    UserDetails : {
      screen : UserDetailsScreen,
      navigationOptions:{
        headerShown : false
      }
    },
  
  },
    {
      initialRouteName: 'AppDrawer'
    }
  );