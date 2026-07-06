import { CalendarClock, PiggyBank, Wallet,CreditCard,Goal,Landmark } from 'lucide-react'
import type{FormStepProps} from '../features/Simulation/FormStep'

export type SimulationFormData = Record<string, string>;

export const simulationFormSteps  = [
    {
        id: "icone",
        icon: PiggyBank,
        title: "Renda Mensal Bruta",
        question: "Quanto e depositado na sua conta mensalmente(some todas as fontes)?",
        inputProps: {
            placeholder: "ex: 2.000,00",
            prefix: "R$",
            maxLength: 12,
        },
    },
    {
        id: "expenses",
        icon: CreditCard,
        title: "Custos fixos de vida",
        question: "Quantos você gasta mensalmente com custos fixos (aluguel, luz, agua,etc...)?",
        inputProps: {
            placeholder: "ex: 2.000,00",
            prefix: "R$",
            maxLength: 12,
        },
    },
    {
        id: "debts",
        icon: Landmark,
        title: "Dividas / parcelas",
        question: "Você tem algum valor comprometido com parcelas ou emprestimos mensais?",
        inputProps: {
            placeholder: "ex: 2.000,00",
            prefix: "R$",
            maxLength: 12,
        },
    },
    {
        id: "goalName",
        icon: Goal,
        title: "Nome da meta",
        question: "Qual e objetivo que você deseja alcançar?",
        inputProps: {
            placeholder: "ex: viajar para Italia",
            maxLength: 50,
        },
    },
    {
        id: "goalAmount",
        icon: Wallet,
        title: "Custo da Metas",
        question: "Quanto custa realizar seu sonho?",
        inputProps: {
            placeholder: "ex: 15.000,00",
            prefix: "R$",
            maxLength: 12,
        },
    },
    {
        id: "goalDeadline",
        icon: CalendarClock,
        title: "Prazo desejado",
        question: "Em quantos meses vocé deseja alcancar sua meta?",
        inputProps: {
            type: "number",
            placeholder: "ex: 6",
            suffix: "meses",
            min: 1,
            max: 120,
        },
        submitButtomProps: { 
            label: "Gerar Simulação", 
            emojiIcon: "🤑"

         },
    },
      
] satisfies FormStepProps[]   

export type SimulationFormStep = Record<(typeof simulationFormSteps)[number]['id'], string>;
