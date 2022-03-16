import React from 'react';
import ReactDOM from 'react-dom';

function MenuTopo() {
    return (
        <div>
            <button>Login</button>
            <button>Ajuda</button>
        </div>
    )
}

function Conteudo() {
    return (
        <div>Esta é minha primeira página com componentes!</div>
    )
}

function Rodape() {
    return (
        <div>Copyleft by djota</div>
    )
}

function Corpo() {
    return (
        <>
            <MenuTopo />
            <Conteudo />
            <Rodape />
        </>
    )
}

ReactDOM.render(
    <Corpo />
    , 
    document.getElementById('root')  
);

