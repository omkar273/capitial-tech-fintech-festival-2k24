import { useParams } from 'react-router-dom';
const CompanyDetailsPage = () => {
    // Access the dynamic parameter 'symbol' using the useParams hook
    const { symbol } = useParams();

    return (
        <div>
            <h2>Company Details Page</h2>
            <p>Symbol: {symbol}</p>
            {/* Add your component logic here */}
        </div>
    );
};
export default CompanyDetailsPage