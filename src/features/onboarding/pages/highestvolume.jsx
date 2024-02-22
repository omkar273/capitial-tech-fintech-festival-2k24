import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";

const AboutPage = () => {
    const info = [
        "BSE (Bombay Stock Exchange) is the oldest stock exchange in Asia, located in Mumbai, Maharashtra. It was established in 1875 and is known for its benchmark index, the S&P BSE SENSEX, which is widely followed in India and abroad.NSE(National Stock Exchange of India) is located in Mumbai as well and was established in 1992. It is the leading stock exchange in India in terms of total and average daily turnover for equity shares.NSE's benchmark index is the NIFTY 50, which represents the weighted average of 50 of the largest and most liquid Indian companies.",

        "equity: Equity, also known as shares or stocks, represents ownership in a company. When you buy shares of a company, you become a shareholder and have a degree of ownership in that company.Broker: A broker is an intermediary who connects investors to the exchange and executes trades on their behalf in exchange for a small commission.Bull market: A bull market is a period in which the prices of stocks are generally rising",

        " volatility: Volatility refers to the rate of price fluctuations of a stock. A highly volatile stock experiences daily up and down movements in its price.SEBI (Securities and Exchange Board of India) is the regulatory body for the Indian stock market.The Indian economy is one of the fastest-growing economies in the world, and the stock market is an important indicator of its health and growth. The Securities and Exchange Board of India (SEBI) is the regulatory body responsible for supervising and regulating the Indian stock market."
    ]
    return (
        <div className="gr-pg">
            <CompanyDetailsPageNavbar showBottombar={false} />
            <p className="w-full text-center p-5 text-4xl text-white font-semibold">About</p>
            <div className="w-full md:mt-8 p-4">
                {info.map((info, i) => <div className="bg-white card mb-4">
                    {info}
                </div>)}
            </div>
        </div>

    )
}

export default AboutPage;