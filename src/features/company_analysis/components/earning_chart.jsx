import Spacer from '@/core/components/spacer';
import axios from 'axios';
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const EarningsChart = ({ chartTitle = '', url = '' }) => {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true);


    const durationTypeList = ["Annual", "Quarterly"]
    const [durationType, setdurationType] = useState(durationTypeList[0])
    const [dataSource, setdataSource] = useState({})
    const getData = async () => {
        try {
            const res = await axios.get(url);
            console.log(res);
            if (res.status === 200) {
                setdata(res.data.annualEarnings)
                console.log('setting data');
                console.log(res.data.annualEarnings);
                setdataSource(res.data)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="card bg-white py-8 px-6 w-full">
            <div className='flex items-center justify-between'>
                <div className='w-full flex items-center justify-between'>
                    <p className='inline-flex text-3xl font-fira-sans '>
                        {(durationType === 'Annual') ? 'Annual ' : 'Quarterly '} {chartTitle}
                    </p>

                    <div className='inline-flex '>
                        {durationTypeList.map((type, index) =>
                            <div className='p-2 px-3 cursor-pointer'
                                key={index}
                                onClick={() => {
                                    setdurationType(type)
                                    setdata(type === 'Annual' ? dataSource.annualEarnings : dataSource.quarterlyEarnings)
                                }}
                                style={durationType === type ? {
                                    backgroundColor: '#e6e9f0',
                                    fontWeight: 600,
                                    borderRadius: '0.5rem'
                                } : {}}
                            >
                                {type}
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <Spacer height={25} />
            {!loading && <Chart series={[
                {
                    name: 'Eps',
                    data: data?.map((element, index) => element.reportedEPS)
                }
            ]}
                type='line'
                height={500}

                options={{

                    xaxis: {
                        categories: data?.map((element, index) => {
                            return element.fiscalDateEnding
                        })
                    },
                    stroke: {
                        width: 2,
                    },
                }} />}
        </div>
    )
}

export default EarningsChart