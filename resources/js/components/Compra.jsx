import React, {useState} from "react";
import { useLocation, Link} from "react-router-dom";
import '../../css/Compra.css';

import  {Button, Form, FormControl, Modal, Row, Col, ProgressBar, FormGroup } from 'react-bootstrap';
import iconoConfirm from '../../imgs/iconos/921540.png'

function Compra(){

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    const [item, setItem] = useState({ opciones: "", another: "another" });

    const { opciones } = item;

    const handleChange = e => {
        e.persist();
        console.log(e.target.value);

        setItem(prevState => ({
        ...prevState,
        opciones: e.target.value
        }));
    };
    
    const [visible, setVisible] = useState(false);
    const mostrarForm = () => {
        setVisible(!visible);
    };

    const [visibleP, setVisibleP] = useState(false);
    const mostrarFormPago = () => {
        setVisibleP(!visibleP);
    };
 
    const location = useLocation();
    const cartData = location.state.cartData || [];

    const [show, setShow] = useState(false);

    // cerrar modal
    const handleClose = () => {
        setShow(false);
    }
    // abrir modal
    const handleShow = () => {
        setShow(true);
    }

    return(
        <div className="contenedor-compra">

            <div className='texto-inicio'>
                <h3 className="tituloSimple">Compra</h3>
            </div>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                    <ProgressBar className="barra" now={(1 / 3) * 100}/>
                
                    {step === 1 && (
                        <div>
                            <h3>Envio</h3>
                            <div className="botones-radio">
                            <Form.Check
                                value="Retiro en el local"
                                type="radio"
                                aria-label="radio 2"
                                label="Retiro en el local"
                                name="options"
                                checked={!visible}
                                onChange={() => mostrarForm()}
                            />
                            <Form.Check
                                value="Envio a domicilio"
                                type="radio"
                                aria-label="radio 1"
                                label="Envio a domicilio"
                                onChange={() => mostrarForm()}
                                checked={visible}
                                name="options"
                            />
                            </div>
                            <br/>
                            {visible && (
                                <Form.Group className="form-envio" controlId="formStep1">
                                    <Row>
                                        <Col>
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value="Laura"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>Apellido</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="apellido"
                                                value="Perez"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>Direccion</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="direccion"
                                                value="Calle 345 Barrio D"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>Telefono/Celular</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value="0127787809"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                               
                            )}
                             <br/>
                        </div>
                        
                    )}
                    {step === 2 && (
                        <div>
                            <h3>Pago</h3>
                            <Form.Check
                                value="Efectivo"
                                type="radio"
                                aria-label="radio 3"
                                label="Efectivo"
                                onChange={() => mostrarFormPago()}
                                checked={!visibleP}
                                name="pagos"
                            />
                            <Form.Check
                                value="Tarjeta de Credito"
                                type="radio"
                                aria-label="radio 4"
                                label="Tarjeta de Credito"
                                onChange={() => mostrarFormPago()}
                                checked={visibleP}
                                name="pagos"
                            />
                             <br/>
                            {visibleP && (
                                <FormGroup className="form-pago">
                                    <Form.Label>Número de la tarjeta</Form.Label>
                                    <Form.Control type="text" name="number"
                                        id="number"
                                        maxLength="16"
                                        className="form-control"
                                        value="4646 7878 3232 8888"
                                    />
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" name="number"
                                        id="name"
                                        maxLength="30"
                                        className="form-control"
                                        value="Laura Perez"
                                    />
                                    <Row>
                                        <Col>
                                            <Form.Label>Fecha de expiración</Form.Label>
                                            <Form.Control type="text" name="number"
                                                id="expiry"
                                                maxLength="4"
                                                className="form-control col-md-6"
                                                value="04/24"
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>CVC</Form.Label>
                                            <Form.Control type="text" name="cvc"
                                                id="cvc"
                                                maxLength="4"
                                                className="form-control col-md-6"
                                                value="978"
                                            />
                                        </Col>
                                    </Row>

                                </FormGroup>
                            )}
                             <br/>
                        </div>
                    )}
                    {step === 3 && (
                        <div>
                            <h3><strong>Resumen</strong></h3>
                            <br/>
                            <Form.Group controlId="formStep3" >
                                <h6 style={{"font-weight":"600", "color":"#005974"}}><i>Datos de Envio</i></h6>
                                    <Row style={{"padding":"10px"}}>
                                        <Col>
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value="Laura"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>Apellido</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="apellido"
                                                value="Perez"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row style={{"padding":"10px"}}>
                                        <Col>
                                            <Form.Label>Direccion</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="direccion"
                                                value="Calle 345 Barrio D"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>Telefono/Celular</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value="0127787809"
                                                onChange={handleInputChange}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <FormGroup className="form-pago">
                                    <h6 style={{"font-weight":"600", "color":"#005974","margin-top":"10px"}}><i>Datos de Pago</i></h6>
                                    <Form.Label style={{"padding":"10px"}}>Número de la tarjeta</Form.Label>
                                    <Form.Control style={{"padding":"10px"}} type="text" name="number"
                                        id="number"
                                        maxLength="16"
                                        className="form-control"
                                        value="4646 7878 3232 8888"
                                    />
                                    <Form.Label style={{"padding":"10px"}}>Nombre</Form.Label>
                                    <Form.Control style={{"padding":"10px"}} type="text" name="number"
                                        id="name"
                                        maxLength="30"
                                        className="form-control"
                                        value="Laura Perez"
                                    />
                                    <Row style={{"padding":"10px"}}>
                                        <Col>
                                            <Form.Label>Fecha de expiración</Form.Label>
                                            <Form.Control type="text" name="number"
                                                id="expiry"
                                                maxLength="4"
                                                className="form-control col-md-6"
                                                value="04/24"
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Label>CVC</Form.Label>
                                            <Form.Control type="text" name="cvc"
                                                id="cvc"
                                                maxLength="4"
                                                className="form-control col-md-6"
                                                value="978"
                                            />
                                        </Col>
                                    </Row>

                                </FormGroup>
                                <br/>
                        </div>
                    )}

                    {/* botones */}
                    <div className="d-flex justify-content-between">
                        {step > 1 && (
                        <Button variant="secondary" onClick={handlePrevious}>
                            Atrás
                        </Button>
                        )}
                        {step < 3 ? (
                        <Button variant="info" onClick={handleNext}>
                            Siguiente
                        </Button>
                        ) : (
                        <Button variant="success" onClick={() => handleShow()}>
                            Confirmar compra
                        </Button>
                        )}
                    </div>
                
                </Form>
                </Col>
                <Col  md={3}>

			        <div class="cart-totals">
			            <h5>Resumen de Carrito</h5>
                        {cartData.map(cartd => (
                            <div>
			                    <h6>{cartd.nombre_producto} {cartd.nombre_marca}</h6>
                                <p>{cartd.descripcion}</p>
                                <p> $ {cartd.precio}</p>
			                  
                                <tr class="total-row">
                                    <td>Total</td>
                                    <td class="price-total">$ {cartd.precio}</td>
                                </tr>
			                 
			                </div>
                        ))}
			        </div>
			        
                </Col>
            </Row>


            <Modal id='msjModal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pedido #1223752</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contenedor-img-icono' 
                        style={{"display": "grid","alignItems":"center"}}>
                        <img className='img-icono'
                            src={iconoConfirm} 
                            alt=''
                            style={{"width":"140px", "margin": "auto"}}/>
                    </div>
                    <div style={{"textAlign":"center", "fontSize":"17px"}}>
                        <h5><strong>¡Gracias por tu Compra!</strong></h5>
                        <br/>
                        <p>Tu pedido fue exitoso</p>
                        <p>Recibirás un correo electrónico confirmando los detalles de tu pedido</p>
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link
                        style={{"text-decoration": "none"}}
                        type='button'
                        className='btn-sm'
                        variant="secondary"
                      
                        to="/inicio">
                            Volver a Inicio
                    </Link>
                </Modal.Footer>
            </Modal>

        </div>
    );

}

export default Compra;