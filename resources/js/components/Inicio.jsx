import React from 'react';
import '../../css/app.css';
import fotoLimpieza from '../../imgs/limpieza-dibujo.jpg'
import '../../css/Inicio.css';

import jabonesImage from '../../imgs/jabones.jpg';
import esponjaImg from '../../imgs/esponjas.jpg';
import perfumeImg from '../../imgs/perfumes.jpg';
import limpiadorImg from '../../imgs/limpiadores.jpg';
import papel from '../../imgs/papeles.webp';
import insectos from '../../imgs/insecticida.webp';

<img className='img-categoria' src={jabonesImage} alt=''/>

function Inicio(){
    return(
        <div className='inicio'>
           

        <div className='contenedor-inicio'>
            <div className='texto-img'>
                <div className='texto-inicio'>
                    <h2>Bienvenido a Merkatodo</h2>
                    <p>Utiles de aseo al por mayor</p>
                </div>
                <div className='contenedor-img'>
                    <img className='fotoInicio'
                        src={fotoLimpieza}
                        alt='Foto Elementos de Limpieza'/>
                </div>
            </div>
            <hr className='linea-sep'/>
        
            <div className='texto-seccion'>
                <h4>Explora nuestras categorías</h4>
                <div className='seccion-categorias' >
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={jabonesImage} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Jabones</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={esponjaImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Esponjas</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={perfumeImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Perfumes</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={papel} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Papeleria</h6>
                    </div>

                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={limpiadorImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Detergentes</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={limpiadorImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Insecticidas</h6>
                    </div>
                </div>
            </div>

            <div className='texto-seccion'>
                <h4>Conoce las marcas mas elegidas</h4>
                <div className='seccion-categorias' >
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={jabonesImage} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Rexona</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={esponjaImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>ALA</h6>
                    </div>
                    <div className='categoria'>
                        <div className='contenedor-img-categoria'>
                            <img className='img-categoria' src={perfumeImg} alt=''/>
                        </div>
                        <h6 className='titulo-categoria'>Poett</h6>
                    </div>
                    
                </div>
            </div>
        <div >
            <p className='pie'>MERKATODO @ 2023</p>
        </div>
        </div>
        </div>
    );

}

export default Inicio;