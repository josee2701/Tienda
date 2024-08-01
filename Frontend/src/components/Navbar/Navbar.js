// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <input type="text" className="form-control w-25" placeholder="Buscar..." />
      </ul>
      
    </nav>
  );
}

export default Navbar;
