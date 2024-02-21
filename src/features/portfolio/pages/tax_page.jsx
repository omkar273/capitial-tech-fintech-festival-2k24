import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";

const TaxationPage = () => {
    const text = 'p-4 border border-gray-300'

    return (
        <div className='pg bg-white'>
            <CompanyDetailsPageNavbar />
            <br></br>
            <div className="w-full p-8 border border-gray-300 rounded  overflow-x-auto">
                <table className="w-full border-collapse rounded-md">
                    <thead className="bg-gray-200 rounded-md">
                        <tr className="rounded-md font-fira-sans text-base">
                            <th className="p-4 border border-gray-300">Tax Optimization Strategy</th>
                            <th className="p-4 border border-gray-300">Description</th>
                            <th className="p-4 border border-gray-300">Example</th>
                            <th className="p-4 border border-gray-300">Potential Tax Savings</th>
                            <th className="p-4 border border-gray-300">Best Suited for</th>
                            <th className="p-4 border border-gray-300">Key Considerations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={text}>Capital Gains Management</td>
                            <td className={text}>Utilize strategies to optimize long-term and short-term capital gains taxes, including holding periods, tax-loss harvesting, and dividend reinvestment.</td>
                            <td className={text}>Hold investments for optimal durations, sell underperforming assets, and reinvest dividends strategically.</td>
                            <td className={text}>Reduction in tax liabilities through efficient management of capital gains.</td>
                            <td className={text}>All investors</td>
                            <td className={text}>Consider holding periods, market conditions, and impact on overall portfolio allocation.</td>
                        </tr>
                        <tr>
                            <td className={text}>Tax-efficient Investments</td>
                            <td className={text}>Invest in tax-saving instruments and utilize indexation benefits to minimize tax liabilities on investments..</td>
                            <td className={text}>Invest in ELSS, tax-saving bonds, and utilize indexation benefits for debt investments.</td>
                            <td className={text}>Deductions under Section 80C, indexation benefits for reducing taxable gains.</td>
                            <td className={text}>Investors looking for tax-efficient options</td>
                            <td className={text}>Balance between risk and return, lock-in periods, and liquidity requirements.</td>
                        </tr>
                        <tr>
                            <td className={text}>Retirement Tax Planning</td>
                            <td className={text}>Develop strategies to optimize taxes during retirement by utilizing tax-efficient withdrawal methods and investments.</td>
                            <td className={text}>Utilize a combination of taxable, tax-deferred, and tax-free accounts for retirement savings.</td>
                            <td className={text}>Minimization of tax liabilities during retirement.</td>
                            <td className={text}>Investors planning for retirement</td>
                            <td className={text}>Considerations for managing tax brackets, withdrawal timelines, and longevity of retirement funds.</td>
                        </tr>
                        <tr>
                            <td className={text}>Estate and Inheritance Tax Planning</td>
                            <td className={text}>Utilize estate planning tools and strategies to minimize estate and inheritance taxes and facilitate smooth wealth transfer..</td>
                            <td className={text}>Establish trusts, utilize gifting strategies, and invest in tax-efficient assets for estate planning.</td>
                            <td className={text}>Reduction in estate and inheritance taxes, efficient wealth transfer to heirs.</td>
                            <td className={text}>Investors with significant assets</td>
                            <td className={text}>Considerations for legal implications, beneficiaries, and long-term financial goals.</td>
                        </tr>

                        <tr>
                            <td className={text}>Business Tax Optimization</td>
                            <td className={text}>Incorporate businesses or utilize corporate structures to optimize tax liabilities for investments and business activities.</td>
                            <td className={text}>Establish holding companies, utilize lower corporate tax rates, and defer personal income tax through dividends.</td>
                            <td className={text}>Reduction in overall tax burden for business income and investments.</td>
                            <td className={text}>Business owners and high-net-worth individuals</td>
                            <td className={text}>Legal and regulatory compliance, impact on business operations, and long-term tax planning objectives.</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default TaxationPage