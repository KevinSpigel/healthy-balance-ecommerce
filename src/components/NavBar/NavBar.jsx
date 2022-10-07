
import '../NavBar/NavBarStyles/NavBarStyles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'; // el componente Link reemplazará las etiquetas a


export function NavBar() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} alt="Logo" width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto grid gap-4">
                        <Nav.Link className="ms-5" href="#home">Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Productos/Hamburguesas">Hamburguesas</NavDropdown.Item>
                            <NavDropdown.Item href="#Productos/Congelados">Congelados</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#aboutUs">¿Quiénes Somos?</Nav.Link>
                        <Nav.Link href="#healthyTips">Tips Saludables</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
        </div>
    );
};

