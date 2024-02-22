import { handleLogout } from '@/core/firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import { Dropdown } from 'antd';
import { Link } from "react-router-dom";
// import capitalTechLogo from '../../../assets/images/capitallogo.png';
const HomeNavbar = () => {
    const items = [
        { key: '1', label: (<Link to={'/'}>Home</Link>) },
        { key: '2', label: (<Link to={'/news'}>News</Link>) },
        { key: '6', label: (<Link to={'/stocks'}>Stock screen</Link>) },
        { key: '7', label: (<Link to={'/prediction'}>Stock Prediction</Link>) },
        { key: '3', label: (<Link to={'/profile'}>Profile</Link>) },
        { key: '4', label: (<Link to={'/dashboard'}>Dashboard</Link>) },
        { key: '5', label: (<div onClick={handleLogout}>Logout</div>) }
    ];
    return (
        <div className="w-full py-4 px-[6%] flex justify-between items-center">
            <div className="md:flex gap-6 items-center font-medium text-white text-lg font-ubuntu- hidden ">

                {/* <Link to={'/'} className=" cursor-pointer tap bg-white rounded-md px-3">
                    <img src={capitalTechLogo} className="object-cover h-12" />
                </Link> */}
                
                <Link to={'/'} className=" cursor-pointer tap">home</Link>

                <Link to={'/news'} className=" cursor-pointer tap">News</Link>

                <Link to={'/stocks'} className=" cursor-pointer tap">
                    Stock screen
                </Link>

                <Link to={'/prediction'} className=" cursor-pointer tap">
                    Stock Prediction
                </Link>
                <Link to={'/info'} className=" cursor-pointer tap">Tutorial</Link>

            </div>
            <div className='py-2 px-[3%] flex justify-end items-center'>
                <div>
                    <Dropdown menu={{ items }} placement="bottomRight">
                        <MenuIcon fontSize='large' />
                    </Dropdown>
                </div>
            </div>

            {/* mobile menu */}
            <div className='w-full py-2 px-[3%] flex justify-end items-center md:hidden'>
                <div>
                    <Dropdown menu={{ items }} placement="bottomRight">
                        <MenuIcon fontSize='large' />
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar