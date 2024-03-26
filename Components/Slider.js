

import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'

function Slider() {
    const [sliderList,setSliderList]=useState([]);
    useEffect(()=>{
        setSliderList([
            {
                id:1,
                name:'Slider 1',
                imageUrl:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/428336148_717739273875872_4302213630032383542_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHo20VuJ8J11ooogSMJdZKnJm5px-QFIQwmbmnH5AUhDHDuaraIBkygfuikSQC9cYApniKRgMzbYFozqhVq8nHX&_nc_ohc=GcUrXE3xeNUAX8AHdt7&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDqScjkJztlYuYiZLWwALZ-wtYZol28Q9LQVpGvhLbbog&oe=6604498B'
            },
            {
                id:2,
                name:'Slider 2',
                imageUrl:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/378261714_633865405596593_3082581573003267421_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9t6FfziV-N0AX9x7NWo&_nc_ht=scontent.fdac24-4.fna&oh=00_AfANG-CIZztZUVjL8oJmGf9mg0xoJsWZmo3kjU7mNI7kug&oe=66031AF6'
            },
            {
                id:3,
                name:'Slider 3',
                imageUrl:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/366966375_617983840518083_368087482245630490_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VrO8BRjswzsAX85VMFq&_nc_ht=scontent.fdac24-2.fna&oh=00_AfD5wxOm2oLpEOtb8QG6trSVhhgJ-cH6eOvsG6PEWhDvQg&oe=6601C700'
            },
            {
                id:4,
                name:'Slider 4',
                imageUrl:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/394660469_653263903656743_3350422730707688335_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeER9LTEd8FPyRGAzo1B-VrEMDuAwBrFj3EwO4DAGsWPcXkliJ7n2IPmbJamScNGX0CEjXE_beTvH3ahqHS9xEjB&_nc_ohc=oYLegMFJF6wAX9DRYiR&_nc_ht=scontent.fdac24-4.fna&oh=00_AfAI4JaC6pOgaPeUsvosG4kOdPC-V6JjpgM-RVWox_9BJQ&oe=66033FDA'
            }
        ])
    },[])
  return (
    <View >
       <FlatList
       data={sliderList}
        horizontal={true}
       renderItem={({item,index})=>
    <View>
        
        <Image source={{uri:item.imageUrl}} 
        style={styles.sliderImage}  />
    </View>}
       >

       </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    
    
    sliderImage:{
        width:Dimensions.get('screen').width*0.88,
        height:180,
        marginTop:5,
        borderRadius:15,
        marginRight:5,
        marginLeft:5,
        
        
        
    }
})
export default Slider
