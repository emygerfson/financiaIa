import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout.tsx";
import { FormulationFormPage } from "./page/FormulationFormPage.tsx";
import { SimulationResultsPage } from "./page/SimulationResultsPage.tsx";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <FormulationFormPage /> ,
      },
      {
        path: "/resultado/:id",
        element: <SimulationResultsPage />,
      },
      {
        path: "/historico",
        element: <h1>Histórico de Simulações</h1>,
      },
    ],
  },
]);