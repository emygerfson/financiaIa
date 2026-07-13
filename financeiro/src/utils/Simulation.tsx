import type { SimulationFormData } from "../data/Simulation";
import {parseCurrency} from './currency'

export { parseCurrency };

export function calcMonthlySavings(data:SimulationFormData) {
    return (
        parseCurrency(data.income as string) - 
        parseCurrency(data.expenses as string) - 
        parseCurrency(data.debts as string)
    )
}