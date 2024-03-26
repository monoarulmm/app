import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Color from '../Shared/Color'


function Header() {
 
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.welcomeText}>Welcome To</Text>
            <Text style={styles.userNameText}>Dinajpur Institute of Science & Technology</Text> 
        </View>
        <Image source={require('../assets/logo.png')} style={styles.userImage} />
    </View>


  )
}






const styles = StyleSheet.create({
  container:{
      marginHorizontal: 5,
      flexDirection:'row',
      justifyContent:'space-between'
  },

  userImage:{
    width:75,
    height:75,
    borderRadius:50,
   
},

welcomeText:{
  fontSize:20,
  paddingLeft:10,
  paddingTop:10,
  fontWeight:'bold',
  color:Color.black,
  
},
userNameText:{
  paddingLeft:10,
  fontSize:10,
  color:Color.darkBlack
}



})

export default Header
