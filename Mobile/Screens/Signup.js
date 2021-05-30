import React,{useState} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Button, Keyboard,ScrollView, TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useHeaderHeight } from "@react-navigation/stack";
import COLORS from '../consts/color';


import {connect} from 'react-redux';
import {register} from '../redux/actions/auth';



const Signup = ({navigation, register}) => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState("")


    const onsubmitHandler=()=>{
        register(name,email,password,phone)
        
    }


    return (

        <KeyboardAvoidingView behavior={'height'}  style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white} }>
            <StatusBar style= "light" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', marginTop: 30 , alignItems:'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.light}}>
                            AR
                        </Text>
                        <View style={{backgroundColor: COLORS.light, height:4, width: 10}}></View>
                        <Text
                            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.primary}}>
                            Salon
                        </Text>
                    </View>

                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.primary}}>
                            Welcome
                        </Text>
                        <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
                            Sign up to create an account 
                        </Text>
                    </View>

                    <View style={{marginTop: 20}}>


                        <View style={{ marginTop:20 }}>
                            <View style={styles.inputContainer}>
                                <AntDesign name="user" size={20} color="#A9A9A9" style={styles.inputIcon} />
                                <TextInput placeholder="Name" onChangeText={setname} value={name} placeholderTextColor='#A9A9A9' style={styles.input} />
                            </View>
                        </View>
          
                        <View style={{ }}>
                            <View style={styles.inputContainer}>
                                <AntDesign name="mail" size={20} color="#A9A9A9" style={styles.inputIcon} />
                                <TextInput placeholder="Email" onChangeText={setemail} value={email}  type='email' placeholderTextColor="#A9A9A9" style={styles.input} />
                            </View>
                        </View>

                        <View style={{ }}>
                            <View style={styles.inputContainer}>
                                <AntDesign name="lock" size={20} color="#A9A9A9" style={styles.inputIcon} />
                                <TextInput placeholder="Password" onChangeText={setpassword} value={password} type='password' placeholderTextColor='#A9A9A9'  secureTextEntry style={styles.input} />
                            </View>
                        </View>


                        <View style={{ }}>
                            <View style={styles.inputContainer}>
                                <AntDesign name="lock" size={20} color="#A9A9A9" style={styles.inputIcon} />
                                <TextInput placeholder="Phone#" onChangeText={setphone} value={phone} placeholderTextColor='#A9A9A9' style={styles.input} />
                            </View>
                        </View>


                        <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8} onPress={onsubmitHandler}>
                                <Text style={{color:'#fff', fontWeight: 'bold', fontSize: 18}}>Sign up</Text>
                        </TouchableOpacity>
          
                        <View
                            style={{
                                marginVertical: 20,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View style={styles.line}></View>
                                <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
                            <View style={styles.line}></View>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            marginTop: 10,
                            marginBottom: 20,
                    }}>
                        <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
                            Don`t have an account ?
                        </Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("login")}}>
                            <Text style={{color: COLORS.primary, fontWeight: 'bold'}}>
                               Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{height:60}}></View>
                    
                </ScrollView>
        </KeyboardAvoidingView>

    //     <KeyboardAvoidingView
    //         behavior={Platform.OS === "ios" ? "padding" : "height"}
    //         style={styles.container}
    //         keyboardVerticalOffset={10}
    //     >
           
    //     <ScrollView>
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>




    //         </TouchableWithoutFeedback>

    //     </ScrollView>
      
    //  </KeyboardAvoidingView>
    )
}

export default connect(null, {register})(Signup);

const styles = StyleSheet.create({
    

    inputContainer: {
        flexDirection: 'row', 
        marginTop: 20
    },
    
    input: {
      color: COLORS.light,
      paddingLeft: 30,
      borderColor: COLORS.light,
      borderBottomWidth: 0.5,
      flex: 1,
      fontSize: 18,
      marginTop: 10,
    },
    
    inputIcon: {
        marginTop: 15, 
        position: 'absolute'
    },

    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
  
    btnSecondary: {
      height: 50,
      borderWidth: 1,
      borderColor: '#a5a5a5',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flex: 1,
      flexDirection: 'row',
    },
   
  
    line: {
        height: 1, 
        width: 30, 
        backgroundColor: '#a5a5a5'
    },

})
