import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";

const categories = [
    "Alcohol beverages",
    "Air Transport Service",
     "Agro chemicals",
    "Aerospace &amp; Defence",
    "Auto Ancillaries",
    "Banks",
    "Bearings",
    "Cables",
    "Capital Goods - Electrical Equipment",
    "Capital Goods - Non Electrical Equipment",
    "Castings, Forgings, and Fasteners",
    "Cement",
    "Cement - Products",
    "Ceramic Products",
    "Chemicals",
    "Computer Education",
    "Construction",
    "Consumer Durables",
    "Credit Rating Agencies",
    "Crude Oil & Natural Gas",
    "Diamond, Gems & Jewellery",
    "Diversified",
    "Diversified"
];
const categoryBoxes = categories.map((category, index) => (
    <div key={index} style={{ display: 'inline-block', borderRadius: '10px', border: '2px solid #0077cc', padding: '10px', color: '#0077cc', margin: '5px' }}>
        {category}
    </div>
));

const StockScreenPage = () => {
    return (
        <div className='pg bg-white]'>
            <CompanyDetailsPageNavbar />
            <br></br>
            <div className='card'>
                <div style={{ display: 'flex' }}>

                    <br></br>
                    <div className='blackBorder' style={{ flex: '70%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderColor: 'black', border: '1px solid black' }}>

                        <b><p style={{ fontSize: '25px' }}>Stock Screens</p>  </b><br></br>
                        <div className='blackBorder card' style={{ border: '1px solid black' }}>
                            Popular Themes<br></br>
                            Popular Investing Themes

                            <div style={{ display: 'flex' }}>
                                <div className='blackBorder' style={{ flex: 1, padding: '20px', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', borderColor: 'black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Low on 10 years earnings <br></br>
                                    Graham liked to Value stocks based on average ear...
                                </div>


                                <div style={{ flex: 1, padding: '20px', margin: '10px', borderColor: 'black', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Capacity Expansion <br></br>
                                    Companies Undergoing major capacity Expansion...
                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Debt Reduction   <br></br>
                                    Companies with expansion
                                </div>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Companies creating new high  <br></br>
                                    Companies with current price around 52 week high
                                </div>


                                <div style={{ flex: 1, padding: '20px', margin: '10px', border: '1px solid #ddd', borderColor: 'black', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Growth Without Dilution<br></br>
                                    Companies with less than 10% dilution over 10 years....
                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>FII buying   <br></br>
                                    FII buying
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className='blackBorder card' style={{ border: '1px solid black' }}>

                            Popular Formulas
                            Screening formulas Based on book

                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Piotroski Scan   <br></br>
                                    Companies with piotroski Score of 9 which reflects....
                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Magic Formula    <br></br>
                                    Based on Famous Formula
                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Coffee Can Portfolio    <br></br>
                                    based on the book by Saurabh Mukherjee
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div className='blackBorder card' style={{ border: '1px solid black' }}>
                            Price or Volume
                            Screens based on Price And volume

                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Darvas Scan     <br></br>
                                    Within 10% of 52w High, 100% of 52 w Low.....                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Golden cross over      <br></br>
                                    Based on Famous Formula
                                </div>


                                <div style={{ flex: 1, padding: '20px', borderColor: 'black', margin: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    Bearish Crossovers   <br></br>
                                    50 day moving average cut the 200 day MA from ...
                                </div>
                            </div>
                        </div>

                    </div>
                    &#160;&#160;
                    <div className='card blackBorder' style={{ flex: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid black' }}>
                        <b><p style={{ fontSize: '25px' }}>Browse sectors</p></b>
                        <br />
                        {/* Add more buttons as needed */}
                        <div>
                            {categoryBoxes}
                        </div>




                    </div>







                </div>

            </div>

        </div>

    )
}

export default StockScreenPage