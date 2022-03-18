function MenuTopo({logado=false}) {
    return (
        <div>
            <button style={{
                display: logado? "none": "flex"
            }} >Login</button>
            <button>Ajuda</button>
        </div>
    )
}

export default MenuTopo;