import { PageHero } from "../components/shared/PageHero.tsx";
import { Card } from "../features/SimulationResults/Cards.tsx";
import { CreditCardIcon, Goal, Landmark } from "lucide-react";
import { CalendarClock } from "lucide-react";
import { calcMonthlySavings, parseCurrency } from "../utils/Simulation.tsx";
import { PiggyBank } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useSimulationStores } from "../hooks/useSimulationStores.tsx";




export function SimulationResultsPage() {
    const { id } = useParams<{id: string}>();
    const {getFormDate} = useSimulationStores()

    const data = id ? getFormDate(id) : null

    if (!data) return <h1>Simulação nao encontrada</h1>
    
    const monthlySavings = calcMonthlySavings(data);
    return (
        <main className="mx-auto max-w-6xl px-4  py-10 sm:py-14">
            <PageHero
                title="Resultado da Simulação"
                subtitle="Com base no seu perfil financeiro e objetivos."
            />
            <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <Card
                    // variant="primary"
                    icon={Goal}
                    label="Custo da Meta"
                    value={data.goalAmount}
                    subtitle={data.goalName}
                />
                <Card
                    // variant="primary"
                    icon={CalendarClock}
                    label="Prazo"
                    value={`${data.goalDeadline} meses`}
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
            <div className="grid  gap-6 lg:grid-cols-3">
                <div className="bg-card order-2 rounded-2xl p-6 shadow[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
                    Painel de Insights
                </div>
                <div className="order-1 flex flex-col gap-6 lg:order-2">
                    <Card
                        
                        icon={Wallet}
                        label="Renda Mensal"
                        value={`R$ ${parseCurrency(data.income).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        subtitle={"Renda total bruta por mês"}
                    />
                    <Card
                        
                        icon={CreditCardIcon}
                        label="Custo Fixo de Vida"
                        value={`R$ ${parseCurrency(data.expenses).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        subtitle={"Prazo para atingir a meta"}
                    />
                    <Card
                        
                        icon={Landmark}
                        label="Dividas / Parcelas"
                        value={`R$ ${parseCurrency(data.debts).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        subtitle={"Valor comprometido em dividas/parcelas"}
                    />
                </div>
            </div>
        </main>
    );
}