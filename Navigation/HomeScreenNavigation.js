import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation'
import BottomTabNavigation from './BottomTabNavigation'

import HomeScreen from '../screens/HomeScreen';
// import PlayVideoScreen from '../screens/PlayVideoScreen';
import PlayListScreen from '../screens/PlayListScreen';
// import ChapterScreen from '../screens/ChapterScreen';


const Stack=createNativeStackNavigator();
function HomeScreenNavigation() {
  return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Main'
        >
            <Stack.Screen component={HomeScreen} name='home'></Stack.Screen>

            <Stack.Screen component={PlayListScreen} name='PlayListScreen'></Stack.Screen>

            <Stack.Screen name="Main" component={DrawerNavigation} />
           
        </Stack.Navigator>
  )
}



export default HomeScreenNavigation
