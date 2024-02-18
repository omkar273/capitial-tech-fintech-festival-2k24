import Spacer from '@/core/components/spacer';
import CandleGraph from '@/features/company_analysis/components/candle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetailsPageNavbar from '../components/company_page_navbar';
import { getCompanyDetails } from '../utils/get_company_details';

const CompanyDetailsPage = () => {
    const { symbol } = useParams();

    useEffect(() => {
        getData()
    }, [])

    const options = {
        month: "long",
        day: "numeric",
    };

    const [alphaVantageCompany, setalphaVantageCompany] = useState({})
    const [rapidCompany, setrapidCompany] = useState({
        "symbol": "AAPL:NASDAQ",
        "name": "Apple Inc",
        "type": "stock",
        "price": 182.6901,
        "change": -2.3499,
        "change_percent": -1.2699,
        "previous_close": 185.04,
        "last_update_utc": "2024-02-14 17:16:12",
        "country_code": "US",
        "exchange": "NASDAQ",
        "exchange_open": "2024-02-14 09:30:00",
        "exchange_close": "2024-02-14 16:00:00",
        "timezone": "America/New_York",
        "utc_offset_sec": -18000,
        "currency": "USD",
        "google_mid": "/m/07zmbvf"
    })
    const getData = async () => {
        const res = await getCompanyDetails(symbol);

        setalphaVantageCompany(res)
        console.log(`res in page `);
        console.log(res);
    }

    return (
        <div className='pg bg-[#dce4efcc]'>
            <CompanyDetailsPageNavbar />
            <div className='md:p-6 p-4'>
                <div className='card bg-white p-6 font-open-sans'>
                    {/* company name and change percentage */}
                    <div className='w-full block md:flex md:gap-12 items-center   '>
                        <p className='text-lg md:text-4xl font-semibold'>{alphaVantageCompany.Name}</p>
                        <div>
                            <p className='text-base font-semibold'>₹ {rapidCompany.price.toFixed(2)}
                                <span style={{
                                    color: rapidCompany.change_percent > 0 ?
                                        'green' : 'red',
                                    marginLeft: '0.5rem',
                                    fontSize: '0.75rem'
                                }}>
                                    {rapidCompany.change_percent + ' %'}
                                </span>
                            </p>
                            <p className='text-[0.75rem]'>
                                {new Intl.DateTimeFormat("en-US", options).format(new Date(rapidCompany.exchange_close)) + ' - previous close price'}
                            </p>
                        </div>
                    </div>
                    <Spacer height={10} />
                    {/* company links */}
                    {/* <div>
                        <OpenInBrowserIcon />
                    </div> */}
                    

                </div>
            </div>

        </div>
    );
};

export default CompanyDetailsPage;

