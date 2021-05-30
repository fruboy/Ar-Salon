import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import COLORS from '../consts/color';
import Home from '../Screens/Home';
import SalonDetail from '../Screens/SalonDetail'
import StackRoute from './StackRoute';
import StackAuth from './StackAuth';
import DrawerContent from "./DrawerContent";
import { AntDesign, Feather, Foundation } from '@expo/vector-icons';
import setAuthToken from "../util/setAuthToken";
import AsyncStorage from '@react-native-async-storage/async-storage';

//redux



import {loadUser} from '../redux/actions/auth'
import {connect} from 'react-redux';
import {register} from '../redux/actions/auth';


const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  const [user, setuser] = useState(true)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function DrawerRouter({register, isAuthenticated}) {

    console.log(isAuthenticated)


    return (
        isAuthenticated ?
        
        (<NavigationContainer>
            <Drawer.Navigator initialRouteName={StackRoute} drawerContent={(props)=><DrawerContent {...props} />} drawerContentOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: COLORS.primary,
            inactiveTintColor: 'black',
            
            labelStyle:{
                marginLeft:0,
                padding:0,
                fontSize:16,
                fontWeight:'100'
            },
            itemStyle:{
                padding:0,
                fontSize:16
            }
            }}>
            <Drawer.Screen name="Home" component={StackRoute} 
                options = {{
                drawerIcon: ({focused, size}) => (
                    <AntDesign name="home" size={24} color={focused ? COLORS.white : COLORS.primary} />
                ),
                }}
            />
                <Drawer.Screen name="Favorites" component={NotificationsScreen} 
                options={{
                drawerIcon: ({focused, size}) => (
                    <AntDesign name="hearto" size={24} color={focused ? COLORS.white : COLORS.primary} />
                ),
                }}
            />
            <Drawer.Screen name="Bookings" component={NotificationsScreen} 
                    options={{
                    drawerIcon: ({focused, size}) => (
                    <Foundation name="page-multiple" size={24} color={focused ? COLORS.white : COLORS.primary}/>
                ),
                }}
            />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} 
                options={{
                drawerIcon: ({focused, size}) => (
                    <Feather name="bell" size={24} color={focused ? COLORS.white : COLORS.primary} />
                ),
                }}
            />

            <Drawer.Screen name="Profile" component={NotificationsScreen} 
                options={{
                drawerIcon: ({focused, size}) => (
                    <Feather name="user" size={24} color={focused ? COLORS.white : COLORS.primary} />
                ),
                }}
            />
            
            </Drawer.Navigator>

        </NavigationContainer>):
        
        (<StackAuth />) 
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register})(DrawerRouter)
