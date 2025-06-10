const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

export const fetchTodayImage = async () => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

// export const fetchRandomImage = async () => {
//     try {
//         const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&count=1`);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     }
//     catch (error) {
//         throw error;
//     }
// }