import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView, ImageBackground} from 'react-native'
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../consts/color';
import { StatusBar } from 'expo-status-bar';
import services from '../consts/services';
import Service from "../Components/Service";
import Card from "../Components/Card";
import salons from '../consts/salon';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {connect} from 'react-redux';
import {register} from '../redux/actions/auth';




const Home = ({navigation, user, register }) => {
console.log(user)

const token = AsyncStorage.getItem('token')

    return (
        <ScrollView style={{flex:1, backgroundColor: COLORS.white,}}>
            <StatusBar backgroundColor={COLORS.primary} style='light' />
                {/* <ImageBackground style={styles.headerImage} source={require('../assets/')}> */}

                    <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:30, alignItems:'center'}}>
                        <View style={{flexDirection:'row' , alignItems:'center'}}>
                            <View style={{marginLeft:20}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.light}}>
                                        Hi
                                    </Text>
                                    <Text style={{fontSize:30, fontWeight:'bold', color:COLORS.primary, marginLeft:10}}>
                                        Haris
                                    </Text>
                                </View>
                            

                                <Text style={{ color:COLORS.light, fontSize:16}}>
                                    Lets make your hair attractive 
                                </Text>
                            </View>
                        </View>
                    
                        {/* <View style={{marginHorizontal:20}}>
                            <Ionicons name="notifications" size={26} color={COLORS.primary} />
                        </View> */}
                        
                    </View>
                {/* </ImageBackground> */}

            <TouchableOpacity activeOpacity={0.5} style={{marginTop: 30,}} onPress={()=>navigation.navigate('SearchScreen')} >
                <View style={{flexDirection:'row', alignContent:'center' , alignItems:'center', marginHorizontal:20,
                    paddingVertical:15, paddingHorizontal:20, borderRadius:30, backgroundColor:COLORS.gray
                }}>
                    <Ionicons name="search" size={20} color={COLORS.dark} style={{ marginRight:10 }} />
                    <Text style={{fontSize:18, color:COLORS.light}}>Search</Text>
                </View>
            </TouchableOpacity>

            {/* <View>
                <FlatList
                        data={services}
                        renderItem={(item)=><Service item={item} />}
                        keyExtractor={item=>item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        

                    />
                
            </View> */}

            
                    <FlatList
                        data={salons}
                        renderItem={(item)=><Card items={item} />}
                        keyExtractor={item=>item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        

                    />

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal: 20, marginTop:20}}>
                        <Text style={{fontWeight:'bold', color: COLORS.light }}>
                            Top Rated Salons
                        </Text>
                    </View>

                    <FlatList
                        data={salons}
                        renderItem={(item)=><Card items={item} />}
                        keyExtractor={item=>item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        

                    />
           

        </ScrollView>
    )
}


const styles = StyleSheet.create({

    headerImage:{
        height:350,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
})

const mapStateToProps = (state) => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {register})(Home)


