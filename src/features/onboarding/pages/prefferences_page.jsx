import Spacer from "@/core/components/spacer";

const PrefferencesPage = () => {
    return (
        <div className="gr-pg p-4 md:p-12 flex gap-5 h-max">
            <div className="card bg-white">Which type of trading you want to invest in?

                <Spacer height={20} />
                <div className="half-line-effect" style={{ position: 'relative', width: '100%', height: '4px', background: 'linear-gradient(to right, #36FFDB 50%, #3498db 50%)' }}><div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent 50%, #D9D9D9 50%)', animation: 'half-line-animation 2s linear infinite' }}></div></div>
                <div className="flex gap-4">
                    <div className="card">
                        STOCKS
                    </div>
                    <div className="card">
                        FOREX
                    </div>
                    <div className="card">
                        FUNDS
                    </div>
                    <div className="card">
                        BONDS
                    </div>

                </div>




            </div>

            <div className="card bg-white">What is your trading level ?

                <Spacer height={20} />
                <div className="half-line-effect" style={{ position: 'relative', width: '100%', height: '4px', background: 'linear-gradient(to right, #36FFDB 50%, #3498db 50%)' }}><div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent 50%, #D9D9D9 50%)', animation: 'half-line-animation 2s linear infinite' }}></div></div>
                <div className="flex gap-4">
                    <div className="card">
                        BEGINNER
                    </div>
                    <div className="card">
                        INTERMEDIATE
                    </div>
                    <div className="card">
                        PROFESSIONAL
                    </div>
                </div>

            </div>

            <Spacer height={20} />

            <div className="flex">

                <div className="card bg-white">Select Companies youre interested in ?

                    <Spacer height={20} />
                    <div className="half-line-effect" style={{ position: 'relative', width: '100%', height: '4px', background: 'linear-gradient(to right, #36FFDB 50%, #3498db 50%)' }}><div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent 50%, #D9D9D9 50%)', animation: 'half-line-animation 2s linear infinite' }}></div></div>
                    <div className="flex gap-4">
                        <div className="card">
                            TATA MOTORS LTD
                        </div>
                        <div className="card">
                            ULTRATECH
                        </div>
                        <div className="card">
                            ZOMATO
                        </div>
                        <div className="card">
                            INDIAN RAILWAYS FIN...
                        </div>
                        <div className="card">
                            YES BANK                        </div>

                    </div>




                </div>

                <div className="card bg-white">Select your investment period

                    <Spacer height={20} />
                    <div className="half-line-effect" style={{ position: 'relative', width: '100%', height: '4px', background: 'linear-gradient(to right, #36FFDB 50%, #3498db 50%)' }}><div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, transparent 50%, #D9D9D9 50%)', animation: 'half-line-animation 2s linear infinite' }}></div></div>
                    <div className="flex gap-4">
                        <div className="card">
                            SHORT TERM
                        </div>
                        <div className="card">
                            LONG TERM
                        </div>
                        <div className="card">
                            HYBRID
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default PrefferencesPage;