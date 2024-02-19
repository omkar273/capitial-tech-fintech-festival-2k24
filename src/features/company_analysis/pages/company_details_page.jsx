import Spacer from '@/core/components/spacer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetailsPageNavbar from '../components/company_page_navbar';
import { getCompanyDetails } from '../utils/get_company_details';

const CompanyDetailsPage = () => {
    const { symbol } = useParams();
    const [companyDataList, setcompanyDataList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const options = {
        month: "long",
        day: "numeric",
    };

    const [alphaVantageCompany, setalphaVantageCompany] = useState({})

    const searchCompanyiesList = async () => {
        console.log('inside search companies');
        const res = await getCompaniesList(query);
        if (res !== null) {
            setCompaniesList(res);
        }
    };

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
        setcompanyDataList(
            [
                {
                    'title': 'Market Cap  : ',
                    'value': res['MarketCapitalization'] + ' ₹ '
                },
                {
                    'title': 'PE Ratio  : ',
                    'value': res['PERatio'] + ' %'
                },
                {
                    'title': ' PEG Ratio : ',
                    'value': res['PEGRatio'] + ' %'
                },
                {
                    'title': 'Book Value : ',
                    'value': res['BookValue']
                },
                {
                    'title': 'Dividend Per Share  : ',
                    'value': res['DividendPerShare'] + ' ₹ '
                },
                {
                    'title': 'Dividend Yield  : ',
                    'value': res['DividendYield'] + ' %'
                },
                {
                    'title': 'Earning Per Share : ',
                    'value': res['EPS']
                },
                {
                    'title': 'Revenue Per Share TTM : ',
                    'value': res['RevenuePerShareTTM']
                },
                {
                    'title': 'Profit Margin  : ',
                    'value': res['ProfitMargin'] + ' %'
                },
                {
                    'title': 'Operating Marg in TTM : ',
                    'value': res['OperatingMarginTTM']
                },
                {
                    'title': 'Return On Assets TTM : ',
                    'value': res['ReturnOnAssetsTTM'] + ' %'
                },
                {
                    'title': 'Return On Equity TTM : ',
                    'value': res['ReturnOnEquityTTM'] + ' %'
                },
                {
                    'title': 'Revenue TTM : ',
                    'value': res['RevenueTTM'] + ' %'
                },
                {
                    'title': 'Gross Profit TTM : ',
                    'value': res['GrossProfitTTM'] + ' %'
                },
                {
                    'title': 'DilutedEPSTTM : ',
                    'value': res['DilutedEPSTTM'] + ' %'
                },
                {
                    'title': 'Quarterly Earnings Growth YOY : ',
                    'value': res['QuarterlyEarningsGrowthYOY'] + ' %'
                },
                {
                    'title': 'Quarterly Revenue Growth YOY : ',
                    'value': res['QuarterlyRevenueGrowthYOY'] + ' %'
                },
                {
                    'title': 'Analyst Target Price : ',
                    'value': res['AnalystTargetPrice'] + ' %'
                },
                {
                    'title': 'Trailing PE : ',
                    'value': res['TrailingPE'] + ' %'
                },
                {
                    'title': 'Forward PE : ',
                    'value': res['ForwardPE']
                },
                {
                    'title': 'Price To Sales Ratio TTM : ',
                    'value': res['PriceToSalesRatioTTM']
                },
                {
                    'title': 'Price To Book Ratio : ',
                    'value': res['PriceToBookRatio'] + ' %'
                },
                {
                    'title': 'EV To Revenue : ',
                    'value': res['EVToRevenue'] + ' %'
                },
                {
                    'title': 'EV To EBITDA : ',
                    'value': res['EVToEBITDA'] + ' %'
                },
                {
                    'title': '52 Week High / Low  : ',
                    'value': `${res['52WeekHigh']} / ${res['52WeekLow']}`
                },

                {
                    'title': '50 Day Moving Average : ',
                    'value': res['50DayMovingAverage']
                },
                {
                    'title': '200 Day Moving Average : ',
                    'value': res['200DayMovingAverage']
                },
                {
                    'title': 'Shares Outstanding : ',
                    'value': res['SharesOutstanding']
                },
                {
                    'title': 'Dividend Date : ',
                    'value': res['DividendDate']
                },
                {
                    'title': 'Ex Dividend Date : ',
                    'value': res['ExDividendDate']
                },
            ]
        )
    }

    return (
        <div className='pg bg-[#dce4efcc]'>
            <CompanyDetailsPageNavbar />
            <div className='md:p-6 p-4'>
                <div className='card bg-white p-6 font-open-sans'>
                    {/* company name and change percentage */}
                    <div className='w-full block md:flex md:gap-12 items-center   '>
                        <p className='text-lg md:text-2xl font-semibold'>{alphaVantageCompany.Name}</p>
                        <div>
                            <p className='text-[1rem] font-semibold'>₹ {rapidCompany.price.toFixed(2)}
                                <span style={{
                                    color: rapidCompany.change_percent > 0 ?
                                        'green' : 'red',
                                    marginLeft: '0.5rem',
                                    fontSize: '0.5rem'
                                }}>
                                    {rapidCompany.change_percent + ' %'}
                                </span>
                            </p>
                            <p className='text-[0.65rem]'>
                                {new Intl.DateTimeFormat("en-US", options).format(new Date(rapidCompany.exchange_close)) + ' - previous close price'}
                            </p>
                        </div>
                    </div>
                    <Spacer height={10} />
                    {/* company links */}
                    {/* <div>
                        <OpenInBrowserIcon />
                    </div> */}

                    {/* company details like pe ratio and about part */}
                    <div className='w-full flex gap-4'>

                        {/* ratios */}
                        <div className='p-2 w-full grid grid-cols-3 gap-4 justify-center text-[0.6rem] text-gray-500 h-max'>
                            {companyDataList.map((element, index) => {
                                return <div key={index} className='w-full flex justify-between p-2 rounded-md bg-gray-100 '>
                                    <p>{element.title}</p>
                                    <p className='font-semibold'>{element.value}</p>
                                </div>
                            })}
                        </div>

                        {/* about */}
                        <div className='p-2 w-full md:w-[40%]'>
                            <p>About</p>
                            <p className='text-[0.6rem]'>{alphaVantageCompany.Description}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CompanyDetailsPage;

