import React, {useState} from 'react';
import '../../css/Menu.css';
import { Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Menu({navLinks}){

    
    const [enlaceActivo, setEnlaceActivo] = useState('inicio');
    const manejarCambioEnlace = (nombreEnlace) => {
        setEnlaceActivo(nombreEnlace);
      };

    function cerrarSesion(){

    }

    return(

        <div>
            <Navbar expand="lg" id='nav-menu'>
                <Navbar.Brand href="#" className='logo-texto' style={{"color":"#fff","fontSize":"28px"}}>MERKATODO</Navbar.Brand>
                <Navbar.Toggle id='hambur' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="basic-navbar-nav">

                <Form inline="true">
                    <InputGroup>
                        <Form.Control
                            placeholder="Buscar por categoria..."
                            aria-label="Buscar por categoria"
                        />
                        {/*<InputGroup.Text id="basic-addon1">Buscar
                         <img className='icono-buscar' src={require('../imgs/search_icon.png')} alt='icono-buscar'/>
                        </InputGroup.Text> */}
                    </InputGroup>
                </Form>
                <Nav id="enlaces-menu" style={{"fontSize":"14px"}}>
                    {navLinks.map((item) => (
                        <Nav.Link key={item.title} as={Link} to={item.path} 
                        className={enlaceActivo === item.title ? 'active' : ''}
                        onClick={() => manejarCambioEnlace(item.title)}>
                            {item.title}
                        </Nav.Link>
                    ))}
    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>

    );

}

export default Menu;