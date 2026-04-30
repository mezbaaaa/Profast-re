import React from 'react';
import Logo from '../shared/logo';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-8 border py-3 px-5 rounded-xl border-gray-200 '>
            <Logo></Logo>
            <div className='flex gap-6 text-lg font-medium'>
               <NavLink to={''}>Services</NavLink> 
               <NavLink to={''}>Coverage</NavLink> 
               <NavLink to={''}>About Us</NavLink> 
               <NavLink to={''}>Pricing</NavLink> 
               <NavLink to={''}>Be a Rider</NavLink> 
            </div>
            <div className='flex items-center gap-4'>
                <Link to={''}><button className='cursor-pointer border py-3.5 px-6 rounded-xl border-[#CAEB66] bg-[#CAEB66] text-xl font-bold '>
                    Be a rider
                </button></Link>
                <Link to={''}><button className='cursor-pointer border py-3.5 px-5 rounded-xl border-[#CAEB66] text-xl font-bold '>
                    Sing in
                </button></Link>
            </div>
        </div>
    );
};

export default Navbar;