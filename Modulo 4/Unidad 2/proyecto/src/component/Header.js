import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import responsive from "../img/responsive.png";

const Header = () => {
    return (
        <>
          <nav>
          <ul>
            <img className="imgHeader" src={responsive} height="47"/>
            <li><Link to="/contactanos">Contactanos</Link></li>
            <li><Link to="/procesos">Procesos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/">Inicio</Link></li>
            
        </ul>
         </nav>
         <section>
          <Outlet/>
        </section>
    </>
    )
}


export default Header;