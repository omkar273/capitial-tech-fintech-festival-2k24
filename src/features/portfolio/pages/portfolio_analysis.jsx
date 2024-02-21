import Spacer from "@/core/components/spacer";
import DashboardNavbar from "@/features/dashboard/components/dashboard_navbar";
import { Tabs } from 'antd';
import PortfolioBuilder from "../components/stock_analysis";
import TaxationPage from './tax_page';

const PortfolioPage = () => {
    const items = [
        {
            key: '1',
            label: 'Portfolio Analysis',
            children: <PortfolioBuilder />,
        },
        {
            key: '2',
            label: 'Tax calculation',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Smart Tax optimization',
            children: <TaxationPage />,
        },
    ];
    return (
        <div className="pg">
            <DashboardNavbar />
            <div className="md:flex p-4 gap-4 pb-12 w-full">
                <div className="flex-grow rounded-lg p-5 card bg-white">
                    <Tabs defaultChecked='1' items={items} size="large" />

                </div>


                {/* right hand pane */}
                <div className="md:w-[30%] card rounded-lg bg-white overflow-y-scroll h-screen">

                    {/* heading */}
                    <div className="w-full flex justify-between items-center font-[500]">
                        <p className="text-xl font-[600]">Your Investment</p>
                        <p className="text-blue-600 text-base cursor-pointer">Dashboard</p>
                    </div>
                    <Spacer height={15} />

                    {/* investment */}
                    <div className="w-full flex justify-between items-center font-[600] border p-4 rounded-md">
                        <div>
                            <p className="text-base text-green-500">+₹11,202</p>
                            <p className="text-xs font-normal cursor-pointer">Total Returns</p>
                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹1,20,302</p>
                            <p className="text-xs font-normal text-end">Current</p>
                        </div>
                    </div>
                    <Spacer height={35} />


                    {/* watchlist */}
                    <div className="w-full flex justify-between items-center font-[600]">
                        <p className="text-lg  font-[600]">WatchList</p>
                        <p className="text-blue-600 text-base cursor-pointer">View all</p>
                    </div>
                    <Spacer height={15} />
                    <div className="w-full flex justify-between items-center font-[500] border p-4 rounded-md mb-3">
                        <div>
                            <p className="text-base">Tata Communications</p>

                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹1,795.20</p>
                            <p className="text-xs font-thin text-red-500 text-end">-2.66(1.46%)</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center font-[500] border p-4 rounded-md mb-3">
                        <div>
                            <p className="text-base">Muthoot Finance</p>

                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹1,324.20</p>
                            <p className="text-xs font-thin text-red-500 text-end">-16.40(0.60%)</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center font-[500] border p-4 rounded-md mb-3">
                        <div>
                            <p className="text-base">Hitachi Energy</p>

                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹2,739.15</p>
                            <p className="text-xs font-thin text-red-500 text-end">-2.66(1.46%)</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center font-[500] border p-4 rounded-md mb-3">
                        <div>
                            <p className="text-base">Tata Communications</p>

                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹,1795.20</p>
                            <p className="text-xs font-normal text-red-500 text-end">-2.66(1.46%)</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center font-[500] border p-4 rounded-md mb-3">
                        <div>
                            <p className="text-base">Muthoot Finance</p>

                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹,1795.20</p>
                            <p className="text-xs font-normal text-red-500 text-end">-2.66(1.46%)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage