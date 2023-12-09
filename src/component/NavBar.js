import React from 'react';

const NavBar = () => {
    return(
        <>
        <div className='w-full shadow-md flex justify-between bg-white items-center h-full '>
            <p className='ml-5'>Company Name</p>
            <p className='mr-5'>
                <ul className='flex items-center'>
                    <li>Feature</li>
                    <li className='ml-3'>Enterprise</li>
                    <li className='ml-3'>Support</li>
                    <li className='ml-3'>Pricing</li>
                    <button className='ml-3 border p-1 rounded-md border-blue-500 text-blue-500 px-3'>Signup</button>
                </ul>
            </p>
        </div>
        </>
    )
}

export default NavBar