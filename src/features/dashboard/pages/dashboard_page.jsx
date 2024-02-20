import DashboardNavbar from "../components/dashboard_navbar";

const DashboardPage = () => {
    const grid_item = ' p-5 rounded-xl border-2 cursor-pointer bg-purple-400 btn'
    return (
        <div className='pg'>
            <DashboardNavbar />
            <div className="md:flex p-4 gap-4 pb-12">
                <div className="flex-grow rounded-lg p-5 card bg-white">

                    <p className="rounded-3xl font-bold text-3xl ml-8 p-4">
                        Dashboard
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className={grid_item} >
                            <h2>Profile</h2>
                            <p>KYC. Referral.Bank</p>
                        </div>
                        <div className={grid_item} >
                            <h2>Stocks</h2>
                            <p>Orders - IPO-Holdings - Demat - Charges</p>
                        </div>
                        <div className={grid_item} >
                            <h2>Mutual funds</h2>
                            <p>Orders-SIP-Autopay - External Funds</p>
                        </div>
                        <div className={grid_item} >
                            <h2>Build Portfolio</h2>
                            <p>Capital tech.Withdrawls. Captal tech pay</p>
                        </div>
                        <div className={grid_item} >
                            <h2>Most Visited Today</h2>
                            <p>Answers to Frequently Raised Questions</p>
                        </div>
                        <div className={grid_item} >
                            <h2>FD's</h2>
                            <p>About - orders - Taxation - Wihtdrawls</p>
                        </div>
                    </div>

                </div>

                <div className="flex-30 card rounded-lg bg-white">
                    <div>
                        <p className="text-2xl font-semibold">Desno</p>
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
        </div >
    )
}

export default DashboardPage;
