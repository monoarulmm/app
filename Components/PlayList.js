
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'


  function PlayList() {

    const navigation=useNavigation();

   const courseList=[
   
    {
        id: 1,
        name: 'Computer Science',
        imageUrl:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/369682144_621687186814415_6933565445415882861_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGsxlKClxXoxf0iOSxBdrdiaxPY70Nme2JrE9jvQ2Z7dEO_RXJBz_DaDVfbs1n7JiZbna88JUU0IblFrRAYR8O&_nc_ohc=_3XH5xmPSJIAX_yasnt&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCWWJbdcLiWyFBcp9qNnOa6CiLmQBrFg2-9LyC9t2pOcA&oe=6603D981',


        Lab1:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/369995054_621687336814400_4013190025498682109_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHHpFGcNxBOUZC1nu3YBJUYX32ZvYt6SHpffZm9i3pIes-oAl9e0xWtdugsZmCuj6KbCL6Rv5q0SlymlQAfdsQz&_nc_ohc=1dR9Zk1EH9IAX-4crYP&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCTFnX2r9YKRp-D66C8M_xptov2uI35bHZtHOJfWhyoFw&oe=65FEC58C',
        shortdesc1: 'Short description for computer department1',

        Lab2:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/368776994_621687316814402_7437879470895207285_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHcRfhypOY_qjNcz581UJ4ItXW-I6APmty1db4joA-a3PC_e3efSIfsEwEcVEPvrKofMpk8T-R-LAezRWGRuB85&_nc_ohc=CDpiMaBiY_YAX-FS28H&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDiShhnTmDKwXT0MLRtc11itv4oS-BJyFZqwHU3eMDSNg&oe=66040267',
        shortdesc2: 'Short description for Textile department2',

        Lab3:'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/370424772_621687223481078_7242824049432865159_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEL9NXFzDoj5wMJBxKbegrz8sCY3TzN50jywJjdPM3nSO6kPnPc-yowKIJa-VHHrYXu3AaHjtWgsjMM9bDhUddD&_nc_ohc=dCvvbvIhIQoAX_6Gnji&_nc_ht=scontent.fdac24-3.fna&oh=00_AfALHB--D_8K3MDtMy6B-dDJqLU5CYGpEwG06WL7W7thqw&oe=66039B43',
        shortdesc3: 'Short description for Textile department3',  

        description: 'Detailed description for computer department',
        CIO:'Sahjat Hossain Manik'
    },
    {
        id: 2,
        name: 'Textile',
        imageUrl:'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/369649807_621687690147698_1961607194972054289_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECRa9te48iHM_u2kp_Hg-WLG5jaK2DewYsbmNorYN7BtP6OB8gyZT8nJ2QSHgBsizYJUsAviE_wTMKeybFfyRa&_nc_ohc=G-i0omNgtDsAX96A3cj&_nc_ht=scontent.fdac24-1.fna&oh=00_AfC38I0l4PBsyKVSetQ5nuHLLt140rPjXhkE1SLm16H8RQ&oe=66040760',

        Lab1:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/368268794_621687760147691_5627250040858466143_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFZ-ntD-hZKE7IQSo94ZQUgjCV1XEwCahaMJXVcTAJqFqYJraMeYEZTc6DHfj2LzafbS779vmQ7AjIURgjiO-PY&_nc_ohc=cT_OGDwL98EAX_pI7t9&_nc_ht=scontent.fdac24-2.fna&oh=00_AfAXWyJ4CtTwO0I2inSJbN0XcMhxRey52kkACmriqt4rjg&oe=65FE8575',
        shortdesc1: 'Short description for Textile department1',

        Lab2:'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/369736704_621687646814369_2576822214678468246_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHIhOrXnQS3jiV8Op3MsIW_iy0zxQt9plGLLTPFC32mUUj5lgd7if3T1Ub2VRYickvAB6O8uKK3Qz2m6ZLhol-b&_nc_ohc=WLJyfvDUy-kAX9RDrYv&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAkmOKnXZaGUN8edw-gh-a5otKbF5Qyp9WMMHXLzjE60w&oe=66033770',
        shortdesc2: 'Short description for Textile department2',

        Lab3:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/368398898_621687723481028_4661125219936698618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGHJdSkpD9UGVfc-S4wj1Z3TasRaz-nWwlNqxFrP6dbCd_wSsjeXXkkQEITy5C266pTFVhBC8lmILRO6ry03yvH&_nc_ohc=63hg7q4KQ4UAX9XbThO&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCN8ZOWVI5MOVdGjnjnI-NBYUK17wL4-rjK1ANLpTvYxg&oe=65FE82B7',
        shortdesc3: 'Short description for Textile department3',  

        description: 'Detailed description for Textile department',
        CIO:'Golam Mostofa'
    },

    {
        id: 3,
        name: 'Electrical',
        imageUrl:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/369536056_621686326814501_866603111006313123_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfPfWfEqBaobq2o5IHid1gQ9_wE7PugZRD3_ATs-6BlM9RD3EpT5ZWnPoI8cIQopfA2HgGPddY9oMfczO1Q233&_nc_ohc=veLgvWKKsTMAX9Jl0sH&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBjr512qoQVJ1Ch9BEUukD5NAJmS1GgTGGD057hyvbf7g&oe=66034971',

        Lab1:'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/369656848_621686676814466_5629103482317668759_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGs3GtIT-pyQymqbJxEw334-A--HFNfRiz4D74cU19GLIjshT0LMuWrZOnMmwhpxShl82Egs4h3l2fafv2uNA_2&_nc_ohc=QmrEHtpKGMMAX8MpsBu&_nc_ht=scontent.fdac24-1.fna&oh=00_AfC_HXWiKIE_6WgdD1oZFS6w0NHWCWOZG918QZDh5Vbf-w&oe=6603CE46',
        shortdesc1: 'Short description for Textile department1',

        Lab2:'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/367472639_621686633481137_5778306231717616199_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDjudc8AGBPUIcBquuwFQxhepjrrOqz5OF6mOus6rPk4G7YJx28ywNkQtaXtfUOD-3IDrRrWiBjyKVt0tVCG9v&_nc_ohc=oTmbk1OGT4YAX-2YlGO&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAYC1sB-Hoi3Z3Jpm1NnmApFoyjLk-AHaYUBy8aR07d9w&oe=65FEBAFE',
        shortdesc2: 'Short description for Textile department2',

        Lab3:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/368398898_621687723481028_4661125219936698618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGHJdSkpD9UGVfc-S4wj1Z3TasRaz-nWwlNqxFrP6dbCd_wSsjeXXkkQEITy5C266pTFVhBC8lmILRO6ry03yvH&_nc_ohc=63hg7q4KQ4UAX9XbThO&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCN8ZOWVI5MOVdGjnjnI-NBYUK17wL4-rjK1ANLpTvYxg&oe=65FE82B7',
        shortdesc3: 'Short description for Textile department3',  

        description: 'Detailed description for Textile department',
        CIO:'Asif Jaman Raju'
    },
    {
        id: 4,
        name: 'Mechanical',
        imageUrl:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/368343936_621687420147725_8782504783474042587_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEHi4S1v8xZlS7Vk3OV8-XO1ksKs5SNcUfWSwqzlI1xR_ThraIc0dOEovXUo3pm-jf6i3xA73cblsVvIZVyWN87&_nc_ohc=Hfp8pPJlHZUAX9M-AhU&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDApn5Rknin0otVSd9OqyogVBXxZM_0nofTarIEW_vGaA&oe=66036223',

        Lab1:'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/368244751_621687046814429_3091405477024076062_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpVMDjBqtBgFdX9owjJayPkLJQukIBoU-QslC6QgGhT2MWZksot85yykxF-MGsk0qLhWLY3xSO63TUwVVw8IHu&_nc_ohc=imTOnLqxMDgAX_3HQLp&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAyfB7-mBU83oxAdFdX4gZjGMAnSio33TiC8ZzXKfGfpg&oe=66030896',
        shortdesc1: 'Short description for Textile department1',

        Lab2:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369244223_621687473481053_6278748616759270841_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGS_KeJv8au_fme8jR8l-rC7ovF9goOvvrui8X2Cg6--rSiTdgxqVPyTSnYpjil6zQ1ot_Fx0gS3m_PGh88wuq9&_nc_ohc=h_9Dj6bR-_8AX9V9Plv&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCzt_Ag4kikrGeti3AU4Pgluhj5Qa-yWlkG7PykiS_Bmg&oe=66030E9F',
        shortdesc2: 'Short description for Textile department2',

        Lab3:'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/368833785_621687513481049_3498220737788841000_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFSBSvL_ntMQfSDPV6LjTFVbn1vq0reVYRufW-rSt5VhDL4L43YIyqzVv6CcKNLIUvLef28P9Xi2rolprI0bNMt&_nc_ohc=KV8VQ3satKoAX_FUYjS&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDlbR_a4Asc3zFS6C67Sy4s4QWSvQly6qTSnXWFA7vlCQ&oe=65FE8EA4',
        shortdesc3: 'Short description for Textile department3',  

        description: 'Detailed description for Textile department',
        CIO:'Asif Jaman Raju'
    },
    {
        id: 5,
        name: 'Civil',
        imageUrl:'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/368819106_621686923481108_8391217416819743869_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWbbhqUiC8EpVAItVENnHBulRisUu6EpO6VGKxS7oSk7jy2lXGP1s8o4kJecRLELX01KZO4IMbptpxnpTjC5Xm&_nc_ohc=SnGiLMI0tBwAX_fZJfv&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBFn6p0F1a1-77IxLOIO2VABi-AHNaMYApwvDTFHf91vw&oe=6603A8E5',

        Lab1:'https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/369154500_621686950147772_7225729772194230184_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFctwVYV3_6tdRPh-8Gf7nOgqNerWCq3DeCo16tYKrcNwbb9rkF1-2GRRBMAcUhYWOwaTSs9bU_UsBJQEU_8S51&_nc_ohc=f_pJaMPAGugAX_uKFn8&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDarIpGDz15AZ5XfdtEUrb5ohhE-FIGCA85oKXxwwgytA&oe=66039A74',
        shortdesc1: 'Short description for Textile department1',

        Lab2:'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/369247848_621686893481111_2486001042055647592_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEOAGuggdwQIjQ3Ko3UmmaXul3roNf2BTW6Xeug1_YFNW7w4QcEnN53OnuX0EUZSkndohML9H_L9TEQ-s39buDP&_nc_ohc=VqbuTb_nTG4AX_kTl1h&_nc_ht=scontent.fdac24-1.fna&oh=00_AfAJ19GosPKKt1mUsfHOM_eLVZsze1IlFmQRHY8wcMYlbA&oe=660391A7',
        shortdesc2: 'Short description for Textile department2',

        Lab3:'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/368249583_621688080147659_7879261736183619990_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHNvqlFLStfMb_bXZEI7LPv1q-7AI7ib2HWr7sAjuJvYcnG99lVfGskNruQchkAMJ7VXZRp2nctR4tGR9uNR31i&_nc_ohc=g0t1CxJWUJoAX-wUQxB&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCZbRx2onUlFm1Xcf7KYErM2Hof0pc1e_1W7pm6s1PUkw&oe=660340E7',
        shortdesc3: 'Short description for Textile department3',  

        description: 'Detailed description for Textile department',
        CIO:'Asif Jaman Raju'
    },
 
]; // Remove the closing bracket here

   
    const onPressDepartment=(deptinfo)=>{
        navigation.navigate('PlayListScreen',{deptData:deptinfo,
            courseType:'text'})
  


    }

  return (
   <View style={styles.container}>
    <Text style={styles.heading}>Department</Text>
    <FlatList
    data={courseList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>
    <TouchableOpacity onPress={()=>onPressDepartment(item)} >
         {/* <Image source={item.imageUrl} style={styles.image} /> */}
        <Image source={{uri:item.imageUrl}} style={styles.image}/>    
        <Text style={styles.nameText}>{item.name}</Text>
    
    
    
    </TouchableOpacity>

    }
    />
   </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop:5,
    
    },
    heading:{
        fontSize:20,
        color:Color.black,
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        width:220,
        height:130,
        borderRadius:5,
        marginRight:5,
        marginLeft:5,
    },
    nameText:{
        color:Color.darkBlack,
        fontSize:17,
        
        padding:5
    }
})

export default PlayList
