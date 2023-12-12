import React, {useRef, useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import '../../css/app.css';
import { Link } from 'react-router-dom';
import MiCuenta from './MiCuenta';

function Login({setUser }){

    const userRef = useRef();
    const errorRef = useRef();
    
    const [show, setShow] = useState(true);
    
    const [logueado, setLogueado] = useState(false);
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState(false);

    const [userFocus, setUserFocus] = useState(false);


    const user_validation = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const clave_validation =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(usuario === "" || clave === ""){
            alert("Ingresa los datos en el formulario");
            //setError(true);
            return
        } else{
            if(usuario === "admin" && clave === "123"){
                setLogueado(true);
                
                
            
            }else{
                setLogueado(false);
                alert("El correo electrónico o la contraseña no son correctas");
                // <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                //   El correo electrónico o la contraseña no son correctas</Alert>
            }
        }
        setError(false)
    }

    return(
        
            <div className='contenedor-login'>
                <div className='texto-login'>
                    <p className='texto-iniciasesion'>Inicia Sesión</p>
                    <p>Por favor, ingresa tu correo electrónico y contraseña</p>
                </div>

                <div className='contenedor-form'>
                {logueado === true && <MiCuenta usuario={usuario}/>}
                    <Form>
                        <Form.Control id='campoU' type='text' className='input-login' placeholder='Correo electrónico'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}/>
                    
                        <Form.Control id='campoC' type='password' className='input-login' placeholder='Contraseña'
                            value={clave}
                            onChange={(e) => setClave(e.target.value)} />
                
                        <p className='texto-extra'><i>¿Olvidaste tu contraseña?</i></p>
                    
                        <Button type='submit' className='boton-login' id='boton-login' onClick={handleSubmit}>Inicia sesión</Button>
                    </Form>

                   

                    {/* {error && 
                        <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                            Ingresa tus datos en el formulario</Alert>} */}
                </div>
                <div>
                    <p className='texto-extra'><i>¿No tienes una cuenta aun? 
                        <Link className='registro' to={"/"} > Registrate</Link></i></p>
                </div>
                
                <div >
                    <p className='pie'>MERKATODO @ 2023</p>
                </div>
            </div>
    );
}



export default Login;
