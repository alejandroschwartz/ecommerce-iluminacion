import React from 'react';

import '../styles/components/Layout.scss';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                { children }
            <SocialMedia />    
            <Footer />
        </div>
    )
}

export default Layout;