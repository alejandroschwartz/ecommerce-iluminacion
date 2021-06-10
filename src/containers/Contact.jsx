import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Contant.scss';

const Contact = () => {
    return (
        <>  
            <div className="Contact__text" >
                <h1>Contacto</h1>
                <h2>Sigueme y ve las ultimas novedades en las siguientes redes sociales.</h2>
            </div>
            <div className="Contact__icons" >
                <Link to="/" className="Contact__icon" >
                    <i className="fab fa-facebook-square"></i>
                </Link>
                <Link to="/" className="Contact__icon" >
                    <div className="Instagram">
                        <span className="Instagram__center" ></span>
                    </div>
                </Link>
                <Link to="/" className="Contact__icon" >
                    <i className="fab fa-linkedin"></i>
                </Link>
            </div>
            <br/>
        </>
    )
}

export default Contact;