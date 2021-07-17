import React from 'react';

import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import '../assets/styles/SocialMedia.scss';

const SocialMedia = () => {
    return (
        <div className="SocialMedia">
            <a className="SocialMedia__container" href="https://www.linkedin.com/in/alejandro-matias-schwartz/">
                <figure className="SocialMedia__figure">
                    <img src={linkedin} alt="Logo linkedin" />
                </figure>
            </a>
            <a className="SocialMedia__container" href="https://github.com/alejandroschwartz">
                <figure className="SocialMedia__figure">
                    <img src={github} alt="Logo github" />
                </figure>
            </a>
            <a className="SocialMedia__container" href="https://twitter.com/_alejandrosch_">
                <figure className="SocialMedia__figure">
                    <img src={twitter} alt="Logo twitter" />
            </figure>
            </a>
            <a className="SocialMedia__container" href="https://www.instagram.com/alejandro_schwartz_dev/">
                <figure className="SocialMedia__figure">
                    <img src={instagram} alt="Logo instagram" />
                </figure>
            </a>
        </div>
    );
}

export default SocialMedia;