import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
    const API_KEY = import.meta.env.NASA_API_KEY;
    
      // const fetchImage = async () => {
      //   try {
      //     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
      //     const data = await response.json();
      //     console.log(data);
      //   }
      //   catch (error) {
      //     console.error('Error fetching image:', error);
      //   }
      // }
    

    return (
        <>
        <Hero />
        <Footer />
        </>
    );
}