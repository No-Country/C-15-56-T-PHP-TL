import react from "react";
import ReactDOM from "react-dom";
function App() {
    return (
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        {/* <div className='seccion-productos'>
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

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}