import Chatbot from '@/core/components/chatbot';
import Spacer from '@/core/components/spacer';
import { getCompaniesList } from '@/features/onboarding/utils/company_data';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Modal, Tabs } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import capitalLogo from '../../../assets/images/capitallogo.png';
import HomeNavbar from "../components/homepage_navbar";
import { stocksList } from '../data/stocks';

const HomePage = () => {
    const [companiesList, setCompaniesList] = useState(stocksList);
    const [query, setQuery] = useState('');
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(false);
    const searchCompanyiesList = async () => {
        setloading(true);
        const res = await getCompaniesList(query);
        if (res !== null) {
            setCompaniesList(res);
        }
        setloading(false);
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
        <div className="gr-pg">
            {/* navbar */}
            <div className="fixed w-full top-0">
                <HomeNavbar />
            </div>
            <div className="pg p-4 flex flex-col md:justify-center py-8 md:py-0 items-center">
                <img src={capitalLogo} />

                <Spacer height={15} />
                <div className=' w-full md:w-1/2 relative'>
                    <div className=" w-full flex gap-4 px-4 py-3 bg-white rounded-md justify-center items-center">
                        <div onClick={searchCompanyiesList}>
                            <SearchIcon className='tap ' />
                        </div>

                        <input
                            // onChange={(e) => setQuery(e.target.value)}
                            onClick={() => setOpen(true)}
                            type="text" className="border-none focus:outline-none text-base flex-grow" placeholder='Search company name...' />
                    </div>


                    {/* <ul className='absolute bg-white rounded-md shadow-md overflow-y-scroll max-h-[200px] scroll-smooth shadow-black z-[9999] mt-1'>
                        {loading && <li className='bg-white py-2 px-4 text-base cursor-pointer hover:bg-gray-200 hover:text-blue-500'>
                            loading....
                        </li>}
                    </ul> */}

                    {/* search results */}
                    {/* {companiesList.length > 0 && (
                        <ul className='absolute bg-white rounded-md shadow-md overflow-y-scroll max-h-[200px] scroll-smooth shadow-black z-[9999] mt-1'>

                            {companiesList.map(
                                (company) => <li

                                    key={company.id} className='py-2 px-4 text-base cursor-pointer hover:bg-gray-200 hover:text-blue-500'>
                                    <Link to={`/company/${company.symbol}`}  >
                                        {company.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    )} */}
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
                        <Link to={`/company/${company.symbol}`} className='w-full flex justify-between'  >
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
                        </Link>
                    </div>
                )}
            </Modal>
            {/* chatbot */}
            <Chatbot />
        </div>
    );
};

export default HomePage;







