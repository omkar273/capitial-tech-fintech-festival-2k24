import axios from 'axios';


export const getCompanyDetails = async (symbol) => {
    try {
        const apiKey = '6F7SMQW8Y2G10PUE'
        let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`

        url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo'
        const res = await axios.get(url);

        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        alert(error);
        return null;
    }
}
