import React from 'react';
// @ts-ignore
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';

const logo = () => {
    return (
        <div className='' >
            <Link to={'/'} className='flex items-end'>
                <img className='mb-1.5' src={Logo} alt="logo of zap shift" />
                <p className='text-3xl font-bold -ml-4 '>
                    Profast
                </p>
            </Link>
        </div>
    );
};

export default logo;