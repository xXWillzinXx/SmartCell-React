import React from 'react';
import landingLogo from './Img/landing-page-logo.svg';

import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className="main-text">
                <h1 className='text'>A maior loja de smartphones e <br></br>acessórios mobile do Brasil!</h1>
                <button className='main-button'>Acesse o nosso catálogo {'>'} </button>
            </div>

            <div>
                <img className="img" src={landingLogo} alt='logo da pagina principal'></img>
            </div>
        </div>
    );
}

export default Main;