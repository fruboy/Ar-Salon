import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import COLORS from '../consts/color';


const Service = (props) => {

    return (
        <TouchableOpacity style={{flex:1, marginTop:30}} onPress={()=>{}} activeOpacity={0.6}>
            <View style={styles.service}>
                <Image source={props.item.item.image} style={styles.image}  />
                <Text style={styles.name}>
                    {props.item.item.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Service

const styles = StyleSheet.create({

    image: {
        width: 30,
        height: 30,
        marginHorizontal:20,
    },

    service:{
        flexDirection:"row",
        backgroundColor: COLORS.gray,
        marginHorizontal:20,
        padding: 16,
        borderRadius:40
    },

    name:{
        color:COLORS.light,
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginRight: 5,
    }
})
