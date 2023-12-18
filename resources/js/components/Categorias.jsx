import React, {useEffect, useState} from 'react';
import '../../css/Categorias.css';
import { Row, Col, Modal, Button, Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import { HashLink as Link } from 'react-router-hash-link';


// imagenes
import jabonesImage from '../../imgs/jabones.jpg';
import jabonesRexona from '../../imgs/productos/jabon-rexona.png';
import bannerLimpieza from '../../imgs/banner-limpieza.svg';

const endpoint = 'http://localhost:8000';

function Categorias(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const agregaCarrito = () =>{
        alert("Debes loguearte para realizar esta compra");
    }

    const [catSeleccionada, setCatSeleccionada] = useState({
        jabones: false,
        esponjas: false,
        perfumes: false,
        papeleria: false,
        detergentes: false,
        insecticidas: false,
    });

    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const elegir = e => {

    }

    const [products, setProducts] = useState([]);
    useEffect (() => {
        getAllProducts()
    }, [])

    const [count, setCount] = useState(0);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/productos`)
        setProducts(response);
    }

    return (
        <div>
            <div className='texto-img'>
                <div className='texto-inicio'>
                    <h3>Categorias</h3>
                </div>
                <div className='contenedor-img'>
                    <img className='fotoInicio'
                        src={bannerLimpieza}
                        alt='Foto Elementos de Limpieza'/>
                </div>
            </div>
            <div className='contenido'>
                <Row>
                <Col md={2}>
                
                    <div className='filtro-categorias'>
                        <ul className='lista-categorias'>
                            <li className='categoria-elegida'>Todos los productos</li>
                            <li id='jabones'>Jabones</li>
                            <li>Esponjas</li>
                            <li>Perfumes</li>
                            <li>Papelería</li>
                            <li>Detergentes</li>
                            <li>Insecticidas</li>
                        </ul>
                    </div>
                </Col>
                <Col md={8}>
                    <div className='seccion-productos'>
                        <section >
                            <div className='producto'>
                                <div className='contenedor-img-producto'>
                                    <img className='img-producto' src={jabonesRexona} alt=''/>
                                </div>
                                <Button id='titulo-producto' onClick={handleShow}>
                                    <h6>Jabon Rexona</h6>
                                </Button>
                            
                                <p className='categoria-producto'>Jabones</p>
                                
                                <p className='precio-producto'>$240</p>
                            </div>
                        </section>

                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Rollo de Cocina</h6>
                            <p className='categoria-producto'>Papelería</p>
                            <p className='precio-producto'>$540</p>
                        </div>
                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Lavavajilla Cif</h6>
                            <p className='categoria-producto'>Detergentes</p>
                            <p className='precio-producto'>$1200</p>
                        </div>
                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Insecticida Raid</h6>
                            <p className='categoria-producto'>Insecticidas</p>
                            <p className='precio-producto'>$350</p>
                        </div>
                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Detergente liquido ALA</h6>
                            <p className='categoria-producto'>Detergentes</p>
                            <p className='precio-producto'>$570</p>
                        </div>
                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Papel Higuienico Campanita</h6>
                            <p className='categoria-producto'>Papeleria</p>
                            <p className='precio-producto'>$770</p>
                        </div>
                        <div className='producto'>
                            <div className='contenedor-img-producto'>
                                <img className='img-producto' src={jabonesImage} alt=''/>
                            </div>
                            <h6 className='titulo-producto'>Limpiador liquido Poett</h6>
                            <p className='categoria-producto'>Limpiadores</p>
                            <p className='precio-producto'>$400</p>
                        </div>

                    </div>
                </Col>
                </Row>
            </div>
            {/* Modal Vista de Producto */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Producto: Jabón Rexona</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contenedor-img-productoE'>
                        <img className='img-productoE' src={jabonesRexona} alt=''/>
                    </div>
                    <div style={{"textAlign":"center", "fontSize":"17px"}}>
                        <p >
                        En Barra De Glicerina Frutos Rojos 3x90gr</p>
                        <p>Jabones</p>

                    </div>

                        <Row>
                            <Col><p className='precio-producto'>$240</p></Col>
                            <Col>
                                <Form>
                                    <Form.Control type="number" min={1} placeholder='1'/>
                                </Form>
                            </Col>
                            
                        </Row>
                        
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={agregaCarrito}>
                        Agregar al carrito
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
            

        </div>

        
    );


}

export default Categorias;