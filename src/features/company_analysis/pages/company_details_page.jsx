import Spacer from '@/core/components/spacer';

import { getCompaniesList } from '@/features/onboarding/utils/company_data';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompanyDetailsPageNavbar from '../components/company_page_navbar';
import { getCompanyDetails } from '../utils/get_company_details';
import CandleStickChart from './../components/candle_stick_chart';

import Chatbot from '@/core/components/chatbot';
import Footer from '@/core/components/footer';
import BalanceSheetChart, { balance_sheet_labels, cashflow_sheet_labels, income_sheet_labels } from '../components/balance_sheet_table';
import EarningsChart from '../components/earning_chart';



const CompanyDetailsPage = () => {
    const { symbol } = useParams();
    const [companyDataList, setcompanyDataList] = useState([])

    const options = {
        month: "long",
        day: "numeric",
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

    const getStockInfo = async () => {
        const res = await getCompaniesList(symbol);
        if (res !== null) {
            setrapidCompany(res[0]);
        }
    };

    useEffect(() => {
        getData()
        getCandleChartTimeSeriesData()
        // getStockInfo();
    }, [])

    const [alphaVantageCompany, setalphaVantageCompany] = useState({})
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


    const chartTypeList = ['Candle', 'Line']
    const [chartType, setchartType] = useState(chartTypeList[0])

    const [stockPriceTimeSeriesData, setstockPriceTimeSeriesData] = useState([])
    const getCandleChartTimeSeriesData = async () => {
        const res = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo');

        let timeseriesData = [];
        if (res.status !== 200) {
            // alert('Unable to get candlestick data')
            return;
        }
        const timeseries = res.data['Time Series (Daily)'];
        for (let key in timeseries) {

            timeseriesData.push({
                x: new Date(key),
                open: parseFloat(timeseries[key]["1. open"], 10),
                high: parseFloat(timeseries[key]["2. high"], 10),
                low: parseFloat(timeseries[key]["3. low"], 10),
                close: parseFloat(timeseries[key]["4. close"], 10),
                volume: parseFloat(timeseries[key]["5. volume"], 10)
            })
        }
        setstockPriceTimeSeriesData(timeseriesData)
    }



    return (
        <div className='pg bg-[#dce4efcc]'>
            <CompanyDetailsPageNavbar />
            <div className='md:p-6 p-4'>
                <div className='card bg-white p-6 font-open-sans'>


                    {/* company name and change percentage */}
                    <div className='w-full block md:flex md:gap-12 items-center'>
                        <p className='text-lg md:text-4xl font-semibold'>{rapidCompany.name}</p>
                        <div>
                            <p className='text-[1.25rem] font-semibold'>₹ {rapidCompany.price.toFixed(2)}
                                <span style={{
                                    color: rapidCompany.change_percent > 0 ?
                                        'green' : 'red',
                                    marginLeft: '0.5rem',
                                    fontSize: '0.85rem'
                                }}>
                                    {rapidCompany.change_percent + ' %'}
                                </span>
                            </p>
                            <p className='text-[0.75rem]'>
                                {new Intl.DateTimeFormat("en-US", options).format(new Date(rapidCompany.exchange_close)) + ' - previous close price'}
                            </p>
                        </div>
                    </div>

                    <Spacer height={35} />
                    {/* company links */}
                    {/* <div>
                        <OpenInBrowserIcon />
                    </div> */}

                    {/* company details like pe ratio and about part */}
                    <div className='w-full md:flex md:gap-8' id='Overview'>

                        {/* ratios */}
                        <div className='p-4 rounded-md w-full grid md:grid-cols-3 gap-x-8 gap-y-4 justify-center text-[0.75rem] text-gray-500 h-max border-2'>
                            {companyDataList.map((element, index) => {
                                return <div key={index} className={`w-full text-[0.85rem] flex justify-between p-3 rounded-md ${(index % 2 === 0) && 'bg-blue-50 bg-opacity-60 '}`}>
                                    <p>{element.title}</p>
                                    <p className='font-semibold'>{element.value}</p>
                                </div>
                            })}
                        </div>

                        {/* about */}
                        <div className='p-2 w-full md:w-[40%]' id='About'>
                            <p className='text-lg font-semibold py-2'>About</p>
                            <p className='text-[0.9rem]'>{alphaVantageCompany.Description}</p>
                        </div>
                    </div>

                </div>

                <Spacer height={35} />


                {/*candle stick chart*/}
                <div className='w-full bg-white  p-7 card' id='Candle chart'>
                    <div className='flex  items-center justify-between'>

                        <p className='inline-flex text-3xl font-fira-sans '>
                            Stock Price
                        </p>
                        <div className='inline-flex'>
                            {chartTypeList.map((type, index) =>
                                <div className='p-2 px-3 cursor-pointer'
                                    key={index}
                                    onClick={() => setchartType(type)}
                                    style={chartType === type ? {
                                        backgroundColor: '#e6e9f0',
                                        fontWeight: 600,
                                        borderRadius: '0.5rem'
                                    } : {}}
                                >
                                    {type}
                                </div>
                            )}
                        </div>
                    </div>
                    <Spacer height={20} />
                    <CandleStickChart
                        stockPriceTimeSeriesData={stockPriceTimeSeriesData}
                        chartType={chartType} />
                </div>
                <Spacer height={20} />

                {/* eps graph */}
                <div id='Profit & Loss'>
                    <EarningsChart url='https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=demo' chartTitle='Earning per share' />
                    <Spacer height={20} />
                </div>



                {/* annual balance sheets */}
                <div id='Balance sheet'>
                    <BalanceSheetChart chartTitle='Balance Sheet' url='https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo' labelsList={balance_sheet_labels} />
                </div>


                {/* cash flows */}
                <Spacer height={25} />
                <div id='Cash flow'>

                    <BalanceSheetChart chartTitle='Cashflow' url='https://www.alphavantage.co/query?function=CASH_FLOW&symbol=IBM&apikey=demo' labelsList={cashflow_sheet_labels} />

                </div>


                {/* income sheet chart */}
                <Spacer height={25} />
                <div id='Income statement'>
                    <BalanceSheetChart chartTitle='Income Statement' url='https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo' labelsList={income_sheet_labels} />
                </div>
                <Spacer height={50} />

            </div>
            <Footer />
            {/* chatbot */}
            <Chatbot />
        </div >
    );
};

export default CompanyDetailsPage;

