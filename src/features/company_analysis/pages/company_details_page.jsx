import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetailsPageNavbar from '../components/company_page_navbar';
import { getCompanyDetails } from '../utils/get_company_details';



const CompanyDetailsPage = () => {
    const { symbol } = useParams();

    useEffect(() => {
        getData()
    }, [])

    const [company, setcompany] = useState({})

    const getData = async () => {
        const res = await getCompanyDetails(symbol);

        setcompany(res)
        console.log(`res in page `);
        console.log(res);
    }

    return (
        <div className='pg'>
            <CompanyDetailsPageNavbar />
            <div>
                
            </div>
        </div>
    );
};

export default CompanyDetailsPage;