// resources/js/app.jsx
import React from "react";
import ReactDOM from "react-dom";
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Login from "./components/Login";
import Categorias from "./components/Categorias";
import MiCuenta from "./components/MiCuenta";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//selector de menu
const navLinks = [
    {title: "Inicio", path:"/"},
    {title: "Categorias", path:"/categorias"},
    {title: "Contacto", path:"/contacto"},
    {title: "Inicia sesión", path:"/login"}
   
  ];

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Menu navLinks={navLinks}/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/contacto" element={<Inicio/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/micuenta" element={<MiCuenta/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
