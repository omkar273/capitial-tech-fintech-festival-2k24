import capitalTechLogo from "../../assets/images/capitallogo.png"
const Footer = () => {
    return (
        <div className='w-full bg-white py-3 px-[4%] pb-12'>
            <img src={capitalTechLogo} />
            <p className="text-base text-black font-[600] py-1">
                Stock analysis and screening tool
            </p>
            <p className="text-[0.875rem] text-">
                Capital Tech Pvt Ltd @2024
            </p>
        </div>
    )
}

export default Footer