import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero(){
    return (
        <div className='flex flex-col items-center justify-center pt-50 pb-20 px-15 mx-auto'>
            <h1 className='logo text-6xl max-md:text-5xl mb-5'>APOD Explorer</h1>
            <p className='text-[#c5c6c7] px-3 text-center text-xl max-md:text-lg max-w-2xl mb-5'>Explore NASA's Astronomy Picture of the Day (APOD) and learn about the wonders of our universe.</p>
            <div className='flex justify-center gap-4 p-2 mt-3'>
                <Link to="/today">
                    <button className='bg-[#66fcf1] text-[#0b0c10] px-4 py-2 rounded-lg hover:bg-[#45a29e] transition-colors duration-300 cursor-pointer'>
                        Today's Picture
                    </button>
                </Link>
                <Link to="/random">
                    <button className='bg-[#66fcf1] text-[#0b0c10] px-4 py-2 rounded-lg hover:bg-[#45a29e] transition-colors duration-300 cursor-pointer'>
                        Random Picture
                    </button>
                </Link>
            </div>
        </div>
    )
}