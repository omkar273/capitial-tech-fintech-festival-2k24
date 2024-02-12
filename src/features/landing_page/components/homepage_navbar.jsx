
const HomeNavbar = () => {
    return (
        <div className="w-full py-4 px-[6%] flex justify-between items-center">
            <div className="flex gap-6 items-center text-white text-lg font-fira-sans">
                <p className=" cursor-pointer tap">home</p>
                <p className=" cursor-pointer tap">product</p>
                <p className=" cursor-pointer tap">support</p>
                <p className=" cursor-pointer tap">about</p>
            </div>
            <div className="gap-6 items-center text-black text-base font-fira-sans md:flex hidden">
                <button className="tap px-3 py-1 rounded-lg border-black  bg-white">Login</button>
                <button className="tap px-3 py-1 rounded-lg border-black  bg-white">Learn More</button>
            </div>
        </div>
    )
}

export default HomeNavbar