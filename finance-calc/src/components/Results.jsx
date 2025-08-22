import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ inputs }) {
    const data = calculateInvestmentResults(inputs)

    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th className="center">Year</th>
                        <th className="center">Investment Value</th>
                        <th className="center">Interest (per annum)</th>
                        <th className="center">Total Interest</th>
                        <th className="center">Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((annualData) => {
                        const totalInterest = annualData.valueEndOfYear - (inputs.initialInvestment + annualData.year * inputs.annualInvestment);
                        return (
                            <tr key={annualData.year}>
                                <td className="center">{annualData.year}</td>
                                <td className="center">{formatter.format(annualData.valueEndOfYear)}</td>
                                <td className="center">{formatter.format(annualData.interest)}</td>
                                <td className="center">{formatter.format(totalInterest)}</td>
                                <td className="center">{formatter.format(annualData.year * inputs.annualInvestment)}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>

        </>
    )
} 