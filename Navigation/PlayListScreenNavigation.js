import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function PlayListScreenNavigation() {
  return (
   <Stack.Navigator>

<Stack.Screen component={PlayListScreen} name='PlayList'></Stack.Screen>

      
   </Stack.Navigator>
  )
}