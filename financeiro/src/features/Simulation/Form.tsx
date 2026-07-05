import React from "react";
import { StepProgress } from "../../features/Simulation/Progress";
import { FormStep } from "./FormStep";
import { PiggyBank } from "lucide-react";
import {simulationFormSteps} from '../../data/Simulation'
import { useState } from "react";

export function SimulationForm() {
    const [currentStepIndex, setCurrentStep] = useState(0);
    const totalSteps = simulationFormSteps.length;
    const currentStep = simulationFormSteps[currentStepIndex];

    const handleNextStep = () => {
        if (currentStepIndex + 1 > totalSteps - 1) {
            return;
        } else {
            setCurrentStep((prev)=> prev + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStepIndex === 0) {
            return;
        } else {
            setCurrentStep((prev) => prev - 1);
        }
    };

    return(
        <>
            <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
            <FormStep
                 key={currentStep.id}{...currentStep}
                 onNext={handleNextStep}
                 onBack={handlePreviousStep}
                 hadeBackButtom={currentStepIndex === 0}
            />
        </>
    )
}