import { Link } from "react-router-dom"
import { Avatar } from 'antd';
const HomeNavbar = () => {
    return (
        <div className="w-full py-4 px-[6%] flex justify-between items-center">
            <div className="flex gap-6 items-center  text-lg font-fira-sans">
                <Link to={'/'} className=" cursor-pointer tap">home</Link>
                <Link to={'/'} className=" cursor-pointer tap">product</Link>
                <Link to={'/'} className=" cursor-pointer tap">support</Link>
                <Link to={'/'} className=" cursor-pointer tap">about</Link>
            </div>
            <div className="gap-6 items-center text-black text-base font-fira-sans md:flex hidden">
                <Avatar style={{ verticalAlign: 'middle' }} className='bg-primary-400 cursor-pointer' size="large" >
                    {'O'}
                </Avatar>

            </div>
        </div>
    )
}

export default HomeNavbar