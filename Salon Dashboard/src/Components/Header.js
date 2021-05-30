import React from 'react'
import HeaderItem from './HeaderItem';


function Header() {
    return (
        <header className='flex flex-row sm:flex-row justify-end  items-center border-b-2 border-gray-50 bg-indigo-600 h-12'>
 


        <div className="flex flex-grow justify-evenly max-w-sm w-full">
            
            <HeaderItem title='Login'  />
            <HeaderItem title='Sign up ' />
        </div>
    </header>
    )
}

export default Header
