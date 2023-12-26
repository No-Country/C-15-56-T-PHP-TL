import React, {useState, useEffect} from "react";
import '../../css/Carrito.css';
import Compra from "./Compra";
import  {Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';

function Carrito(){

    const location = useLocation();
    const cartData = location.state.cartData || [];
    const [precioTotal, setPrecioTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    const guardarCarrito = () => {
        cartData.map(cart => (
            setPrecioTotal(cart.precio)
        ));

    }
    useEffect(() => {
        guardarCarrito();
    }, []);

    return (
    <div className="container-carrito">
        <div className="row">
            <div className="col-lg">
                
                <Row className="heading-cart">
                    <Col className="col-xs-6">
                        <h4 className="tituloSimple">Carrito de Compras</h4>
                    </Col>
                </Row>
                
               <Row>
                    <Col md={12}>
                        <div className="table-cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartData.map(cart => (
                        
                            <tr key={cart.id_productos}>
                                <td>
                                    <div className="display-flex align-center">
                                        <div className="img-product">
                                            <img className="img-responsive" src={cart.imagen}/>
                                        </div>
                                        <div className="name-product">
                                            <h4 className="product-name"><strong>{cart.nombre_producto} {cart.nombre_marca}</strong></h4>
                                            <h4><small>{cart.descripcion}</small></h4>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="price">$ {cart.precio}</div>
                                    
                                </td>
                                <td className="product-count">
                                    <form action="#">
                                        <Form.Control type="text" name="quantity" min="1" className="qty" placeholder="1"/>
                                    </form>
                                </td>
                            </tr>
        
                            ))} 
                        </tbody>
                    </table>
                        </div>
                        <hr/> 
                        <div className="panel-footer">
                            <Row className="row text-center">
                                <Col className="col-xs-3">
                                    <Link className="btn btn-info btn-sm btn-block" to={'/'}>
                                        Continuar comprando
                                    </Link>
                                </Col>
                                <Col>
                                    <h4>Total <strong class="price-total">$ {precioTotal}</strong></h4>
                                </Col>
                                <Col>
                                    <Link className="btn btn-success btn-sm btn-block" 
                                        to="/compra"
                                        state={{cartData} }>
                                        Terminar Compra</Link>
                                </Col>
                            </Row>
                        
                        </div>
                    </Col>
               </Row>
                
                 
            </div>
        </div>
    </div>          
        
    );
}
 
export default Carrito;