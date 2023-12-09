import React from 'react';

const Card = ({ Type, buttonLabel, primary, user, storage, support, price }) => {
    return (
        <>
            <div className='w-full h-full border rounded-sm border-slate-300'>
                <div className=' text-center justify-center w-full'>
                    <p className='bg-slate-300 p-3 text-black text-2xl'>{Type}</p>
                </div>
                <div className='items-center text-center mt-5'>
                    <p className='text-3xl font-bold'>${price} <span className='text-2xl font-extralight'>/ mo</span></p>
                </div>
                <div className='text-center mt-10'>
                    <ul className=''>
                        <li>{user} user include</li>
                        <li>{storage} GB of Storage</li>
                        <li>{support}</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                <div className='mx-3 mt-16'>
                    {primary ? <button className='border text-blue-500 border-blue-500 rounded-sm w-full p-2'>{buttonLabel}</button> : <button className='w-full bg-blue-500 p-2 rounded-sm border border-blue-500 text-white'>{buttonLabel}</button>}
                </div>
            </div>
        </>
    )
}

export default Card