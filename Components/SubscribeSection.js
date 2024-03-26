import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View, WebView }  from 'react-native'
import Color from '../Shared/Color'

function SubscribeSection() {

    const openUrl=()=>{
        Linking.openURL('https://www.distdinajpur.edu.bd/')
    }

    
  return (
    <View style={styles.container}>
        <Image source={{uri:'https://yt3.googleusercontent.com/ytc/AIdro_lUSwRqZKSaeYywcfMzuMbjAb4lzX8wQRbCAXwe=s176-c-k-c0x00ffffff-no-rj'    }}
        style={styles.logo}/>
        <View>
            <Text style={styles.channelName}>DIST Polytechnic</Text>
            <Text style={styles.channelDesc}>Learn with fun</Text>
        </View>
        <TouchableOpacity onPress={()=>openUrl()}>
            <Text style={styles.button}>official Info</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        borderRadius:5,
        backgroundColor:Color.primaryColor,
        elevation:1
    },
        logo:{
            width:40,
            height:40,
            borderRadius:50
        },
        channelName:{
            color:Color.white,
            fontSize:20
        },
        channelDesc:{
           color: Color.white,
           
        },
        button:{
            color: Color.white,
            backgroundColor:Color.primaryColor,
            padding:5,
            borderRadius:50,
            paddingLeft:10,
            paddingRight:10
        }
})

export default SubscribeSection
