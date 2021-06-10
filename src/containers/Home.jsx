import React from 'react';

import '../styles/components/Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home__image--container">
                <img
                    className="Home__image"
                    src="https://i.imgur.com/GCa6cV5.jpg"
                    alt="Imagen del local"
                />
            </div>
            <div className="About__text--container" >
                <h1 className="About__h1" >Gran Altillo - Muebles Antiguos</h1>
            </div>
            <div className="Home__grid">
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/bQZ0Trk.jpg?1" alt="" />
                </div>
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/fNSyZyH.jpg" alt="" />
                </div>
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/8NRlbvc.jpg" alt="" />
                </div>
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/bvPOA41.jpg" alt="" />
                </div>
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/VSJKLzp.jpg" alt="" />
                </div>
                <div className="Home__grid--item">
                    <img className="Home__grid--image" src="https://i.imgur.com/ioUQ40N.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;