import InvestmentCard from "../components/investing_card";

const PrefferencesPage = () => {
    return (
        <div className="gr-pg p-4 md:p-12">
            <div className="grid grid-cols-2 gap-6">
                <InvestmentCard heading={'Which type of trading you want to invest in?'} />

            </div>
        </div>
    )
}

export default PrefferencesPage;