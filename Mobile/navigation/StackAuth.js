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

const StackAuth = ({navigation}) => {
    return (
        <NavigationContainer>
     <Stack.Navigator >

      {/* <Stack.Screen name='Signin' component ={Login} 
          options={{
            headerStyle:{backgroundColor: COLORS.primary},
            headerTintColor:COLORS.white,
            headerShown: true,
            title:''
            
          }}
        /> */}

        <Stack.Screen name="login" component={Login}
         
         options={{
          headerStyle:{backgroundColor: COLORS.primary},
          headerTintColor:COLORS.white,
          headerShown: true,
          title:'',
    
                
          
      
          }}
        />
      <Stack.Screen name="signup" component={Signup}
         
         options={{
          headerStyle:{backgroundColor: COLORS.primary},
          headerTintColor:COLORS.white,
          headerShown: true,
          title:'',
    
                
          
      
          }}
        />
        
        
        </Stack.Navigator> 
        </NavigationContainer>
    



    )
}

export default StackAuth

const styles = StyleSheet.create({})