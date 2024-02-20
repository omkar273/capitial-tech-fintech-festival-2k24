import { Avatar } from 'antd';
import { Link } from "react-router-dom";

const CompanyDetailsPageNavbar = () => {
    return (
        <div className="sticky top-0 left-0  w-full bg-white z-50">
            <div className="w-full py-0 px-[3%] flex justify-between items-center">
                <div className="flex gap-6 items-center text-gray-800  font-fira-sans">
                    <Link to={'/'} className=" cursor-pointer tap">
                        <img src="../../../assets/images/capitallogo.png" className="object-cover h-12" />
                    </Link>
                    <Link to={'/'} className=" cursor-pointer tap">home</Link>
                    <Link to={'/'} className=" cursor-pointer tap">product</Link>
                    <Link to={'/'} className=" cursor-pointer tap">support</Link>
                    <Link to={'/'} className=" cursor-pointer tap">about</Link>
                </div>
                <Avatar style={{ verticalAlign: 'middle' }} className='bg-primary-400 cursor-pointer' size="large" >
                    {'O'}
                </Avatar>

            </div>
            <div className="w-full p-2 bg-purple-300 flex items-center gap-7 text-[0.75rem] font-semibold font-open-sans overflow-x-scroll break-before-avoid whitespace-nowrap">
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
        </div >

    )
}

export default CompanyDetailsPageNavbar