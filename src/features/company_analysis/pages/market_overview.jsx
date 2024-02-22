import DashboardNavbar from "@/features/dashboard/components/dashboard_navbar";


import Spacer from '@/core/components/spacer';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Chatbot from "@/core/components/chatbot";
import CandleStickChart from './../components/candle_stick_chart';
import { stocksList2 } from "./stock_list";


const MarketOverviewPage = () => {

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
    useEffect(() => {
        getCandleChartTimeSeriesData()
        // getStockInfo();
    }, [])

    return (
        <div className="pg">
            <DashboardNavbar />
            <div className="w-full flex gap-4 p-4">
                <div className="flex-grow ">
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
                </div>

                {/* watchlist */}
                <div className="w-[30%] card bg-white">
                    <div className="w-full justify-between flex items-center">
                        <p className="text-xl font-ubuntu">
                            Watchlist
                        </p>
                        <AddIcon />
                    </div>
                    <Spacer height={25} />
                    <div className="w-full overflow-y-scroll px-4">
                        <div className="flex text-base  justify-around">
                            <p>Symbol</p>
                            <p>Last</p>
                            <p>Change</p>
                            <p>change percentage</p>
                        </div>
                        {stocksList2.map((element, i) => {
                            return <div key={i} className="flex text-base  justify-around p-4" style={i % 2 == 1 ? {
                                backgroundColor: '#e0dddc'
                            } : {}}>
                                <p className="w-[20%]">{element.symbol.slice(0, 7)}</p>
                                <p className="w-[20%]">{element.previous_close}</p>
                                <p className="w-[20%]">{element.change}</p>
                                <p className="w-[20%]">{element.change_percent}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            {/* chatbot */}
            <Chatbot />
        </div>
    )
}

export default MarketOverviewPage