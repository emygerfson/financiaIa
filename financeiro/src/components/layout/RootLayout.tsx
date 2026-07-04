import { Header } from "../shared/Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
    return (
       
       <div>
            <Header />
            <Outlet />
       </div> 
    );
}