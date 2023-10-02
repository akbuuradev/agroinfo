import React from 'react';
import unique from './../../../images/unique.png'
import './unique.scss'

const Unique = () => {
    return (
        <div id="unique">
            <div className="container">
                <h1>Уникальные возможности</h1>
                <div className="unique">
                    <img src={unique} alt=""/>
                    <div className="unique--block">
                        <p>
                            Наша агро платформа предоставляет интегрированные решения для мониторинга и управления сельскохозяйственными операциями, а также доступ к данным и аналитике для принятия обоснованных решений. Мы помогаем фермерам сэкономить время и ресурсы, что ведет к увеличению урожайности и прибыли.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Unique;