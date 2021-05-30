import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import {Card} from 'antd'
import blob from "../Img/blob.svg"
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const navigation = ['Dashboard', 'Team', 'Projects', 'Calendar', 'Reports']
const profile = ['Your Profile', 'Settings', 'Sign out']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">

                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        itemIdx === 0 ? (
                          <Fragment key={item}>
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                              {item}
                            </a>
                          </Fragment>
                        ) : (
                          <a
                            key={item}
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                    <CloseOutlined aria-hidden="true" color='white' />
                    
                    ) : (
                    //   <MenuIcon className="block h-6 w-6"  />
                    <MenuOutlined aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  itemIdx === 0 ? (
                    <Fragment key={item}>
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                        {item}
                      </a>
                    </Fragment>
                  ) : (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
      
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-4 lg:px-4">
          {/* Replace with your content */}
                    
                <div>
                  <div className='flex sm:px-20 space-x-10 sm:space-x-10'>

                  <div className="rounded-md shadow-md flex  max-w-xs relative cursor-pointer transition duration-50 transform hover:scale-100">
                      <div className='rounded-md bg-gray-200' style={{ width: 250, height:150}}>
                        <p className="text-gray-800 font-bold text-l flex justify-center items-center justify-self-center mt-5">Sales</p>
                        <div className='flex justify-center items-center justify-self-center mt-5 '>
                          <p className="text-gray-800 font-bold text-4xl flex justify-center items-center justify-self-center">2250</p>
                          <p className="text-gary-500 font-normal text-l flex justify-center items-center justify-self-center">pkr</p>
                        </div>
                        
                        
                      </div>
                    </div>


                    <div className="rounded-md shadow-md flex  max-w-xs relative cursor-pointer transition duration-50 transform hover:scale-100">
                      <div className='rounded-md bg-indigo-200' style={{ width: 250, height:150}}>
                        <p className="text-gray-800 font-bold text-l flex justify-center items-center justify-self-center mt-5">Sales</p>
                        <div className='flex justify-center items-center justify-self-center mt-5 '>
                          <p className="text-indigo-800 font-bold text-4xl flex justify-center items-center justify-self-center">2250</p>
                          <p className="text-indigo-500 font-normal text-l flex justify-center items-center justify-self-center">pkr</p>
                        </div>
                        
                        
                      </div>
                    </div>

                    <div className="rounded-md shadow-md flex  max-w-xs relative cursor-pointer transition duration-50 transform hover:scale-100">
                      <div className='rounded-md bg-green-200' style={{ width: 250, height:150}}>
                        <p className="text-green-800 font-bold text-l flex justify-center items-center justify-self-center mt-5">Sales</p>
                        <div className='flex justify-center items-center justify-self-center mt-5 '>
                          <p className="text-green-800 font-bold text-4xl flex justify-center items-center justify-self-center">2250</p>
                          <p className="text-green-500 font-normal text-l flex justify-center items-center justify-self-center">pkr</p>
                        </div>
                        
                        
                      </div>
                    </div>

                    <div className="rounded-md shadow-md flex  max-w-xs relative cursor-pointer transition duration-50 transform hover:scale-100">
                      <div className='rounded-md bg-yellow-200' style={{ width: 250, height:150}}>
                        <p className="text-gray-800 font-bold text-l flex justify-center items-center justify-self-center mt-5">Sales</p>
                        <div className='flex justify-center items-center justify-self-center mt-5 '>
                          <p className="text-yellow-800 font-bold text-4xl flex justify-center items-center justify-self-center">2250</p>
                          <p className="text-yellow-500 font-normal text-l flex justify-center items-center justify-self-center">pkr</p>
                        </div>
                        
                        
                      </div>
                    </div>


              

            

                 
                  </div>
                </div>
          {/* /End replace */}
          <div className={'md:grid md:grid-cols-3 md:gap-6 mt-20 py-5 px-20'} >
            <div className="col-span-3 md:col-span-2">
              <div className="max-w-3xl">
                <LineChart />
              </div>
            
            </div>
            <div className="col-span-3 md:col-span-1">
            <div className={"max-w-sm"}>
              <BarChart />
            </div>
            
            </div>

          </div>
                    
                  

        </div>
      </main>
    </div>
  )
}