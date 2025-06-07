import { nav } from 'framer-motion/client';
import React from 'react';

export default function Navbar(){
    return (
        <nav className='px-4 py-4 text-white flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50'>
            <h1 className='logo nav-link text-4xl cursor-pointer py-3 max-md:text-3xl'>APOD Explorer</h1>
        </nav>
    )
}