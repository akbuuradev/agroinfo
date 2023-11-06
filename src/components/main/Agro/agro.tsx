import React from 'react';
import './agro.scss'
import logo from './../../../images/logo.png'


const Agro = () => {
    return (
        <div id="agro">
            <div className="container">
                <div className="agro">
                    <img className="agro--images" src={logo} alt=""/>
                    <img className="agro--image" src={logo} alt=""/>
                    <h1>Агро.КГ - Надёжный партнер и помощник вашего Агро хозяйства</h1>
                    <p>Мы стремимся сделать сельское хозяйство более эффективным и устойчивым, предоставляя сельскохозяйственным предприятиям инновационные инструменты и решения. </p>
                    <img className="agro--img" src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Agro;