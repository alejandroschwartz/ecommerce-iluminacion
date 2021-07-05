import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';

const Header = () => {

    const [ nav, setNav ] = useState(false);

    return (
        <header className="Header" >
            <div className="Header__container" >
                <div className="Header__title" >
                    <h1>Cálculo de iluminación</h1>
                </div>
                <button className="Header__icon" onClick={() => setNav(!nav)} >
                    {nav === true 
                        ? <i className='fas fa-times'></i>
                        : <i className='fas fa-bars'></i>
                    }
                </button>
                <ul className={nav === false ? "Header__menu" : "Header__menu--active"} onClick={() => setNav(!nav)} >  
                    <Link to="/" className="Header__menu--list" >
                        Inicio
                    </Link>
                    <Link to="/descripcion" className="Header__menu--list" >
                        Descripción
                    </Link>
                    <Link to="/sobre-mi" className="Header__menu--list" >
                        Sobre mí
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;