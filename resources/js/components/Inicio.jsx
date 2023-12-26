import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import '../../css/app.css';
import '../../css/Inicio.css';


import fotoLimpieza from '../../imgs/limpieza.jpg'

import jabonesImage from '../../imgs/productos/JabonLiquido.jpg';
import esponjaImg from '../../imgs/productos/JabonLiquido.jpg';
import perfumeImg from '../../imgs/productos/JabonLiquido.jpg';

import axios from 'axios';

<img className='img-categoria' src={jabonesImage} alt=''/>
const endpoint = 'http://localhost:8000';


function Inicio(){
   
    const location = useLocation();
    const sesion = new URLSearchParams(location.search).get('sesion');

    const [categorias, setCategorias] = useState([]);

    useEffect (() => {
        getAllCategory();
    }, []);

    const getAllCategory = async () => {
        const response = await axios.get(`${endpoint}/categorias1`)
        setCategorias(response.data);
    }

    const ruta = "C:/Users/Migue/Desktop/Proyecto NoCountry/C-15-56-T-PHP-TL-Frontend/resources/imgs/productos";
    
    //selector de menu
    const navLinks = [
    {title: "Inicio", path:"/"},
    {title: "Productos", path:"/categorias"},
    {title: "Contacto", path:"/contacto"},
    {title: "Inicia sesión", path:"/login"},
    ];

    const navLinks2 = [
    {title: "Inicio", path:"/"},
    {title: "Productos", path:"/categorias"},
    {title: "Contacto", path:"/contacto"},
    {title: "Hola "+sesion, path:"/login"},
    {title: "Carrito", path:"/carrito"}
    ];
    return(
        <div className='inicio'>
            {/* {sesion ?
                

        } */}
        <div className='contenedor-inicio'>
            <div className='texto-img'>
                <div className='texto-inicio'>
                    <h2>Bienvenido a <strong className='tituloLogo'>Merkatodo</strong></h2>
                    <p className='frase'><i>La limpieza nunca fue tan sencilla y satisfactoria</i></p>
                    <p className='frase'><i>Encuentra tus aliados perfectos aqui</i></p>
                </div>
                <div className='contenedor-img' style={{"height": "280px", "width":"600px"}}>
                    <img className='fotoInicio'
                        src={fotoLimpieza}
                        alt='Foto Elementos de Limpieza'/>
                </div>
            </div>
            <hr className='linea-sep'/>
        
            <div className='servicios'>
            <h4>Conoce nuestros servicios</h4>
            <div className="row mt-5">
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div className="card">
						<div className="card-block block-1">
							<h5 className="card-title">Amplia Variedad de Productos:</h5>
							<p className="card-text">
                                Ofrecemos una amplia gama de productos de limpieza, desde detergentes y 
                                desinfectantes hasta cepillos y aspiradoras. 
                                Contamos con marcas reconocidas para garantizar la calidad de cada artículo.
                                </p>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div className="card">
						<div className="card-block block-2">
							<h5 className="card-title">Asesoramiento Personalizado</h5>
							<p className="card-text">Nuestro equipo de expertos en limpieza está disponible para brindarte asesoramiento
                             personalizado. Ya sea que necesites ayuda para elegir el producto adecuado o consejos 
                             sobre técnicas de limpieza, estamos aquí para ayudarte.</p>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div className="card">
						<div className="card-block block-3">
							<h5 className="card-title">Entrega a Domicilio:</h5>
							<p className="card-text">Simplificamos tu vida ofreciendo servicios de entrega a domicilio. 
                            Realiza tu pedido desde la comodidad de tu hogar y recibelo en la puerta de tu casa en el 
                            menor tiempo posible.</p>
						</div>
					</div>
				</div>
			</div>
            </div>
                
            
            <div className='texto-seccion'>
                <h4>Explora nuestras categorías</h4>

                <div className='seccion-categorias' >
                    {categorias.map((categoria) => (
                        <div className='categoria' key={categoria.id_categoria}>
                            <div className='contenedor-img-categoria'>
                                <img className='img-categoria' src={categoria.imagen} alt='aqui una img'/>
                            </div>
                            <h6 className='titulo-categoria'>{categoria.nombre_categoria}</h6>
                        </div>
                    ))}


                </div>
            </div>

        <div className='footer'>

        <footer class="deneb_footer">
	{/* <div class="widget_wrapper">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<p><i>La limpieza nunca fue tan sencilla y satisfactoria</i></p>
                        <p><i>Encuentra tus aliados perfectos aqui</i></p>
						<ul class="social">
							<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h5>Contáctanos</h5>
						</div>
						<div class="contact_info">
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-phone-alt"></i>
								</div>
								<div class="info">
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-envelope"></i>
								</div>
								<div class="info">
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div class="single_info">
								<div class="icon">
									<i class="fas fa-map-marker-alt"></i>
								</div>
								<div class="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
	<div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p>MERKATODO | Copyright &copy; 2023 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

        </div>
        </div>
        </div>
    );

}

export default Inicio;