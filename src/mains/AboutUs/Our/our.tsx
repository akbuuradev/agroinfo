import React from 'react';
import './our.scss'
import slider1 from './../../../images/slider1.png'
import slider2 from './../../../images/slider2.png'
import slider3 from './../../../images/slider3.png'
import slider4 from './../../../images/slider4.jpg'

const Our = () => {
    return (
        <div id="our">
            <div className="container">
                <div className="our">
                    <h1>Ваш успех- Наш успех!</h1>
                    <div className="our--slider">
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider1} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider2} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider3} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider4} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider1} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider2} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider3} alt=""/>
                        </div>
                        <div className="our--slider__block">
                            <img className="our--slider__block--images" src={slider4} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our;