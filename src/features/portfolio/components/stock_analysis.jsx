import Spacer from '@/core/components/spacer';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Input, InputNumber } from 'antd';
import DonutChart from 'react-donut-chart';

const PortfolioBuilder = () => {
    return (
        <div className="w-full p-4 overflow-y-scroll">
            <Input size="large" placeholder="Search for stock... " className='p-4 text-lg' prefix={<SearchIcon fontSize='large' />} />
            <Spacer height={25} />
            <div className='flex flex-wrap w-full gap-4'>
                <div>
                    <p className='text-base'>Enter Buying Price</p>
                    <InputNumber
                        className='my-2 p-2 min-w-80'
                        defaultValue={1}
                        formatter={(value) => `₹ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                    />
                </div>
                <div>
                    <p className='text-base'>Enter Quantity</p>
                    <InputNumber
                        className='my-2 p-2 min-w-80'
                        defaultValue={1}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                    />
                </div>
            </div>
            <Spacer height={25} />
            <Button type="primary" size='large' className='bg-blue-500'>
                Add to watchlist
            </Button>

            {/* add to portfolio button */}

            {/* category distribution */}
            <Spacer height={35} />
            <div>
                <p className='text-2xl font-semibold font-open-sans'>Equity asset allocation</p>
                <DonutChart
                    innerRadius={0.5}
                    outerRadius={0.6}
                    data={[
                        {
                            label: 'Energy',
                            value: 23.4,
                        },
                        {
                            label: 'Financial',
                            value: 22.16,
                        },
                        {
                            label: 'Automobile',
                            value: 11.36,
                        },
                        {
                            label: 'Technology',
                            value: 69,
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default PortfolioBuilder