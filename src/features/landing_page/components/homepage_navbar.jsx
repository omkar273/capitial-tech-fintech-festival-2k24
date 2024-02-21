import { handleLogout } from '@/core/firebase/auth';
import { Avatar, Dropdown } from 'antd';
import { Link } from "react-router-dom";

const HomeNavbar = () => {
    const items = [
        { key: '1', label: (<Link to={'/profile'}>Profile</Link>) },
        { key: '2', label: (<Link to={'/dashboard'}>Dashboard</Link>) },
        { key: '3', label: (<div onClick={handleLogout}>Logout</div>) }
    ];
    return (
        <div className="w-full py-4 px-[6%] flex justify-between items-center">
            <div className="flex gap-6 items-center  text-lg font-fira-sans">
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
    )
}

export default HomeNavbar