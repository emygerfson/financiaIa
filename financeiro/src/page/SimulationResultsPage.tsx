import { PageHero } from "../components/shared/PageHero.tsx";
import { Card } from "../features/SimulationResults/Cards.tsx";
import { Goal } from "lucide-react";
import { CalendarClock } from "lucide-react";
import type { SimulationFormData } from '../data/Simulation';
import { calcMonthlySavings } from "../utils/Simulation.tsx";
import { PiggyBank } from 'lucide-react';


const mock: SimulationFormData = {
    income: 'R$ 5.000,00',
    expenses: 'R$ 2.000,00',
    debt: 'R$ 1.000,00',
    goalName: 'Viagem para Japão',
    goalAmount: 'R$ 10.000,00',
    goalDealine: '12',
}

export function SimulationResultsPage() {
    const data: SimulationFormData = mock;
    const monthlySavings = calcMonthlySavings(data);
    return (
        <main className="mx-auto max-w-6xl px-4  py-10 sm:py-14">
            <PageHero
                title="Resultado da Simulação"
                subtitle="Com base no seu perfil financeiro e objetivos."
            />
            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <Card
                    variant="primary"
                    icon={Goal}
                    label="Custo da Meta"
                    value={data.goalAmount}
                    subtitle={data.goalName}
                />
                <Card
                    variant="primary"
                    icon={CalendarClock}
                    label="Prazo"
                    value={`${data.goalDealine} meses`}
                    subtitle={"Prazo para atingir a meta"}
                />
                <Card
                    variant="primary"
                    icon={PiggyBank}
                    label="Econômia Mensal"
                    value={`R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    subtitle={"Saldo mensal para atingir a meta"}
                />
                    
                
                
            </div>
        </main>
    );
}