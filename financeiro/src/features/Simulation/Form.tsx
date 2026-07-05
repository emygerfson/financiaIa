import React from "react";
import { StepProgress } from "../../features/Simulation/Progress";
import { FormStep } from "./FormStep";
import { PiggyBank } from "lucide-react";

export function SimulationForm() {
    return(
        <>
            <StepProgress currentStep={1} totalSteps={6} />
            <FormStep
                 icon={PiggyBank} 
                 title="Renda Mensal Bruta" 
                 question="Quanto e depositado na sua conta mensalmente(some todas as fontes)?"
                 inputProps={{
                    type: "text",
                    placeholder: "ex: 5.000,00",
                    prefix: "R$",
                 }}
            />
        </>
    )
}