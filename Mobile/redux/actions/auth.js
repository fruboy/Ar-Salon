import axios from 'axios';
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR , LOGIN_SUCCESS, LOGIN_FAIL} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';









export const loadUser = () => async dispatch =>{
    if(AsyncStorage.token){
        setAuthToken(AsyncStorage.token)
    }

    try {
        const res = await axios.get("http://arsalon.xyz:5000/api/auth");
        dispatch({
            type:USER_LOADED,
            payload:res.data
        }) 
    }
    catch(err){
        dispatch({
            type:AUTH_ERROR
        })
    }

}


export const register =(name, email, password, number)=> async dispatch=>{

    const user= {
      
        name:'Haris',
        email:'sheixharis00@gmail.com',
        password:'12345678',
        number:'12345678901'
   }
   console.log("From", user)
    axios.request({
        method: 'POST',
        url: `http://arsalon.xyz:5000/api/user`,
        data:user
      
      }).then((res)=>{ 
          console.log(res);
          dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
          })
          loadUser()
        console.log("api call sucessfull",res.data.token);
      
      }).catch((err)=>{
          dispatch({
              type: REGISTER_FAIL
          })
        console.log("api call unsucessfull",err);
      
        
      })
    
} 




export const login =(email, password)=> async dispatch=>{

    const user ={email,password}

    axios.request({
        method: 'POST',
        url: `http://arsalon.xyz:5000/api/auth`,
        data:user
      
      }).then((res)=>{ 
          console.log(res);
          dispatch({
              type:LOGIN_SUCCESS,
              payload: res.data
          }) 
          loadUser()
        console.log("api call sucessfull",res.data.token);
      
      }).catch((err)=>{
          dispatch({
              type: LOGIN_FAIL
          })
        console.log("api call unsucessfull",err);
      
        
      })
   

    
} 