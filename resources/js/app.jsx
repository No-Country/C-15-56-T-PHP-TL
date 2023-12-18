// resources/js/app.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Login from "./components/Login";
import Categorias from "./components/Categorias";
import MiCuenta from "./components/MiCuenta";
import Carrito from "./components/Carrito";
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

//selector de menu
const navLinks = [
    {title: "Inicio", path:"/"},
    {title: "Categorias", path:"/categorias"},
    {title: "Contacto", path:"/contacto"},
    {title: "Inicia sesión", path:"/login"},
    {title: "Carrito", path:"/carrito"}
   
  ];


function App() {

    // carrito
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <div className="App">
            <BrowserRouter>
            <Menu 
                navLinks={navLinks}
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/contacto" element={<Inicio/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/micuenta" element={<MiCuenta/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
