import React, {useEffect, useState} from "react";
import agro from './../../images/agro1.svg'
import info from './../../images/info.svg'
import {AiOutlineGlobal} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import "./header.scss";
import 'aos/dist/aos.css'; // Импортируйте CSS стили AOS
import AOS from 'aos';
import photo from './../../images/deatil.png'
import flower from './../../images/flower.png'
import flowers from './../../images/flowers.png'
import google from './../../images/google.png'
import facebook from './../../images/facebook.png'
import frame1 from './../../images/Frame1.png'
import frame2 from './../../images/Frame2.png'

const Header = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init();
    }, []);

    const [detail, setDetail] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div
                            className="header--logo"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img src={agro} alt="" style={{width: "45%"}} data-aos="fade-down"/>
                            <img src={info} alt="" style={{width: "75%"}} data-aos="fade-down"/>
                        </div>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/"}>Главная</NavLink>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/о нас"}>О нас</NavLink>
                        <a onClick={() => window.scroll(0, 750)}>Категории</a>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/покупка/продажа"}>Покупка/Продажа</NavLink>
                        <button onClick={() => setDetail(true)} className="header--btn" data-aos="fade-down">
                            Войти
                        </button>
                        {
                            detail && (
                                <div className="open">
                                    <div className="open--detail">
                                        <img className="open--detail__flower" src={flower} alt=""/>
                                        <div className="open--detail__right">
                                            <div className="open--detail__right--text">
                                                <h2 onClick={() =>
                                                    setOpen(true)
                                                }>Регистрация</h2>
                                                <button className="btn">Вход</button>
                                            </div>
                                            <h4>Email</h4>
                                            <input placeholder="Email" type="email"/>
                                            <h4>Пароль</h4>
                                            <input placeholder="Пароль" type="password"/>
                                            <h3>Забыли пароль?</h3>
                                            <button>Войти</button>
                                            <h5>Ещё не зарегистрированы? <span>Регистрация</span></h5>
                                            <img className="flowers" src={flowers} alt=""/>
                                        </div>

                                        <div className="open--detail__left">
                                            <h6 onClick={() => setDetail(false)}>X</h6>
                                            <img className="images" src={photo} alt=""/>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        <button onClick={() => setOpen(true)} className="header--btns" data-aos="fade-down">
                            Регистрация
                        </button>
                        {
                            open && (
                                <div className="opens">
                                    <div className="opens--group">
                                        <img className="opens--group__images" src={frame1} alt=""/>
                                        <div className="opens--group__right">
                                            <div className="opens--group__right--btns">
                                                <button className="btn">Регистрация</button>
                                                <h2 onClick={() => setDetail(true)}>Вход</h2>
                                            </div>
                                            <h3>ФИО</h3>
                                            <input placeholder="ФИО" type="name"/>
                                            <h3>Номер  телефона</h3>
                                            <input placeholder="Номер  телефона" type="number"/>
                                            <h3>Пароль</h3>
                                            <input placeholder="Пароль" type="password"/>
                                            <div className="opens--group__right--icon">
                                                <img src={google} alt=""/>
                                                <img className="facebook" src={facebook} alt=""/>
                                            </div>
                                            <button>Отправить</button>
                                            <img className="frame2"  src={frame2} alt=""/>
                                        </div>
                                        <div className="opens--group__left">
                                            <h6 onClick={() => setOpen(false)}>X</h6>
                                            <img className="frame" src={photo} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <button className="header--button" data-aos="fade-down">
                            <AiOutlineGlobal/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
