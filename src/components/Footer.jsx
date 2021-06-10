import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer__div">
                    <p className="footer__div--p">Diseño de página: <br /> <br />
                        <strong>Alejandro Matías Schwartz</strong> <br />
                        <small>Ciudad de Córdoba, Argentina</small>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;