
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'


function SlideList() {

    const navigation = useNavigation();

    const courseList = [

        {
            id: 1,
            name: 'Library',
            imageUrl: 'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/369861047_621688066814327_6061856455455177134_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsGvy5YlG3dCWq83Lr_bINbvkt49NCnzBu-S3j00KfMFIWRE-oOea-U0Tfu3D7abKEWmUT2042QCAeXk7YvSfO&_nc_ohc=zpUQrY-0TEgAX-4vOs_&_nc_ht=scontent.fdac24-4.fna&oh=00_AfDxUeBIMxJeGJsIVouEWfYAhQlRSZZ9yKSm3Zr1TZ-BwA&oe=6603AE08',


        },
        {
            id: 2,
            name: 'Skill Development',
            imageUrl: 'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/433403300_734343052215494_9046977519349903026_n.jpg?stp=dst-jpg_s600x600&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2z0vDt_4qtDauxHdcl03TsCydg5VpOqKwLJ2DlWk6opu0dLuZzGmB36do1YxigT6ssrmmZjA7Kqcvdj5sshNw&_nc_ohc=ni2r5CK9iHkAX8vqUGe&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCDNUSdyjib_rEg43MDRxtaAjFnj2DiL2XjgO74yfLMww&oe=660413A6',

        },

        {
            id: 3,
            name: 'Sports',
            imageUrl: 'https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/431626174_730155602634239_3914797432918006150_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqC1LNTTGISiKdVEPn5J5e4vJ4tZaevjPi8ni1lp6-M6EcdgRBvHOZU93SmqKfvvu6Ar-VptfzhQI5gy78oXhU&_nc_ohc=1gl2ELX309oAX98roLp&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBiR1G-GqmHgScC4k07Wf_OysofBm3h6iHkYlcoShS7sg&oe=6603075D',

        },
        {
            id: 4,
            name: 'Model Institute',
            imageUrl: 'https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/414481931_692603776389422_1097475325328389803_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGeYASR1wFVfpOZSLlKLYAvAj6NEijY8G4CPo0SKNjwbpQO0NgbDMQbMdsh0WKwVoB1snmnIlwbBUuPNI9awysR&_nc_ohc=qTlHSJ03kYwAX8g7623&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCnLuV7GNGUKv3XOjMx3yfQeIJ2zGkj9hUrNHCUvnByow&oe=6603E103',

        },
        {
            id: 5,
            name: 'DIST',
            imageUrl: 'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/398476158_662759679373832_6350098795461444176_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHQ5FOZVc80gQo43AeRiEi4pcWHmmzL3f2lxYeabMvd_RPlzvZDnoQsD-CDSbn4Ks9gj1wHleKZJop_OVgliHQ9&_nc_ohc=JjN4kivyBRAAX9yz6NN&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDp-bwjOglYKGWGugh_fENW8xaJIKS95wu6zDR45tVaYA&oe=6603A39E',

        },

    ]; // Remove the closing bracket here




    return (
        <View style={styles.container}>
            <Text style={styles.heading}>All Program</Text>
            <FlatList
                data={courseList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <View >
                        {/* <Image source={item.imageUrl} style={styles.image} /> */}
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.nameText}>{item.name}</Text>



                    </View>

                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
       
    },
    heading: {
        fontSize: 20,
        color: Color.black,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingLeft:5,
    },
    image: {
        width: 220,
        height: 130,
        borderRadius: 5,
        marginRight:5,
        marginLeft:5,
    },
    nameText: {
        color: Color.darkBlack,
        fontSize: 17,
        padding: 5
    }
})

export default SlideList
