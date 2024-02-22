import Chatbot from "@/core/components/chatbot";
import Spacer from "@/core/components/spacer";
import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";
import axios from 'axios';
import { useEffect, useState } from "react";

const NewsFeedPage = () => {


    const [newsFeed, setnewsFeed] = useState([])

    const getData = async () => {
        try {
            const res = await axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo')
            console.log(res.data);
            if (res.status === 200 && res.data.feed) {
                setnewsFeed(res.data.feed);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData();
    }, [])


    return (

        <div className="pg">


            <CompanyDetailsPageNavbar showBottombar={false} />
            <div className="p-8 ">
                {newsFeed.length == 0 && (
                    <div className="min-h-[80vh] flex justify-center items-center text-3xl font-semibold font-ubuntu">
                        Loading news...
                    </div>
                )

                }
                {newsFeed.map((news, index) => {
                    return <div key={index} className="rounded-lg overflow-hidden shadow-lg p-6 bg-white md:flex gap-4 mb-4" >

                        <div className="W-[30%] flex-[30%] flex justify-center items-center md:hidden">
                            <img src={news.banner_image} className="  object-cover bg-cover" />
                        </div>

                        <div className="p-4 flex-grow">
                            <p className="text-gray-500 text-base ">Source: {news.source}, {'24hrs'} ago</p>

                            <h2 className="text-2xl font-bold ">
                                {news.title}
                            </h2>
                            <Spacer height={25} />
                            <p className="text-gray-700 text-sm mb-2">{news.summary}</p>

                            <p className="text-gray-500 text-xs">Published on:</p>
                            <p className="text-gray-500 text-xs">authors: {news.authors}</p>

                            <p className="text-gray-500 text-xs">Source :  {news.source}</p>


                            <Spacer height={25} />
                            <a href={news.url} className=" text-blue-500 underline" target="_blank" >read more...</a>
                            <Spacer height={10} />

                            <div className="flex gap-2 flex-wrap">
                                {news.topics.map((topic, index) => <div key={index} className="card justify-center items-center flex bg-purple-200">
                                    {topic.topic + ' '}{(topic.relevance_score * 100).toFixed(0)}%
                                </div>)}

                            </div>
                            <Spacer height={10} />
                            <div className="card justify-center items-center flex bg-purple-200">
                                {"sentiment score" + ' '}{(news.overall_sentiment_score * 100).toFixed(0)}% {"(" + news.overall_sentiment_label + ")"}
                            </div>

                        </div>

                        <div className="W-[30%] flex-[30%] md:flex justify-center items-center hidden ">
                            <img src={news.banner_image} className="  object-cover bg-cover" />
                        </div>
                    </div>
                })}
            </div>
            {/* chatbot */}
            <Chatbot />
        </div>
    )
}
export default NewsFeedPage