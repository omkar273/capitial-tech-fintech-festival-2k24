import { handleLogout } from '@/core/firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Dropdown } from 'antd';
import { Link } from "react-router-dom";
import capitalTechLogo from "../../../assets/images/capitallogo.png";

const CompanyDetailsPageNavbar = ({ showBottombar = true }) => {
    const items = [
        { key: '1', label: (<Link to={'/'}>Home</Link>) },
        { key: '2', label: (<Link to={'/news'}>News</Link>) },
        { key: '6', label: (<Link to={'/stocks'}>Stock screen</Link>) },
        { key: '3', label: (<Link to={'/profile'}>Profile</Link>) },
        { key: '4', label: (<Link to={'/dashboard'}>Dashboard</Link>) },
        { key: '5', label: (<div onClick={handleLogout}>Logout</div>) }
    ];


    const scrollToSection = (id) => {
        const targetElement = document.getElementById(id);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-0 left-0  w-full bg-white z-50">
            <div className="w-full  px-[3%] md:flex justify-between items-center py-3 hidden">
                <div className="flex gap-6 items-center text-gray-800 text-base font-fira-sans md:text-xl">
                    <Link to={'/'} className=" cursor-pointer tap">
                        <img src={capitalTechLogo} className="object-cover h-12" />
                    </Link>
                    <Link to={'/'} className=" cursor-pointer tap">home</Link>
                    <Link to={'/news'} className=" cursor-pointer tap">News</Link>

                    <Link to={'/stocks'} className=" cursor-pointer tap">
                        Stock screen
                    </Link>
                    <Link to={'/prediction'} className=" cursor-pointer tap">
                        Stock Prediction
                    </Link>
                    <Link to={'/info'} className=" cursor-pointer tap">about</Link>
                </div>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <Avatar style={{ verticalAlign: 'middle' }} className='bg-primary-400 cursor-pointer' size="large" gap={10} >
                        {'O'}
                    </Avatar>
                </Dropdown>

            </div>
            {/* mobile menu */}
            <div className='w-full py-2 px-[3%] flex justify-between items-center md:hidden'>
                <Link to={'/'} className=" cursor-pointer tap">
                    <img src={capitalTechLogo} className="object-cover h-12" />
                </Link>
                <div>
                    <Dropdown menu={{ items }} placement="bottomRight">
                        <MenuIcon fontSize='large' />
                    </Dropdown>
                </div>
            </div>

            {showBottombar && <div className="w-full p-2 bg-purple-300 flex items-center gap-7 text-[0.75rem] font-semibold font-open-sans overflow-x-scroll break-before-avoid whitespace-nowrap">
                <button className="tap" onClick={() => scrollToSection('Overview')} >Overview</button>

                <button className="tap" onClick={() => scrollToSection('About')}>About</button>

                <button className="tap" onClick={() => scrollToSection('Candle chart')}>Candle chart</button>

                <button className="tap" onClick={() => scrollToSection('Profit & Loss')}>Profit & Loss</button>

                <button className="tap" onClick={() => scrollToSection('Balance sheet')}>Balance sheet</button>

                <button className="tap" onClick={() => scrollToSection('Cash flow')}>Cash flow</button>

                <button className="tap" onClick={() => scrollToSection('Income statement')}>Income statement</button>

            </div>}

        </div >

    )
}

export default CompanyDetailsPageNavbar