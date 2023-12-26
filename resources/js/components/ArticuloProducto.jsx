import { useState, useEffect } from 'react';
import {Button, Modal, Row, Col, Form, ModalBody} from 'react-bootstrap';

import useTienda from '../../hooks/useTienda';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const ArticuloProducto = ({products, allProducts, setAllProducts}) => {

    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        setSelectedProduct({});
    }, [products]);

    // cerrar modal
    const handleClose = () => {
        setShow(false);
        setSelectedProduct({});
    }
    // abrir modal
    const handleShow = (productId) => {
        const product = products.find((product) => product.id_productos === productId);
        
        //const product = productid;
        setSelectedProduct(product);
        setShow(true);
    }

    const [cartData, setCartData] = useState([]);

    const agregaCarrito = product =>{
        if(allProducts.find(item => item.id === product.id_productos)){
            const productos = allProducts.map(item => item.id === product.id_productos 
                ? {...item, quantity: item.quantity + 1} 
                : item
            );
            return setAllProducts([...productos])
        }
        //alert("Debes loguearte para realizar esta compra");
        setAllProducts([...allProducts, product]);
        setCartData([...allProducts, product]);
        
    };
   
    const {addToCart } = useCart();

    return (
        <div>
            <Row>
                <Col className='seccion-productos'>
                    {products.map(product => (
                    <div className='producto' key={product.id_productos}>
                        <div className='contenedor-img-producto'>
                            <img className='img-producto' src={product.imagen} alt={product.nombre_producto}/>
                        </div>
                        <Button id='titulo-producto' onClick={() => handleShow(product.id_productos)}>
                            <h6>{product.nombre_producto} {product.nombre_marca}</h6>
                        </Button>

                        <p className='precio-producto'>$ {product.precio}</p>
                        <Button className='btn-sm' variant="success" onClick={() => addToCart(product)}>
                            Agregar al carrito
                        </Button>
                    </div>
                ))}
                </Col>
                
            </Row>

            
            {/* Modal Vista de Producto */}

            <Modal id='productDetailsModal' show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Producto: {selectedProduct.nombre_producto} {selectedProduct.nombre_marca}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contenedor-img-productoE'>
                        <img className='img-productoE' src={selectedProduct.imagen} alt=''/>
                    </div>
                    <div style={{"textAlign":"center", "fontSize":"17px"}}>
                        <p>{selectedProduct.descripcion}</p>
                        <p>{selectedProduct.nombre_categoria}</p>
                    </div>
                    <Row>
                        <Col><p className='precio-producto'>$ {selectedProduct.precio}</p></Col>
                        <Col>
                            <Form>
                                <Form.Control type="number" min={1} placeholder='1'/>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => agregaCarrito(selectedProduct)}>
                        Agregar al carrito
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

