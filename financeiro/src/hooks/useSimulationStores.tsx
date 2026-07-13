import type { SimulationFormData, SimulationRecord } from '../data/Simulation';



const LOCAL_STORAGE_KEY = 'simulations';

export const useSimulationStores = () => {
    const saveFormDate = (formData:SimulationFormData) => {
        const id = crypto.randomUUID();
        const record: SimulationRecord = { ...formData, id };
        const store = localStorage.getItem(LOCAL_STORAGE_KEY);
        const savedData = store 
        ? (JSON.parse(store)  as SimulationRecord[])
        : [] 
        ;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...savedData, record]));

        return id;
    };
    const getFormDate = (id: string) => {
        const store = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!store) return null;
        const savedData = JSON.parse(store) as SimulationRecord[];
        return savedData.find((data) => data.id === id) || null;
        
        
    };


    return{saveFormDate, getFormDate};
}