import React from 'react';
import FooterBox from './FooterBox';
import Footerbox from './FooterBox';

const Footer = () => {
    return (
        <>
            <div className='w-full h-56 '>
                <div className=''>
                    <hr className='mb-10'></hr>
                    <ul className='flex justify-around mx-10 xl:mx-20'>
                        <img className='w-20 h-10' src='https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png'></img>
                        <Footerbox Lable={'Feature'} ListSubLabel={['Cool Staff', 'Random Feature', 'Team Feature']} />
                        <Footerbox Lable={'Resource'} ListSubLabel={['Resource', 'Resourse Name', 'Another Resource']} />
                        <Footerbox Lable={'About'} ListSubLabel={['Team', 'Location', 'Privacy']} />
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Footer