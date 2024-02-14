import Chatbot from '@/core/components/chatbot';
import Spacer from '@/core/components/spacer';
import SearchIcon from '@mui/icons-material/Search';
import HomeNavbar from "../components/homepage_navbar";
const HomePage = () => {

    return (
        <div className="gr-pg">
            {/* navbar */}
            <div className="fixed w-full top-0">
                <HomeNavbar />
            </div>
            <div className="pg p-4 flex flex-col justify-center items-center">
                <img src="/src/assets/images/capitallogo.png" />

                <Spacer height={15} />
                <div className=" w-full md:w-1/2 flex gap-4 px-4 py-3 bg-white rounded-md justify-center items-center">
                    <SearchIcon className='tap ' />

                    <input type="text" className="border-none focus:outline-none text-base flex-grow" placeholder='Search company name...' />
                </div>

            </div>
            {/* chatbot */}
            <Chatbot />
        </div>
    )
}

export default HomePage;

