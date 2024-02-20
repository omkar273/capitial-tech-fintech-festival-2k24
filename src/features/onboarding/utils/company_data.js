import axios from "axios";

export const getCompaniesList = async (query = 'tata') => {

    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/search',
        params: {
            query: query,
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '89b956cb21mshe6770a47f4cfb4cp1e53e1jsn0f611e38844d',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.data.stock;
    } catch (error) {
        console.log(error);
        return null;
    }
}