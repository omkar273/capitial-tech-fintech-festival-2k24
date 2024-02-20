import Spacer from '@/core/components/spacer';
import { Select } from 'antd';
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
            if (res.status === 200) {
                setdata(res.data.annualEarnings)
                setdataSource(res.data)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // rendering diff type of series data in single graph
    const seriesType = [
        {
            'label': 'Reported Eps',
            'value': 'reportedEPS'
        },
        {
            'label': 'Estimated Eps',
            'value': 'estimatedEPS',
        },
        {
            'label': 'Surprise',
            'value': 'surprise'
        },
        {
            'label': 'Surprise Percentage',
            'value': 'surprisePercentage'
        },
    ]
    const [seriesTypeValues, setseriesTypeValues] = useState([seriesType[0].value])
    const getSeriesData = () => {
        return [

            {
                name: 'Reported Eps',
                data: seriesTypeValues.includes('reportedEPS') ? data?.map((element) => element.reportedEPS) : [],
                color: '#00ff00'
            },
            {
                name: 'Estimated Eps',
                data: (seriesTypeValues.includes('estimatedEPS')) ? (data?.map((element) => element.estimatedEPS)) : [],
                color: '#ffff00'
            },
            {
                name: 'Surprise',
                data: (seriesTypeValues.includes('surprise')) ? data?.map((element) => element.surprise) : [],
                color: '#ff3300'
            },
            {
                name: 'Surprise Percentage',
                data: (seriesTypeValues.includes('surprisePercentage')) ? data?.map((element) => element.surprisePercentage) : [],
                color: '#0040ff'
            },


        ]
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="card bg-white py-8 px-6 w-full">
            <div className='flex items-center justify-between'>
                <div className='w-full flex items-center justify-between'>
                    <p className='inline-flex text-3xl font-fira-sans bg-primary-500 '>
                        {(durationType === 'Annual') ? 'Annual ' : 'Quarterly '} {chartTitle}
                    </p>

                    <div className='inline-flex gap-4'>
                        {durationTypeList.map((type, index) =>
                            <div className='p-2 px-3 cursor-pointer'
                                key={index}
                                onClick={() => {
                                    setdurationType(type)
                                    setseriesTypeValues([seriesType[0].value])
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
            {/* series selection */}
            <div className='w-max min-w-40' >
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Graph Type"
                    className='w-full'
                    defaultValue={[seriesType[0].value]}
                    options={durationType != 'Annual' ? seriesType : [seriesType[0]]}
                    onSelect={(values) => console.log(values)}
                    onChange={(values) => {
                        console.log(values);
                        setseriesTypeValues(values)
                    }}
                />
            </div>

            <Spacer height={10} />
            {!loading && <Chart series={getSeriesData()}
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