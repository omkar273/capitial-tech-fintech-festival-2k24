import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";
import { Link } from "react-router-dom";

const TutorialPage = () => {
    const info = [
        "BSE (Bombay Stock Exchange) is the oldest stock exchange in Asia, located in Mumbai, Maharashtra. It was established in 1875 and is known for its benchmark index, the S&P BSE SENSEX, which is widely followed in India and abroad.NSE(National Stock Exchange of India) is located in Mumbai as well and was established in 1992. It is the leading stock exchange in India in terms of total and average daily turnover for equity shares.NSE's benchmark index is the NIFTY 50, which represents the weighted average of 50 of the largest and most liquid Indian companies.",

        "equity: Equity, also known as shares or stocks, represents ownership in a company. When you buy shares of a company, you become a shareholder and have a degree of ownership in that company.Broker: A broker is an intermediary who connects investors to the exchange and executes trades on their behalf in exchange for a small commission.Bull market: A bull market is a period in which the prices of stocks are generally rising",

        " volatility: Volatility refers to the rate of price fluctuations of a stock. A highly volatile stock experiences daily up and down movements in its price.SEBI (Securities and Exchange Board of India) is the regulatory body for the Indian stock market.The Indian economy is one of the fastest-growing economies in the world, and the stock market is an important indicator of its health and growth. The Securities and Exchange Board of India (SEBI) is the regulatory body responsible for supervising and regulating the Indian stock market.",

        "BSE is the first stock exchange in the country which obtained permanent recognition (in 1956) from the Government of India under the Securities Contracts (Regulation) Act 1956. BSE's pivotal and pre-eminent role in the development of the Indian capital market is widely recognized. It migrated from the open outcry system to an online screen-based order driven trading system in 1995. Earlier an Association Of Persons (AOP), BSE is now a corporatised and demutualised entity incorporated under the provisions of the Companies Act, 1956, pursuant to the BSE (Corporatisation and Demutualisation) Scheme, 2005 notified by the Securities and Exchange Board of India (SEBI). With demutualisation, BSE has two of world's best exchanges, Deutsche Börse and Singapore Exchange, as its strategic partners.",

        "The BSE Index, S&P BSE SENSEX, is India's first stock market index that enjoys an iconic stature and is tracked worldwide. It is an index of 30 stocks representing 12 major sectors. The S&P BSE SENSEX is constructed on a 'free-float' methodology, and is sensitive to market sentiments and market realities. Apart from the S&P BSE SENSEX, BSE offers 21 indices, including 12 sectoral indices. BSE has entered into an index cooperation agreement with Deutsche Börse. This agreement has made S&P BSE SENSEX and other BSE indices available to investors in Europe and America. Moreover, Barclays Global Investors (BGI), the global leader in ETFs through its iSharesÂ® brand, has created the 'iSharesÂ® S&P BSE SENSEX India Tracker' which tracks the S&P BSE SENSEX. The ETF enables investors in Hong Kong to take an exposure to the Indian equity market.",

        "BSE provides an efficient and transparent market for trading in equity, debt instruments and derivatives. It has a nation-wide reach with a presence in more than 359 cities and towns of India. BSE has always been at par with the international standards. The systems and processes are designed to safeguard market integrity and enhance transparency in operations. BSE is the first exchange in India and the second in the world to obtain an ISO 9001:2000 certification. It is also the first exchange in the country and second in the world to receive Information Security Management System Standard BS 7799-2-2002 certification for its BSE On-line Trading System (BOLT).",


        "BSE continues to innovate. In recent times, it has become the first national level stock exchange to launch its website in Gujarati and Hindi to reach out to a larger number of investors. It has successfully launched a reporting platform for corporate bonds in India christened the ICDM or Indian Corporate Debt Market and a unique ticker-cum-screen aptly named 'BSE Broadcast' which enables information dissemination to the common man on the street.",

        "In 2006, BSE launched the Directors Database and ICERS (Indian Corporate Electronic Reporting System) to facilitate information flow and increase transparency in the Indian capital market. While the Directors Database provides a single-point access to information on the boards of directors of listed companies, the ICERS facilitates the corporates in sharing with BSE their corporate announcements."

    ]
    return (
        <div className="gr-pg">
            <CompanyDetailsPageNavbar showBottombar={false} />
            <p className="w-full text-center p-5 text-4xl text-white font-semibold">Tutorial</p>
            <div className="w-full md:mt-8 p-4">
                {info.map((info, i) => <div className="bg-white card mb-4">
                    {info}
                </div>)}
            </div>

            <Link to={'/'} className="fixed p-4  text-white font-semibold tap card bg-blue-500 bottom-12 right-12 z-50">
                go to homepage
            </Link>
        </div>

    )
}

export default TutorialPage;