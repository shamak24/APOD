import React, { use } from 'react';
import '../index.css';
import { fetchTodayImage } from '../services/api';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

export default function Today() {
    const [imageData, setImageData] = useState({
        title: '',
        url: '',
        explanation: '',
        date: '',
        hd_url: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchImage = async () => {
        try{
            setLoading(true);
            const data = await fetchTodayImage();
            setImageData({
                title: data.title,
                url: data.url,
                explanation: data.explanation,
                date: data.date,
                hd_url: data.hdurl
            })
        }
        catch (err){
            setError('Failed to fetch image data');
            console.error(err);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchImage();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {loading ? (
                <Loading />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : <>
                <h1 className="text-4xl font-bold mb-4">{imageData.title}</h1>
                <div className='w-3/4 md:w-1/2 lg:w-1/3'>
                <img src={imageData.url} alt="image" className='mb-4 rounded-lg shadow-lg' />
                </div>
                <p className="text-lg mb-4 mx-5">{imageData.explanation}</p>
                <p className="text-sm text-gray-500 mb-4">Date: {imageData.date}</p>
                </>
            }   
        </div>
    );
}