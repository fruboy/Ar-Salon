import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import COLORS from '../consts/color';
import Home from '../Screens/Home';
import SearchScreen from '../Screens/SearchScreen';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import SalonDetail from '../Screens/SalonDetail'






const Stack = createStackNavigator();

const StackRoute = ({navigation}) => {
    return (

     <Stack.Navigator >

      {/* <Stack.Screen name='Signin' component ={Login} 
          options={{
            headerStyle:{backgroundColor: COLORS.primary},
            headerTintColor:COLORS.white,
            headerShown: true,
            title:''
            
          }}
        /> */}

        <Stack.Screen name="Home" component={Home}
         
         options={{
          headerStyle:{backgroundColor: COLORS.primary},
          headerTintColor:COLORS.white,
          headerShown: true,
          title:'',
          headerLeft:(() => <TouchableOpacity onPress={()=>navigation.openDrawer()}><Ionicons name="ios-menu" size={36} color={COLORS.white} style={{marginLeft:10}} /></TouchableOpacity>),
          headerRight:(()=>{
            return(
              
                <TouchableOpacity style={{marginRight:10}}>
                  <FontAwesome5 name="heart" size={24} color="white" />
                </TouchableOpacity>
                
          
            )
          })
          }}
        />

        <Stack.Screen name="SalonDetail" component={SalonDetail}
          options={{
          headerStyle:{backgroundColor: COLORS.primary},
          headerTintColor:COLORS.white,
          headerShown: false,
          title:'',
          headerLeft:(() => <TouchableOpacity><Ionicons name="ios-menu" size={36} color={COLORS.white} style={{marginLeft:10}} /></TouchableOpacity>),
          headerRight:(()=>{
            return(
              
                <TouchableOpacity style={{marginRight:10}}>
                  <FontAwesome5 name="heart" size={24} color="white" />
                </TouchableOpacity>
                
          
            )
          })
          }}
        />

        <Stack.Screen name="SearchScreen" component={SearchScreen}
          options={{
          headerStyle:{backgroundColor: COLORS.primary},
          headerTintColor:COLORS.white,
          headerShown: true,
          title:'',
          headerLeft:(() =>
          <TouchableOpacity >
          <MaterialIcons name="arrow-back-ios" size={28} color="white" style={{marginLeft:10}} onPress={()=>{navigation.goBack()}} />
      </TouchableOpacity>),

          }}
        />
        
        
        </Stack.Navigator> 
    



    )
}

export default StackRoute

const styles = StyleSheet.create({})
