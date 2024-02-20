import CompanyDetailsPageNavbar from '../components/company_page_navbar';

const Dashboard = () => {
    return (
        <div className='pg bg-white]'>
            <CompanyDetailsPageNavbar />
            <br></br>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '70%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>

                    <div>

                    </div>
                    <div style={{ borderRadius: '20px', marginLeft: '20px', fontSize: '16px', padding: '12px' }}>
                        <b>Dashboard</b>
                        <br></br>
                        <input type="text" placeholder="Search for your issue " onChange={(e) => onSearch(e.target.value)} style={{ borderRadius: '12px', fontSize: '16px', padding: '8px' }} />
                        <button style={{ borderRadius: '12px', fontSize: '16px', padding: '8px' }} onClick={() => onSearch()}>My Tickets </button>
                    </div>

                    <div className="grid-container">
                        <div className="grid-item">
                            <h2>My Account</h2>
                            <p>KYC. Referral.Bank</p>
                        </div>
                        <div className="grid-item">
                            <h2>Stocks</h2>
                            <p>Orders - IPO-Holdings -
                                Demat - Charges</p>
                        </div>
                        <div className="grid-item">
                            <h2>Mutual funds</h2>
                            <p>Orders-SIP-Autopay - External Funds</p>
                        </div>
                        <div className="grid-item">
                            <h2>Build Portfolio</h2>
                            <p>Capital tech.Withdrawls.
                                Captal tech pay</p>
                        </div>
                        <div className="grid-item">
                            <h2>Most Visited Today</h2>
                            <p>Answers to Frequently Raised Questions</p>
                        </div>
                        <div className="grid-item">
                            <h2>FD’s</h2>
                            <p>About - orders - Taxation - Wihtdrawls</p>
                        </div>
                    </div>

                </div>




                <div style={{ flex: '30%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                    <div className='card'>
                        Desno<br></br>
                        <div style={{ display: 'inline' }}><b>812</b>INR<p style={{ color: 'green', display: 'inline' }}>+₹3,733 (3.17%) </p>Depth</div><br></br>

                        <span style={{ borderBottom: '1px solid #000', padding: '0 5px' }}>BUY</span>&nbsp;&nbsp;SELL
                        <br></br>
                        <button style={{ border: '1px solid #000', borderRadius: '8px', padding: '8px', margin: '10px', color: 'green' }}>DELIVERY</button>
                        <button style={{ border: '1px solid #000', borderRadius: '8px', padding: '8px', color: 'red' }}>INTRADAY</button>
                        <br></br>
                        Qty NSE <input type="text" placeholder=" " onChange={(e) => onSearch(e.target.value)} style={{ borderRadius: '12px', margin: '10px', fontSize: '10px', padding: '8px' }} />
                        <br></br>
                        Price Limit<input type="text" placeholder=" " onChange={(e) => onSearch(e.target.value)} style={{ borderRadius: '12px', margin: '10px', fontSize: '10px', padding: '8px' }} />
                    </div>
                    <br></br>
                    <br></br>
                    <div className='card' style={{ backgroundColor: '#D57DFF' }}>


                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', backgroundColor: '#D57DFF', marginBottom: '20px' }}>
                            <b><p style={{ margin: '0', textAlign: 'center' }}>BOOST YOUR INVESTMENTS</p>
                            </b>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', backgroundColor: '#D57DFF', marginBottom: '20px' }}>
                            <b><p style={{ margin: '0', textAlign: 'center' }}>BOOST YOUR Capital Tech supports more on app than any other platform.</p></b>
                        </div>
                    </div>





                </div>
            </div>



        </div >

    )
}

export default Dashboard