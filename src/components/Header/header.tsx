import React, {useEffect, useState} from "react";
import agro from './../../images/agro1.png'
import info from './../../images/info.png'
import {AiOutlineGlobal} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import "./header.scss";
import 'aos/dist/aos.css'; // Импортируйте CSS стили AOS
import AOS from 'aos';
import photo from './../../images/deatil.png'
import flower from './../../images/flower.png'
import flowers from './../../images/flowers.png'
import google from './../../images/google.png'
import frame1 from './../../images/Frame1.png'
import frame2 from './../../images/Frame2.png'
import {MdEmail} from "react-icons/md";

const Header = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init();
    }, []);

    const [open, setOpen] = useState(false)
    const [detail, setDetail] = useState(false)
    const [word, setWord] = useState(false)
    const [send, setSend] = useState(false)
    return (
        <div>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div
                            className="header--logo">
                            <img className="header--logo__agro" src={agro} alt=""  data-aos="fade-down"/>
                            <img className="header--logo__info" src={info} alt=""  data-aos="fade-down"/>
                        </div>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/"}>Главная</NavLink>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/о нас"}>О нас</NavLink>
                        <a onClick={() => window.scroll(0, 750)}>Категории</a>
                        <NavLink onClick={() => window.scroll(0, 0)} to={"/покупка/продажа"}>Покупка/Продажа</NavLink>
                        <button onClick={() => setOpen(true)} className="header--btns" data-aos="fade-down">
                            Регистрация
                        </button>
                        {
                            open && (
                                <div className="opens">
                                    <img className="frame1" src={frame1} alt=""/>
                                    <div className="opens--group">
                                        <div className="opens--group__right">
                                            <div className="opens--group__right--btn">
                                                <button className="opens--group__right--btn__btn1">Регистрация</button>
                                                <button onClick={() => {
                                                    setDetail(true)
                                                    setOpen(false)
                                                }} className="opens--group__right--btn__btn2">Войти</button>
                                            </div>
                                            <h4>Email</h4>
                                            <input className="opens--group__right--inputs" type="email" placeholder="Email"/>
                                            <h4>Пароль</h4>
                                            <input className="opens--group__right--inputs" type="password" placeholder="Пароль"/>
                                            <h4>Подвердить пароль </h4>
                                            <input className="opens--group__right--inputs" type="password" placeholder="Пароль"/>
                                            <div className="opens--group__right--google" >
                                                <img src={google} alt=""/>
                                            </div>
                                            <button className="opens--group__right--btn3">Отправить</button>
                                            <img className="frame2" src={frame2} alt=""/>
                                        </div>
                                        <div className="opens--group__left">
                                            <h5 onClick={() => setOpen(false)}>X</h5>
                                            <img className="opens--group__left--images" src={photo} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            detail && (
                                <div className="detail">
                                    <img className="flower" src={flower} alt=""/>
                                    <div className="detail--open">
                                        <div className="detail--open__right">
                                            <div className="detail--open__right--btns">
                                                <button onClick={() => {
                                                    setOpen(true)
                                                    setDetail(false)
                                                }} className="detail--open__right--btns__btns1">Регистрация</button>
                                                <button className="detail--open__right--btns__btns2">Войти</button>
                                            </div>
                                            <h1>Email</h1>
                                            <input className="detail--open__right--int" type="email" placeholder="Email"/>
                                            <h1>Пароль</h1>
                                            <input className="detail--open__right--int" type="password" placeholder="Пароль"/>
                                            <h3 onClick={() => {
                                                setWord(true)
                                                setDetail(false)
                                            }}>Забыли пароль?</h3>
                                            <button className="detail--open__right--btns3">Войти</button>
                                            <h2>Ещё не зарегистрированы? <span>Регистрация</span></h2>
                                            <img  className="flowers" src={flowers} alt=""/>
                                        </div>
                                        <div className="detail--open__left">
                                            <h6 onClick={() => setDetail(false)} className="detail--open__left--not">X</h6>
                                            <img className="detail--open__left--photo" src={photo} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            word && (
                                <div className="words">
                                    <div className="words--post">
                                         <div className="words--post__forgot">
                                            <h1>Забыли пароль?</h1>
                                             <p>Пожалуйста, заполните электронное письмо, и мы вышлем вам ссылку для возврата в вашу учетную запись.</p>
                                             <div className="words--post__forgot--icon">
                                                 <h4 className="words--post__forgot--icon__icons"><MdEmail/></h4>
                                                 <input className="words--post__forgot--icon__inputs" type="Email"/>
                                             </div>
                                             <div className="words--post__forgot--back">
                                                 <button onClick={() => {
                                                     setWord(false)
                                                     setDetail(true)
                                                 }} className="words--post__forgot--back__send1">Назад</button>
                                                 <button onClick={() => {
                                                     setSend(true)
                                                     setWord(false)
                                                 }} className="words--post__forgot--back__send2">Отправить</button>
                                             </div>
                                         </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            send && (
                                <div className="send">
                                    <div className="send--close">
                                        <div className="send--close__letter">
                                            <h1>Письмо отправлено!</h1>
                                            <p>Мы отправили электронное письмо на адрес y****@mail.com со ссылкой для возврата в вашу учетную запись.</p>
                                            <button onClick={() => {
                                                setSend(false)
                                            }} className="btn">Закрыть</button>
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
