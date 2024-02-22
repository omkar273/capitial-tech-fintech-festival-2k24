import StockPredictionIcon from '@mui/icons-material/AutoGraph';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PortfolioAnalysisIcon from '@mui/icons-material/PieChart';
import MarketIcon from '@mui/icons-material/Timeline';
import { Link } from 'react-router-dom';
import DashboardNavbar from "../components/dashboard_navbar";
import Chatbot from '@/core/components/chatbot';

const DashboardPage = () => {
    const className = ' p-5 rounded-xl border-2 cursor-pointer bg-purple-400 btn text-xl flex items-center gap-4'
    return (
        <div className='pg'>
            <DashboardNavbar />
            <div className="md:flex p-4 gap-4 pb-12">

                <div className="flex-grow rounded-lg p-5 card bg-white">

                    <p className="rounded-3xl font-bold text-3xl ml-8 p-4">
                        Dashboard
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link className={className} to={'/profile'} >
                            <PortfolioAnalysisIcon fontSize='large' />
                            portfolio analysis
                        </Link>

                        <div className={className} >
                            <MarketIcon fontSize='large' />
                            Market overview </div>

                        <div className={className} >
                            <StockPredictionIcon fontSize='large' />
                            Stock prediction </div>

                        <div className={className} >
                            <NewspaperIcon fontSize='large' />
                            Market news </div>

                        <div className={className} >
                            <NewspaperIcon fontSize='large' />
                            Charts and visualisation </div>

                        <div className={className} >
                            <NewspaperIcon fontSize='large' />
                            Stock analysis </div>

                        <div className={className} >
                            <NewspaperIcon fontSize='large' />
                            Investment Plans  </div>
                    </div>

                </div>

                <div className="flex-[30%] card rounded-lg bg-white">
                    <div>
                        <div className="text-2xl font-semibold">Desno</div>
                        <br />
                        <div className="inline">
                            <b>812</b>INR
                            <p className="text-green-500 inline">+₹3,733 (3.17%) </p>Depth
                        </div>
                        <br />

                        <span className="border-b-2 border-black px-5">BUY</span>&nbsp;&nbsp;SELL
                        <br />
                        <button className="border-2 border-black rounded-2xl p-2 m-2 text-green-500">DELIVERY</button>
                        <button className="border-2 border-black rounded-2xl p-2 m-2 text-red-500">INTRADAY</button>
                        <br />
                        Qty NSE <input type="text" placeholder=" " className="rounded-lg m-2 text-xs p-2" />
                        <br />
                        Price Limit<input type="text" placeholder=" " className="rounded-lg m-2 text-xs p-2" />
                    </div>
                    <br />
                    <br />
                    <div className='card bg-purple-500'>

                        <div className="flex justify-center items-center h-100 bg-purple-500 mb-20">
                            <b><p className="m-0 text-center">BOOST YOUR INVESTMENTS</p></b>
                        </div>
                        <div className="flex justify-center items-center h-100 bg-purple-500 mb-20">
                            <b><p className="m-0 text-center">BOOST YOUR Capital Tech supports more on app than any other platform.</p></b>
                        </div>
                    </div>

                </div>
            </div>
            {/* chatbot */}
            <Chatbot />
        </div >
    )
}

export default DashboardPage;
