import React from 'react'
import { Text, View } from 'react-native'
import Header from '../Components/Header'
import PlayList from '../Components/PlayList'
import Slider from '../Components/Slider'


import Color from '../Shared/Color'

function HomeScreen() {
  return (
   <View >
        <Header/>
        <Slider/>
        <PlayList/>
        <VideoGridList/>
  
   </View>
  )
}

export default HomeScreen
