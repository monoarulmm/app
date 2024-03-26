import { View,Text } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import Head from '../Components/Head'
import BottomSheet from '../Components/BottomSheet'
import Header from '../Components/Header'
import PlayList from '../Components/PlayList'
import SlideList from '../Components/SlideList'
import Slider from '../Components/Slider'


const Home = () => {
    const refRBSheet = useRef()
  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Header/>
         
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Head
             title="Home" 
             onPress={()=>refRBSheet.current.open()}
             />
            {/* <Header/> */}
            <Slider/>
           <PlayList/>
           <SlideList/>
   
        </View>
        <BottomSheet bottomSheetRef={refRBSheet}/>
   </SafeAreaView>
  )
}

export default Home







