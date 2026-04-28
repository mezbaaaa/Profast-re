import React from 'react';
// @ts-ignore
import Logo from '../../assets/logo.png'

const logo = () => {
    return (
        <div className='flex items-end '>
            <img src={Logo} alt="logo of zap shift" />
            <div className='text-3xl font-bold -ml-4'>
                Profast
            </div>
             
        </div>
    );
};

export default logo;