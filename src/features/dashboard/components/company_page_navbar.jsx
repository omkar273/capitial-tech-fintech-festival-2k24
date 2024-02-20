import { handleLogout } from "@/core/firebase/auth"
import { Link } from "react-router-dom"

const CompanyDetailsPageNavbar = () => {
    return (
        <div className="sticky top-0 left-0  w-full bg-white z-50">
            <div className="w-full py-2 px-[3%] flex justify-between items-center">
                <div className="flex gap-6 items-center text-gray-800 text-lg font-fira-sans">
                    <Link to={'/'} className=" cursor-pointer tap">
                        <img src="/src/assets/images/capitallogo.png" className="object-cover h-12" />
                    </Link>
                    <Link to={'/'} className=" cursor-pointer tap">home</Link>
                    <Link to={'/'} className=" cursor-pointer tap">product</Link>
                    <Link to={'/'} className=" cursor-pointer tap">support</Link>
                    <Link to={'/'} className=" cursor-pointer tap">about</Link>
                </div>
                <div className="gap-6 items-center text-black text-base font-fira-sans md:flex hidden">
                    <div onClick={handleLogout}
                        className="tap p-5 font-semibold border-blue-500 text-white w-8 h-8 flex justify-center items-center rounded-full  bg-purple-500">o</div>

                </div>
            </div>
            <div className="w-full p-2 bg-purple-300 flex items-center gap-7 text-[0.85rem] font-semibold font-open-sans overflow-x-scroll break-before-avoid whitespace-nowrap">
                <button className="tap">Charts</button>
                <button className="tap">Analysis</button>
                <button className="tap">Balance sheets</button>
                <button className="tap">Peers</button>
                <button className="tap">Visualized data</button>
                <button className="tap">Profit & Loss</button>
                <button className="tap">Ratios</button>
                <button className="tap">Cash Flow</button>
                <button className="tap">Documents</button>

            </div>
        </div>

    )
}

export default CompanyDetailsPageNavbar