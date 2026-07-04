import { Clock, TrendingUp, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Buttom } from "./Buttom";
import React from "react";

export function Header() {
    const navigate = useNavigate();
    return (
        <header className="border-b border-(--border) px-6 py-3">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-full">
                        <Wallet size={20} className="text-primary-foreground"/>
                    </div>
                    <span className="text-muted-foreground font-medium">Planej</span>
                    <span className="font-extrabold">.ia</span>
                </div>

                <div className="flex items-center gap-1">
                    <Buttom variant="secondary" icon={TrendingUp} onClick={() => navigate("/")}>
                        <span className="hidden sm:inline">Nova Simulação</span>
                    </Buttom>
                    <Buttom variant="ghost"icon={Clock} onClick={() => navigate("/historico")}>
                        <span className="hidden sm:inline">Histórico</span>
                    </Buttom>
                </div>
                
            </nav>
        </header>
    )
}