import React, {useEffect, useState} from 'react';
import '../../css/Categorias.css';
import { Row, Col, Modal, Button, Form, FormControl} from 'react-bootstrap';
import axios from 'axios';
import { HashLink as Link } from 'react-router-hash-link';
import { ArticuloProducto } from './ArticuloProducto';

import useTienda from '../../hooks/useTienda';

// imagenes

import bannerLimpieza from '../../imgs/banner-limpieza.svg';

const endpoint = 'http://localhost:8000';

function Categorias(){

    const [products, setProducts] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect (() => {
        getAllProducts();
        getAllCategory();
    }, []);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/productos`)
        setProducts(response.data);
    }

    const getAllCategory = async () => {
        const response = await axios.get(`${endpoint}/categorias1`)
        setCategorias(response.data);
    }

    const filtro = (category) => {
        console.log(category);
        if(category === 'All'){
            //className='categoria-elegida'
            //elemento = document.getElementById(id);
            getAllProducts();
            setProducts(products);
            return
        }
        const filtrado = products.filter(product => product.nombre_categoria === category);
        setProducts(filtrado);
    }

    // carrito
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <div>
            <div className='texto-img'>
                <div className='texto-inicio'>
                    <h3 className='tituloSimple'>Productos</h3>
                </div>
                <div className='contenedor-img' style={{}}>
                    <img className='fotoInicio'
                        src={bannerLimpieza}
                        alt='Foto Elementos de Limpieza'/>
                </div>
            </div>
            <div className='contenido'>
                <Row>
                <Col md={2}>
                    <div className='filtro-categorias'>
                        <Button id='boton-categoria' onClick={() => filtro('All')}>
                            Todos los productos
                        </Button>
                        {categorias.map((categoria) => ( 
                            <Button id='boton-categoria' key={categoria.id_categoria} 
                                onClick={() => filtro(categoria.nombre_categoria)}>
                                {categoria.nombre_categoria}
                            </Button>
                        ))}
                      
                    </div>
                </Col>
                <Col md={9}>
                    <ArticuloProducto 
                        products={products}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        total={total}
                        setTotal={setTotal}
                        countProducts={countProducts}
                        setCountProducts={setCountProducts}
                    />
                </Col>
                </Row>
            </div>
        </div>
    );


}

export default Categorias;