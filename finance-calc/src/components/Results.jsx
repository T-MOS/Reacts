import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ inputs }) {
    console.log(calculateInvestmentResults(inputs))
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    <tr></tr>
                </tbody>

            </table>

        </>
    )
}