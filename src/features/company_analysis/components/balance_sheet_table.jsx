import Spacer from "@/core/components/spacer";
import { convertToCrores } from "@/core/utils/currency_conversion";
import axios from 'axios';
import { useEffect, useState } from "react";

const BalanceSheetChart = ({ chartTitle = '',
    labelsList = [],
    url = ''
}) => {

    const [data, setdata] = useState([])



    const durationTypeList = ["Annual", "Quarterly"]
    const [durationType, setdurationType] = useState(durationTypeList[0])
    const [dataSource, setdataSource] = useState({})
    const getData = async () => {
        try {
            const res = await axios.get(url);
            console.log(res);
            if (res.status === 200) {
                console.log('status code okay');
                setdata(res.data.annualReports)
                setdataSource(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='card bg-white py-8 px-6'>
            <div className='flex items-center justify-between'>
                <p className='inline-flex text-3xl font-fira-sans '>
                    {(durationType === 'Annual') ? 'Annual ' : 'Quarterly '} {chartTitle}
                </p>
                <div className='inline-flex'>
                    {durationTypeList.map((type, index) =>
                        <div className='p-2 px-3 cursor-pointer'
                            key={index}
                            onClick={() => {
                                setdurationType(type)
                                setdata(type === 'Annual' ? dataSource.annualReports : dataSource.quarterlyReports)
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
            <Spacer height={25} />
            <p className='p-3 text-base text-gray-500'>Consolidated Figures in Rs. Crores</p>
            <div className='overflow-x-auto w-full max-w-full flex'>
                {/* First Table for Fixed Column */}
                <table className='sticky left-0 z-[10] bg-white'>
                    <thead>
                        <tr>
                            <th className='p-4 border bg-opacity-40 md:text-nowrap'>Financial Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labelsList.map((label, index) => (
                            <tr key={index}>
                                <td className='px-4 py-2 border bg-gray-200 bg-opacity-40 md:text-nowrap font-semibold'>{label.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Second Table for Scrollable Columns */}
                <table className='z-0'>
                    <thead>
                        <tr>
                            {data.map((report, index) => (
                                <th key={index} className='p-4 border md:text-nowrap'>
                                    {new Date(report.fiscalDateEnding).toLocaleString('en-US', { month: 'short', year: 'numeric' })}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {labelsList.map((label, index) => (
                            <tr key={index}>
                                {data.map((report, rowIndex) => (
                                    <td
                                        key={rowIndex}
                                        className={`px-4 py-2 border md:text-nowrap text-black ${index % 2 !== 0 ? 'bg-gray-200 bg-opacity-40' : ''}`}
                                    >
                                        {convertToCrores(report[label.key])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BalanceSheetChart;


export const balance_sheet_labels = [
    { 'title': 'Total Asset', 'key': 'totalAssets' },
    { 'title': 'Total Current assets', 'key': 'totalCurrentAssets' },
    { 'title': 'Inventory', 'key': 'inventory' },
    { 'title': 'Intangible Assets', 'key': 'intangibleAssets' },
    { 'title': 'Total Liabilities', 'key': 'totalLiabilities' },
    { 'title': 'Long term Investment', 'key': 'longTermInvestments' },
    { 'title': 'Short term Investment', 'key': 'shortTermInvestments' },
    { 'title': 'Current Debt', 'key': 'currentDebt' },
    { 'title': 'Total Shareholder Equity', 'key': 'totalShareholderEquity' },
    { 'title': 'Treasury Stock', 'key': 'treasuryStock' },
    { 'title': 'Common Stock', 'key': 'retainedEarnings' },
]

export const cashflow_sheet_labels = [
    { 'title': 'Operating Cashflow', 'key': 'operatingCashflow' },
    { 'title': 'Payment for Operating', 'key': 'paymentsForOperatingActivities' },
    { 'title': 'Capital Expenditure', 'key': 'capitalExpenditures' },
    { 'title': 'Inventory Change', 'key': 'changeInInventory' },
    { 'title': 'Profit/Loss ', 'key': 'profitLoss' },
    { 'title': 'Investment Cashflow', 'key': 'cashflowFromInvestment' },
    { 'title': 'Financing Cashflow', 'key': 'cashflowFromFinancing' },
    { 'title': 'Dividend Payout', 'key': 'dividendPayout' },
]

export const income_sheet_labels = [
    { 'title': 'Gross Profit', 'key': 'grossProfit' },
    { 'title': 'Total Revenue', 'key': 'totalRevenue' },
    { 'title': 'Revenue Cost', 'key': 'costOfRevenue' },
    { 'title': 'Operating Income', 'key': 'operatingIncome' },
    { 'title': 'R & D', 'key': 'researchAndDevelopment' },
    { 'title': 'Operating Expenses', 'key': 'operatingExpenses' },
    { 'title': 'Net Interest Income', 'key': 'netInterestIncome' },
    { 'title': 'Depreciation', 'key': 'depreciation' },
    { 'title': 'Taxable Income', 'key': 'incomeBeforeTax' },
    { 'title': 'Income Tax Expenses', 'key': 'incomeTaxExpense' },
    { 'title': 'ebit', 'key': 'ebit' },
    { 'title': 'ebitda', 'key': 'ebitda' },
    { 'title': 'netIncome', 'key': 'netIncome' },
]