import Chatbot from '@/core/components/chatbot';
import Spacer from '@/core/components/spacer';
import DashboardNavbar from "@/features/dashboard/components/dashboard_navbar";
import { stocksList } from "@/features/landing_page/data/stocks";
import { getCompaniesList } from '@/features/onboarding/utils/company_data';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Modal, Tabs } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const StockPredictionPage = () => {


    const [companiesList, setCompaniesList] = useState(stocksList);
    const [query, setQuery] = useState('');
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(false);
    const [symbol, setsymbol] = useState('TATASTEEL:NSE')

    const searchCompanyiesList = async () => {
        setloading(true);
        const res = await getCompaniesList(query);
        if (res !== null) {
            setCompaniesList(res);
        }
        setloading(false);
    }

    const [newsFeed, setnewsFeed] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo')
            console.log(res.data);
            if (res.status === 200 && res.data.feed) {
                setnewsFeed(res.data.feed);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const items = [
        {
            key: '1',
            label: 'All',
            children: '',
        },
        {
            key: '2',
            label: 'Stocks',
            children: '',
        },
        {
            key: '3',
            label: 'Funds',
            children: '',
        },
    ];


    return (
        <div className='pg'>
            <DashboardNavbar />

            <div className="p-4 md:px-[10%] ">
                <div className="w-full flex gap-4 md:py-4 md:px-8 p-3 bg-white justify-center items-center rounded-full ">
                    <SearchIcon className='tap ' fontSize="large" />
                    <input
                        onClick={() => setOpen(true)}
                        type="text" className="border-none focus:outline-none text-base md:text-2xl flex-grow" placeholder='Search company name...' />
                </div>
            </div>
            <Modal
                title="Capital Tech"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                className='mt-12'
                width={1000}>
                <div className="border-2 w-full flex gap-4 px-4 py-3 bg-white rounded-md justify-center items-center">
                    <div onClick={searchCompanyiesList}>
                        <SearchIcon className='tap ' />
                    </div>

                    <input
                        onChange={(e) => setQuery(e.target.value)} type="text" className="border-none focus:outline-none text-base flex-grow" placeholder='Search company name...' />
                </div>
                <Spacer height={15} />
                <Tabs defaultChecked='1' items={items} size="large" />

                {companiesList.map(
                    (company) => <div
                        key={company.id} className='py-2 px-4 text-base cursor-pointer hover:bg-gray-200 hover:text-blue-500'>
                        <div className='w-full flex justify-between'  >
                            <p className='flex gap-3 items-center'>
                                <Avatar style={{ verticalAlign: 'middle' }} className='bg-primary-400 cursor-pointer' size="large" gap={10} >
                                    <CandlestickChartIcon />
                                </Avatar>
                                {company.name}
                            </p>
                            <div className='gap-8 justify-end items-center flex-wrap hidden md:flex'>
                                <p className='text-base '>price : ₹{company.price}</p>
                                <p className='text-base bg-green-500 p-2 text-white font-ubuntu rounded-md'>Stock : {company.exchange}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* chatbot */}
            <Chatbot />
        </div>
    )
}

export default StockPredictionPage