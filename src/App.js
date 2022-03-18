import MenuTopo from './components/MenuTopo';
import Rodape from './components/Rodape';
import Corpo from './components/Corpo';

function App() {
    return (
        <>
            <MenuTopo />
            <Corpo />
            <Rodape autor='Antonio' />
        </>
    )
}

export default App;