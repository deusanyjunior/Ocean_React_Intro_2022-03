import Semana from "./Semana";

function Mes({mes, ano}) {
    return(
        <>
        <div>{mes} / {ano}</div>
        <div>Dom Seg Ter Qua Qui Sex Sab</div>
        <Semana dataInicial={-1} />
        <Semana dataInicial={6} />
        <Semana dataInicial={13} />
        <Semana dataInicial={20} />
        <Semana dataInicial={27} />
        </>
    )
}

export default Mes;