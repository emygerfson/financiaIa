import { SimulationHero } from '../features/Simulation/Hero';
import { SimulationForm } from '../features/Simulation/Form';

export function FormulationFormPage() {
    return (
        <main className="mx-auto max-w-xl px-4  py-10 sm:py-14">
            <SimulationHero />
            <SimulationForm />
        </main>
    );
}