import { useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View,Image, FlatList, } from 'react-native'
import Color from '../Shared/Color';
import Header from '../Components/Header'




function PlayListScreen({ route }) {
    const [deptData, setDeptData] = useState(null);
    const [deptList, setdeptList] = useState([]);
    useEffect(() => {
      if (route.params && route.params.deptData) {
          const department = route.params.deptData;
          setDeptData(department);
          
          // Creating an array of department items with their respective lab and shortdesc
          const items = [
              { Lab: department.Lab1, shortdesc: department.shortdesc1 },
              { Lab: department.Lab2, shortdesc: department.shortdesc2 },
              { Lab: department.Lab3, shortdesc: department.shortdesc3 }
          ];
          setdeptList(items);
      }
  }, [route.params]);



   

    return (
        <View styles={styles.header}>
            <Header/>
            {/* header  */}
            {deptData && (
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>{deptData.name}</Text>
                    <Text>{deptData.shortdesc}</Text>
                    <Text>{deptData.CIO}</Text>
                    <Text>{deptData.shortdesc1}</Text>
                    <Image source={{uri:deptData.imageUrl}} style={styles.image}/>
                    <Text>{deptData.description}</Text>
                    {/* Render Slider Component Here */}

                    <FlatList
                        data={deptList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View >
                                
                              <Image source={{uri:item.Lab}} style={styles.sliderImage}  />
                                <Text style={styles.nameText}>{item.shortdesc}</Text>
                            </View>
                        )}
                    />

                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({

    header:{

        // marginTop:100,

    },


  container:{
   
      backgroundColor:'#fff',
      borderTopRightRadius:20,
      borderTopLeftRadius:20
  },
  welcomeText:{
      fontSize:35,
      textAlign:'center',
      fontWeight:'bold' 
  },


  sliderImage:{
    width:Dimensions.get('screen').width*0.88,
    height:170,
    marginTop:12,
    borderRadius:10,
    marginRight:10
    
    
},


image:{
  width:400,
  height:200,
  marginRight:15,
  borderRadius:5
},
  
})


export default PlayListScreen
