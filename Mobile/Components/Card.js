import React from 'react'
import { Dimensions } from 'react-native'
import { Image } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import COLORS from '../consts/color'
import { Entypo, AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'



const {width} = Dimensions.get('screen')



const Card = ({items}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={1} style={styles.card} 
            onPress={()=>
                        {navigation.navigate("SalonDetail",   {
                            id: items.item.id,
                        }
                        )}}  
        >
            <Image  source={items.item.image}  style={styles.cardImage}  />
            <View style={styles.cardDetails}>

          

                <View style={{flexDirection:'row' , justifyContent:'space-around'}}>
                    <View>
                        <Text style={{fontWeight:'bold', fontSize:17}}>
                        {items.item.name} 
                        </Text>

                        <Text style={{color:COLORS.light, fontSize:17}}>
                                {items.item.location}
                        </Text>
                    </View>
                    <TouchableOpacity style={{}} onPress={()=>{}}>
                        <Entypo name="heart-outlined" size={30} color={COLORS.primary}  />
                    </TouchableOpacity>
                    
                </View> 

                <View style={{flexDirection:'row', marginTop:5, marginHorizontal: 15,}}>
                    <AntDesign name="star" size={17} color="orange" />
                    <AntDesign name="star" size={17} color="orange" />
                    <AntDesign name="star" size={17} color="orange" />
                    <AntDesign name="star" size={17} color="orange"/>
                    <AntDesign name="staro" size={17} color="orange" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        marginBottom: 5,
        height:280,
        width:width/1.5,
        borderRadius:15,
        marginTop: 30,
        marginHorizontal:20,
        backgroundColor:COLORS.white,
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cardImage: {
        height:200,
        width:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    cardDetails:{
        height:120,
        borderRadius:25,
        backgroundColor:COLORS.white,
        position:'absolute',
        bottom:0,
        zIndex:1,
        padding:20,
        width:'100%',
        
    }

})
