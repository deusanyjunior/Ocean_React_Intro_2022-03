import Nav from 'react-bootstrap/Nav';

function MenuTopo({logado=false}) {
    return (
            <Nav
            variant="tabs"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Ajuda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            Disabled
            </Nav.Link>
        </Nav.Item>
        </Nav>
    )
}

export default MenuTopo;