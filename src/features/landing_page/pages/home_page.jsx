import Chatbot from '@/core/components/chatbot';
import Spacer from '@/core/components/spacer';
import { getCompaniesList } from '@/features/onboarding/utils/company_data';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import capitalLogo from '../../../assets/images/capitallogo.png';
import HomeNavbar from "../components/homepage_navbar";

const HomePage = () => {
    const [companiesList, setCompaniesList] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setloading] = useState(false)

    const searchCompanyiesList = async () => {
        setloading(true);
        const res = await getCompaniesList(query);
        if (res !== null) {
            setCompaniesList(res);
        }
        setloading(false);
    }

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
                            onChange={(e) => setQuery(e.target.value)} type="text" className="border-none focus:outline-none text-base flex-grow" placeholder='Search company name...' />
                    </div>


                    <ul className='absolute bg-white rounded-md shadow-md overflow-y-scroll max-h-[200px] scroll-smooth shadow-black z-[9999] mt-1'>
                        {loading && <li className='bg-white py-2 px-4 text-base cursor-pointer hover:bg-gray-200 hover:text-blue-500'>
                            loading....
                        </li>}
                    </ul>

                    {/* search results */}
                    {companiesList.length > 0 && (
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
                    )}
                </div>
            </div>
            {/* chatbot */}
            <Chatbot />
        </div>
    );
};

export default HomePage;
