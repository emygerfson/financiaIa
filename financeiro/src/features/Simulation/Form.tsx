import { StepProgress } from "../../features/Simulation/Progress";
import { FormStep } from "./FormStep";
import {simulationFormSteps} from '../../data/Simulation'
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { useSimulationStores } from "../../hooks/useSimulationStores";
import type { SimulationFormData } from "../../data/Simulation";

export function SimulationForm() {
    const {saveFormDate} = useSimulationStores();
    const navigate = useNavigate();
    const [currentStepIndex, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<SimulationFormData>({} as SimulationFormData);
    const totalSteps = simulationFormSteps.length;
    const currentStep = simulationFormSteps[currentStepIndex];

    const handleNextStep = ( values:string) => {
        const updateFormData = {...formData, [currentStep.id]: values};

        setFormData(updateFormData);

        if (currentStepIndex + 1 > totalSteps - 1) {
            const id = saveFormDate(updateFormData);
            void navigate(`/resultado/${id}`);
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