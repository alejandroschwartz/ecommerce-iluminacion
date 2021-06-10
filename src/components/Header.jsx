import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className="Header" >
            <div className="Header__container" >
                <h1 className="Header__title" >
                    El Altillo
                </h1>
                <ul className="Header__menu" >
                    <Link to="/inicio" className="Header__menu--list" >
                        Inicio
                    </Link>
                    <Link to="/" className="Header__menu--list" >
                        Productos
                    </Link>
                    <Link to="/sobre-mi" className="Header__menu--list" >
                        Sobre mí
                    </Link>
                    <Link to="/contacto" className="Header__menu--list" >
                        Contactos
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;