import DashboardNavbar from "@/features/dashboard/components/dashboard_navbar";
import DonutChart from 'react-donut-chart';
const InvestmentPlansPage = () => {
    return (
        <div className="pg">
            <DashboardNavbar />
            <div className="p-4 grid grid-cols-3 gap-4">
                <DonutChart
                    innerRadius={0.5}
                    outerRadius={0.6}
                    data={[
                        {
                            label: 'Long term',
                            value: 23.4,
                        },
                        {
                            label: 'Govet want',
                            value: 22.16,
                        },
                        {
                            label: 'short term',
                            value: 11.36,
                        },
                        {
                            label: 'SIPS',
                            value: 69,
                        },
                    ]}
                />
                <DonutChart
                    innerRadius={0.5}
                    outerRadius={0.6}
                    data={[
                        {
                            label: 'Long term',
                            value: 69.4,
                        },
                        {
                            label: 'Govet want',
                            value: 23.16,
                        },
                        {
                            label: 'short term',
                            value: 45.36,
                        },
                        {
                            label: 'SIPS',
                            value: 36,
                        },
                    ]}
                />
                <DonutChart
                    innerRadius={0.5}
                    outerRadius={0.6}
                    data={[
                        {
                            label: 'Long term',
                            value: 63,
                        },
                        {
                            label: 'Govet want',
                            value: 58.16,
                        },
                        {
                            label: 'short term',
                            value: 70.36,
                        },
                        {
                            label: 'SIPS',
                            value: 10,
                        },
                    ]}
                />

            </div>
        </div>
    )
}

export default InvestmentPlansPage