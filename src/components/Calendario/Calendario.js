import Mes from "./Mes";
import './Calendario.css'

function Calendario() {
    return (
        <>
        <div>Eventos do mês: Março/2022</div>
        <Mes mes={'Março'} ano={'2022'} />
        </>
    )
}

export default Calendario;