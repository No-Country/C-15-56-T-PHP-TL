import React from 'react';
import jabonesImage from '../../imgs/jabones.jpg';
import fotoLimpieza from '../../imgs/limpieza-dibujo.jpg'
import '../../css/Categorias.css';

function Categorias(){

    return (
        <div>
            <div className='texto-img'>
                <div className='texto-inicio'>
                    <h4>Categorias</h4>
                </div>
                <div className='contenedor-img'>
                    <img className='fotoInicio'
                        src={fotoLimpieza}
                        alt='Foto Elementos de Limpieza'/>
                </div>
            </div>
            <div className='texto-seccion'>
            <ul className='lista-categorias'>
                <li>Jabones</li>
                <li>Esponjas</li>
                <li>Perfumes</li>
                <li>Detergentes</li>
                <li>Insecticidas</li>
            </ul>
            </div>
           
        </div>
    );


}

export default Categorias;