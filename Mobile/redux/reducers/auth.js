import {REGISTER_SUCCESS , REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    token: AsyncStorage.getItem('token'),
    isAuthenticated: true,
    loading:true,
    user:null
}


export default function (state=initialState , action){
    const {type, payload} = action;
    console.log(action)

    switch(type){
        case LOGIN_SUCCESS:
            AsyncStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading: false
                
            }
            
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading: false,
                user:payload
            }
        case REGISTER_SUCCESS: 
            AsyncStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case REGISTER_FAIL:  
        case AUTH_ERROR:
        case LOGIN_FAIL:
            AsyncStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated:false,
                loading:true
            }
            
        default:
            return state
    }
}