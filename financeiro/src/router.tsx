import { createBrowserRouter } from "react-router-dom";
import { Buttom } from "./components/shared/Buttom.tsx";
import { PiggyBank } from "lucide-react";
import { RootLayout } from "./components/layout/RootLayout.tsx";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <h1>Formulario de Simulação</h1>
            {/* <Buttom variant="secondary" icon={PiggyBank}>
                  Simular
                </Buttom> */}
          </>
        ),
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