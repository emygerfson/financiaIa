import { createBrowserRouter, Form } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout.tsx";
import { FormulationFormPage } from "./page/FormulationFormPage.tsx";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <FormulationFormPage /> ,
      },
      {
        path: "/resultado",
        element: <h1>Resultado da Simulação</h1>,
      },
      {
        path: "/historico",
        element: <h1>Histórico de Simulações</h1>,
      },
    ],
  },
]);