import Semana from "./Semana";

function Mes({mes, ano}) {
    return(
        <>
        <div>{mes} / {ano}</div>
        <div>Dom Seg Ter Qua Qui Sex Sab</div>
        <Semana />
        <Semana />
        <Semana />
        <Semana />
        <Semana />
        </>
    )
}

export default Mes;