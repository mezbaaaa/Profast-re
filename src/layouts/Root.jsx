import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';

const Rootlayouts = () => {
    return (
        <div className='w-[1500px] mx-auto  '>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default Rootlayouts;