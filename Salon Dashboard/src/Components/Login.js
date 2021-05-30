import React, {useState} from 'react'
import "../index.css"
import Header from "./Header";

import {connect} from 'react-redux';
import {login} from "../redux/actions/auth"




function Login({login}) {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const submitHandler = () => {
        
        console.log(email, password);
        login(email, password);
    }

    return (
        <>

          <Header />
          <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-md w-full space-y-8">
              <div>
      
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
            
              </div>
              <form className="mt-8 space-y-6" onSubmit={(e)=>{e.preventDefault()}} >
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      value={email}
                      onChange={(e)=>setemail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setpassword(e.target.value)}
                    />
                  </div>
                </div>
      
                <div className="flex items-center justify-between">

      
                  <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
      
                <div>
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
    

    )
}

export default connect(null, {login})(Login)
