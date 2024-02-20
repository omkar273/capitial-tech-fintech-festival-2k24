import { Avatar, Dropdown } from 'antd';
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
    const items = [
        { key: '1', label: (<Link to={'/profile'}>Profile</Link>) },
        { key: '2', label: (<Link to={'/profile'}>Logout</Link>) }
    ];
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

                    <Dropdown menu={{ items }} placement="bottomRight">
                        <Avatar style={{ verticalAlign: 'middle' }} className='bg-primary-400 cursor-pointer' size="large" gap={10} >
                            {'O'}
                        </Avatar>
                    </Dropdown>

                </div>
            </div>
        </div>

    )
}

export default DashboardNavbar