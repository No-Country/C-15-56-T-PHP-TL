import React from "react";
import '../../css/Carrito.css';

import  {Button, Form, FormControl, Row, Col } from 'react-bootstrap';

function Carrito(){
    return (
    <div class="container-carrito">
        <div class="row">
            <div class="col-lg">
                
                <Row className="heading-cart">
                    <Col class="col-xs-6">
                        <h5><span class="glyphicon glyphicon-shopping-cart"></span>Carrito de Compras</h5>
                    </Col>
                    <Col class="col-xs-6">
                        <button type="button" class="btn btn-primary btn-sm btn-block">
                            <span class="glyphicon glyphicon-share-alt"></span> Continuar comprando
                        </button>
                    </Col>
                </Row>
                
                <div class="table-cart">
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="display-flex align-center">
                                        <div class="img-product">
                            
                                            <img class="img-responsive" src={"http://placehold.it/100x70"}/>
                                    
                                        </div>
                                        <div class="name-product">
                                            <h4 class="product-name"><strong>Product name</strong></h4>
                                            <h4><small>Product description</small></h4>
                        
                                            
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    <div class="price">
                                                $1,250.00
                                            </div>
                                    </td>
                                <td class="product-count">
                                    <form action="#" class="count-inlineflex">
                                        
                                        <Form.Control type="text" name="quantity" value="1" class="qty"/>
                                        
                                    </form>
                                </td>
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr/> 
                <div class="panel-footer">
                    <div class="row text-center">
                        <div class="col-xs-9">
                            <h4 class="text-right">Total <strong>$50.00</strong></h4>
                        </div>
                        <div class="col-xs-3">
                            <button type="button" class="btn btn-success btn-block">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        
        </div>
    </div>
            
    
            
        
    );
}
 
export default Carrito;