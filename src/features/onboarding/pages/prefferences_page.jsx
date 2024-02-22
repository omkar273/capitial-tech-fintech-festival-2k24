import Spacer from "@/core/components/spacer";
import HomeNavbar from "@/features/landing_page/components/homepage_navbar";

const PrefferencesPage = () => {
    return (
        <div className="gr-pg ">
            <HomeNavbar />
            <div className="p-4 grid grid-cols-2 gap-10">

                {/* card1 */}
                <div className="p-4 bg-white rounded-lg ">
                    <p className="text-wrap text-lg font-semibold">1. Which type of trading you want to invest in </p>
                    <Spacer height={15} />
                    <div className="flex w-full">
                        <div className="h-1 bg-green-600 w-full"></div>
                        <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                    <Spacer height={30} />
                    <div className="flex gap-3 flex-wrap">
                        <button className="card bg-blue-400 text-white font-semibold">Stocks</button>
                        <button className="card bg-blue-400 text-white font-semibold">Forex </button>
                        <button className="card bg-blue-400 text-white font-semibold">Funds</button>
                        <button className="card bg-blue-400 text-white font-semibold">Bonds</button>
                    </div>
                </div>
                {/* card2 */}
                <div className="p-4 bg-white rounded-lg ">
                    <p className="text-wrap text-lg font-semibold">What is your trading level ? </p>
                    <Spacer height={15} />
                    <div className="flex w-full">
                        <div className="h-1 bg-green-600 w-full"></div>
                        <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                    <Spacer height={30} />
                    <div className="flex gap-3 flex-wrap">
                        <button className="card bg-blue-400 text-white font-semibold">Beginner </button>
                        <button className="card bg-blue-400 text-white font-semibold">Intermediate </button>
                        <button className="card bg-blue-400 text-white font-semibold">Professional</button>

                    </div>
                </div>
                {/* card1 */}
                <div className="p-4 bg-white rounded-lg ">
                    <p className="text-wrap text-lg font-semibold">Select Companies youre interested in ?</p>
                    <Spacer height={15} />
                    <div className="flex w-full">
                        <div className="h-1 bg-green-600 w-full"></div>
                        <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                    <Spacer height={30} />
                    <div className="flex gap-3 flex-wrap">
                        <button className="card bg-blue-400 text-white font-semibold">TCS</button>
                        <button className="card bg-blue-400 text-white font-semibold">Reliance </button>
                        <button className="card bg-blue-400 text-white font-semibold">Adani</button>
                        <button className="card bg-blue-400 text-white font-semibold">Other</button>
                    </div>
                </div>
                {/* card1 */}
                <div className="p-4 bg-white rounded-lg ">
                    <p className="text-wrap text-lg font-semibold">Select your investment period </p>
                    <Spacer height={15} />
                    <div className="flex w-full">
                        <div className="h-1 bg-green-600 w-full"></div>
                        <div className="h-1 bg-gray-200 w-full"></div>
                    </div>
                    <Spacer height={30} />
                    <div className="flex gap-3 flex-wrap">
                        <button className="card bg-blue-400 text-white font-semibold">Short term</button>
                        <button className="card bg-blue-400 text-white font-semibold">Long term </button>
                        <button className="card bg-blue-400 text-white font-semibold">Hybrid</button>
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center ">
                <a href="/" className=" w-[70%] text-center my-8 p-4 text-2xl bg-blue-500 rounded-md text-white btn">
                    Submit
                </a>
            </div>
        </div>
    )
}

export default PrefferencesPage