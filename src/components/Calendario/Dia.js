import { Component } from "react";

class Dia extends Component {

    constructor () {
        super();
        this.aoClicar = this.aoClicar.bind(this);
    }

    state = { qtdCliques: 0}

    aoClicar(event) {
        const cliques = this.state.qtdCliques + 1;
        this.setState(
            { qtdCliques: cliques },
            function () {
                console.log("Callback - " + this.props.data + ": " + this.state.qtdCliques);
            }
        )
        console.log(this.props.data + ": " + this.state.qtdCliques);
    }

    render () {
        return (
            <button onClick={this.aoClicar}>
                { 
                    this.props.data > 0 && this.props.data < 32 ? 
                    this.props.data : '-'}
            </button>
        );
    }
}

/*
function Dia({diaDaSemana, data}) {
    return (
        <button>{ data > 0 && data < 32 ? data : '-'}</button>
    )
}
*/

export default Dia;