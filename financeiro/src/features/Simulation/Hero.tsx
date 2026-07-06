import  PiggyBankImage  from "../../assets/image/porquinho.png"

export function SimulationHero() {
    return (
        <div className="mb-8 text-center">
            <div className="flex flex-col items-center sm:flex-row">
                <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
                    Vamos Planejar seu Futuro
                </h1>
                <img 
                    src={PiggyBankImage}
                    alt="PiggyBank"
                    aria-hidden="true"
                    className="h-16 w-16 sm:-mt-2 sm:-ml-3"
                />
            </div>
            <p className="text-muted-foreground text-sm">
                Responda algumas perguntas para descobrir o melhor plano para o seu futuro
            </p>
        </div>
    )
}