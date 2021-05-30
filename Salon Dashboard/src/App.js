import  { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from './Components/Dashboard'
import setAuthToken from "./util/setAuthToken";


//redux
import {Provider} from 'react-redux';
import store from "./redux/store"
import {loadUser} from './redux/actions/auth'


if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    
    <Provider store={store}>
    
    <Login />
   
  </Provider>
  );
};
export default App;
