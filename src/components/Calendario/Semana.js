import Dia from "./Dia";

function Semana({dataInicial}) {
    return(
        <div>
            <Dia diaDaSemana={'Dom'} data={dataInicial} />
            <Dia diaDaSemana={'Seg'} data={dataInicial + 1} />
            <Dia diaDaSemana={'Ter'} data={dataInicial + 2} />
            <Dia diaDaSemana={'Qua'} data={dataInicial + 3} />
            <Dia diaDaSemana={'Qui'} data={dataInicial + 4} />
            <Dia diaDaSemana={'Sex'} data={dataInicial + 5} />
            <Dia diaDaSemana={'Sab'} data={dataInicial + 6} />
        </div>
    )
}

export default Semana;