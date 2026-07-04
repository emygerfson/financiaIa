import React from "react";
import { StepProgress } from "../../features/Simulation/Progress";

export function SimulationForm() {
    return(
        <>
            <StepProgress currentStep={1} totalSteps={6} />
        </>
    )
}