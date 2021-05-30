import React, {useState} from 'react'
import "../index.css"
import Header from "./Header";
import Checkbox from "./Checkbox"
import { TimePicker } from 'antd';
import {connect} from 'react-redux';
import {register} from '../redux/actions/auth';

// function Signup() {

//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')


//     const submitHandler = () => {
        
//         console.log(email, password);
//     }
//     return (
//         <div>
//             <Header />
//         <div className="md:grid md:grid-row-4 md:gap-4 mt-5 min-h-screen flex-1 px-20 mx-20 ">


//         <div className="mt-5 md:mt-0 md:col-span-2">
//             <div>
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  
                  



//                   <div className="grid grid-cols-3 gap-6">
//                     <div className="sm:col-span-1">
//                       <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
//                         Email
//                       </label>
//                       <div className="mt-1 flex-1 rounded-md shadow-sm">
//                         <input
//                           type="text"
//                           name="company_website"
//                           id="company_website"
//                           className="py-2 px-2 bg-gray-200 w-full"

//                           placeholder="Enter one line intro "
//                         />
//                       </div>
//                     </div>
//                   </div>




//                   <div className="grid grid-cols-3 gap-6">
//                     <div className="sm:col-span-1">
//                       <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
//                         Password
//                       </label>
//                       <div className="mt-1 flex-1 rounded-md shadow-sm">
//                         <input
//                           type="text"
//                           name="company_website"
//                           id="company_website"
//                           className="py-2 px-2 bg-gray-200 w-full"

//                           placeholder="Enter one line intro "
//                         />
//                       </div>
//                     </div>
//                   </div>

                    
            
     


                 
                  
//                   <div className="grid grid-cols-3 gap-6">
//                     <div className="sm:col-span-3">
//                       <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
//                         Phone #
//                       </label>
//                       <div className="mt-1 flex-1 rounded-md shadow-sm">
//                         <input
//                           type="text"
//                           name="company_website"
//                           id="company_website"
//                           className="py-2 px-2 bg-gray-200 w-full"

//                           placeholder="Enter one line intro "
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid-cols-3 flex justify-center">
//                         <p className="text-lg font-bold text-gray-700 ">Services</p>
//                   </div>

//                   {/* HAIRCUT ----------------------------------------*/}

//                   <div className="flex items-start grid-cols-3 justify-between ">
//                       <div className="flex">
//                       <div className="flex items-center h-5">
//                           <input
//                             id="candidates"
//                             name="candidates"
//                             type="checkbox"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                           />
//                         </div>
//                         <div className="ml-3 text-sm">
//                           <label htmlFor="candidates" className="font-medium text-gray-700">
//                             HairCut
//                           </label>
                          
//                         </div>

//                       </div>
          

//                         <div>
    
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-500 sm:text-sm">PKR</span>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 name="price"
//                                 id="price"
//                                 className=" bg-gray-200 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
//                                 placeholder="0.00"
//                                 />
                        
//                                 </div>
//                             </div>
//                       </div>

                    




//                     {/*-----------------------------------------------*/}
                    
//                     <div className="flex items-start grid-cols-3 justify-between ">
//                       <div className="flex">
//                       <div className="flex items-center h-5">
//                           <input
//                             id="candidates"
//                             name="candidates"
//                             type="checkbox"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                           />
//                         </div>
//                         <div className="ml-3 text-sm">
//                           <label htmlFor="candidates" className="font-medium text-gray-700">
//                             HairCut
//                           </label>
                          
//                         </div>

//                       </div>
          

//                         <div>
    
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-500 sm:text-sm">PKR</span>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 name="price"
//                                 id="price"
//                                 className=" bg-gray-200 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
//                                 placeholder="0.00"
//                                 />
                        
//                                 </div>
//                             </div>
//                       </div>










//                       <div className="flex items-start grid-cols-3 justify-between ">
//                       <div className="flex">
//                       <div className="flex items-center h-5">
//                           <input
//                             id="candidates"
//                             name="candidates"
//                             type="checkbox"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                           />
//                         </div>
//                         <div className="ml-3 text-sm">
//                           <label htmlFor="candidates" className="font-medium text-gray-700">
//                             HairCut
//                           </label>
                          
//                         </div>

//                       </div>
          

//                         <div>
    
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-500 sm:text-sm">PKR</span>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 name="price"
//                                 id="price"
//                                 className=" bg-gray-200 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
//                                 placeholder="0.00"
//                                 />
                        
//                                 </div>
//                             </div>
//                       </div>











//                       <div className="flex items-start grid-cols-3 justify-between ">
//                       <div className="flex">
//                       <div className="flex items-center h-5">
//                           <input
//                             id="candidates"
//                             name="candidates"
//                             type="checkbox"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                           />
//                         </div>
//                         <div className="ml-3 text-sm">
//                           <label htmlFor="candidates" className="font-medium text-gray-700">
//                             HairCut
//                           </label>
                          
//                         </div>

//                       </div>
          

//                         <div>
    
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-500 sm:text-sm">PKR</span>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 name="price"
//                                 id="price"
//                                 className=" bg-gray-200 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
//                                 placeholder="0.00"
//                                 />
                        
//                                 </div>
//                             </div>
//                       </div>











//                       <div className="flex items-start grid-cols-3 justify-between ">
//                       <div className="flex">
//                       <div className="flex items-center h-5">
//                           <input
//                             id="candidates"
//                             name="candidates"
//                             type="checkbox"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                           />
//                         </div>
//                         <div className="ml-3 text-sm">
//                           <label htmlFor="candidates" className="font-medium text-gray-700">
//                             HairCut
//                           </label>
                          
//                         </div>

//                       </div>
          

//                         <div>
    
//                             <div className="mt-1 relative rounded-md shadow-sm">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <span className="text-gray-500 sm:text-sm">PKR</span>
//                                 </div>
//                                 <input
//                                 type="text"
//                                 name="price"
//                                 id="price"
//                                 className=" bg-gray-200 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
//                                 placeholder="0.00"
//                                 />
                        
//                                 </div>
//                             </div>
//                       </div>

//                     </div>             
//      </div>
//      </div>
//      </div>

                
              
    


//           <div className="mt-5 md:mt-0 md:col-span-2">
//             <form action="#" method="POST">
//               <div className="shadow sm:rounded-md sm:overflow-hidden">
//                 <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                   <div className="grid grid-cols-3 gap-6">
//                     <div className="sm:col-span-3">
//                       <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
//                         Bio
//                       </label>
//                       <div className="mt-1 flex-1 rounded-md shadow-sm">
//                         <input
//                           type="text"
//                           name="company_website"
//                           id="company_website"
//                           className="py-2 px-2 bg-gray-200 w-full"

//                           placeholder="Enter one line intro "
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-2">
//                     <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                       Description
//                     </label>
//                     <div className="mt-1">
//                       <textarea
//                         id="about"
//                         name="about"
//                         rows={3}
//                         className="py-2 px-2 w-full bg-gray-200 "
//                         placeholder="Brief description of your salon and services"
//                         defaultValue={''}
//                       />
//                     </div>
            
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Cover photo</label>
//                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                       <div className="space-y-1 text-center">
//                         <svg
//                           className="mx-auto h-12 w-12 text-gray-400"
//                           stroke="currentColor"
//                           fill="none"
//                           viewBox="0 0 48 48"
//                           aria-hidden="true"
//                         >
//                           <path
//                             d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                             strokeWidth={2}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                         <div className="flex text-sm text-gray-600">
//                           <label
//                             htmlFor="file-upload"
//                             className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//                           >
//                             <span>Upload a file</span>
//                             <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                           </label>
//                           <p className="pl-1">or drag and drop</p>
//                         </div>
//                         <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                   <button
//                     type="submit"
//                     className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Sign up
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

 
//     )
// }

// export default Signup




/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/


 const Signup=({register})=> {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const [number, setnumber] = useState('')
  const [address, setaddress] = useState({
      street:'',
      city:'',
      state:'',
      postel:''
  })
  const [description, setdescription] = useState('')

  const onChangeAddress=(e)=>{
    setaddress(prevState=> {
      let add = Object.assign({}, prevState)
      add[e.target.name]=e.target.value;
      return add;
    })
  }

  const submitHandle = () => {
    console.log(name, email, password, number)
    register (name, email, password, number)


  }

  return (
    <>

    <Header />
      <div className="mt-20">

        <div className='flex justify-center items-center my-5'>
          <h1 className='text-2xl text-gray-600 font-bold '>Register Your Business</h1>
        </div>

      <div className="mt-20 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          
    
          
          <div className="mt-5 md:mt-0 md:col-span-2 max-w-2xl ">
            <div >
              <div className="shadow overflow-hidden sm:rounded-md ">

                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                        className="mt-1 bg-gray-100 w-full py-2 px-2 rounded-md text-black"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                        password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e)=>{setpassword(e.target.value)}}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                        Salon Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e)=>{setname(e.target.value)}}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                        Contact #
                      </label>
                      <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={number}
                        onChange={(e)=>{setnumber(e.target.value)}}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md focus:border-indigo-600"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"

                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      >
                        <option>Pakistan</option>
                        
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street"
                        value={address.street}
                        onChange={onChangeAddress}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={address.city}
                        onChange={onChangeAddress}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={address.state}
                        onChange={onChangeAddress}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postel"
                        id="postal"
                        value={address.postel}
                        onChange={onChangeAddress}
                        className="mt-1 bg-gray-300 w-full py-2 px-2 rounded-md"
                      />
                    </div>
                  </div>
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </div>

        
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">

          <div className=" md:col-span-1 bg-indigo-600 rounded ml-5">
            <div className="px-4 sm:px-0 flex flex-col align-middle items-center">
              <h3 className="text-xl mt-20 font-bold leading-6 text-white">Description and Media </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="description"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-300 py-2 px-2"
                        placeholder=""
                        defaultValue={''}
                        value={description}
                        onChange={(e)=>{setdescription(e.target.value)}}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of your business
                    </p>
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e)=>{console.log(e)}} />
                          </label>
                          
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>



      


      <div className="mt-10 sm:mt-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className=" md:col-span-1 bg-indigo-600 rounded ml-5">
            <div className="px-4 sm:px-0 flex flex-col mt-20 justify-self-center justify-center items-center">
              <h3 className="text-xl font-bold leading-6 text-white">Services and timings</h3>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <div>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-10 sm:p-6">
  
                  <fieldset>

                    <div className='mt-5'>
                      <div className='my-5'>
                          <legend className="text-base font-medium text-gray-900">Select your salons opening and closing timings</legend>
                      </div>

                      <div className='flex justify-self-center justify-center items-center'>
                        <TimePicker.RangePicker onChange={(time,timeString)=>{console.log(time, timeString)}} />
                      </div>
                    
                    </div>
                    <div className='mt-5'>
                      <legend className="text-base font-medium text-gray-900">Services</legend>
                    </div>
                    <div className="mt-4 space-y-4">
                      <Checkbox />
                 
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex">
                  <button
                    onClick={submitHandle}
                   
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(null, {register})(Signup);
