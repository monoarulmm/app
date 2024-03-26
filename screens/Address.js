import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'
import Head from '../Components/Head'
import BottomSheet from '../Components/BottomSheet'


const Address = () => {
  const refRBSheet = useRef()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Head
         title="Address" 
         onPress={()=>refRBSheet.current.open()}
         />
       <BottomSheet/>
    </View>
    <BottomSheet bottomSheetRef={refRBSheet}/>
</SafeAreaView>
  )
}

export default Address