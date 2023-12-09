import React from 'react';

const Footerbox= ({ Lable, ListSubLabel }) => 

    <div>
        <p className='text-xl font-semibold'>{Lable}</p>
        <div className='text-slate-500 text-sm'>
            {ListSubLabel.map((value, index) => <p key={index}>{value}</p>)}
        </div>
    </div>



export default Footerbox