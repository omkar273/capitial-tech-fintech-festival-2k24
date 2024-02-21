import Spacer from "@/core/components/spacer"
import DashboardNavbar from "@/features/dashboard/components/dashboard_navbar"

const PortfolioPage = () => {
    return (
        <div className="pg">
            <DashboardNavbar />
            <div className="md:flex p-4 gap-4 pb-12 w-full">
                <div className="flex-grow rounded-lg p-5 card bg-white">

                </div>
                <div className="w-[30%] card rounded-lg bg-white">

                    {/* heading */}
                    <div className="w-full flex justify-between items-center font-[600]">
                        <p className="text-xl font-[600]">Your Investment</p>
                        <p className="text-blue-600 text-base cursor-pointer">Dashboard</p>
                    </div>
                    <Spacer height={15} />

                    {/* investment */}
                    <div className="w-full flex justify-between items-center font-[600] border p-4 rounded-md">
                        <div>
                            <p className="text-base text-green-500">+₹11,202</p>
                            <p className="text-xs font-medium cursor-pointer">Total Returns</p>
                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹11,20,302</p>
                            <p className="text-xs font-medium text-end">Current</p>
                        </div>
                    </div>
                    <Spacer height={35} />


                    {/* watchlist */}
                    <div className="w-full flex justify-between items-center font-[600]">
                        <p className="text-lg  font-[600]">WatchList</p>
                        <p className="text-blue-600 text-base cursor-pointer">View all</p>
                    </div>
                    <Spacer height={15} />
                    <div className="w-full flex justify-between items-center font-[600] border p-4 rounded-md">
                        <div>
                            <p className="text-base text-green-500">Tata Communications</p>
                            <p className="text-xs font-medium cursor-pointer">Total Returns</p>
                        </div>
                        <div>
                            <p className="text-base cursor-pointer">₹11,20,302</p>
                            <p className="text-xs font-medium text-end">Current</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage