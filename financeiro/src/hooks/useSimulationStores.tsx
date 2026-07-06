import type { SimulationFormData } from '../data/Simulation';
const LOCAL_STORAGE_KEY = 'simulations';

export const useSimulationStores = () => {
    const saveFormDate = (formData:SimulationFormData) => {
        const store = localStorage.getItem(LOCAL_STORAGE_KEY);
        const savedData = store 
        ? (JSON.parse(store)  as SimulationFormData[])
        : [] 
        ;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...savedData, formData]));
    };
    return{saveFormDate}
}