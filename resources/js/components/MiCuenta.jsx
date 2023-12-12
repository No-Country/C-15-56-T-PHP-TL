import React, {useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import '../../css/app.css';


export function MiCuenta(props) {

    
    return (
        <div>
            <h2>Bienvenido {props.usuario.toUpperCase()}</h2>
        </div>
    );
}
 
export default MiCuenta;