import MenuTopo from './components/MenuTopo';
import Rodape from './components/Rodape';
import Corpo from './components/Corpo';

function App() {
    return (
        <>
            <MenuTopo />
            <Corpo nome={"Antonio"} 
                sobrenome={"de Carvalho"}/>
            <Rodape autor='Antonio' />
        </>
    )
}

export default App;