import React from 'react'


function HeaderItem({title}) {
    return (
       
        <>
                <div className='group flex flex-row items-center cursor-pointer' >
                    <p className='tracking-widest text-white font-medium'>{title}</p>
                </div>
             
        </>
        
    )
}

export default HeaderItem
