import React from 'react';
import NavBar from './component/NavBar';
import Card from './component/Card';
import Footer from './component/footer';

const App = () => {
  return (
    <>
      <div className='w-full h-20 sticky top-0'>
      <NavBar />
      </div>
      <div className='w-full mt-10 justify-center flex'>
        <div className='text-center'>
        <p className='text-3xl'>Pricing</p>
       <div className='flex mt-5 justify-center'>
       <p className='flex w-[70%] text-center justify-center '>Quicky build and effective pricing table for your potentail customers with Tailwind example. it's build with default Tailwind components and utilities with title customization</p>
       </div>
        </div>
      </div>
      <div className='flex w-full justify-center mt-20'>
        <div className='w-72 h-96'>
          <Card Type={'Free'} buttonLabel={'Signup for free'} primary={true} price={0} storage={10} user={10} support={'Email Support'} />
        </div>
        <div className='w-72 h-96 flex ml-5'>
          <Card Type={'Pro'} buttonLabel={'Get Started'} primary={false} price={15} storage={10} user={20} support={'Priority and email Support'} />
        </div>
        <div className='w-72 h-96 flex ml-5'>
          <Card Type={'Enterprise'} buttonLabel={'Contact Now'} primary={false} price={29} storage={15} user={30} support={'Phone and email Support'} />
        </div>
      </div>
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  )
}

export default App