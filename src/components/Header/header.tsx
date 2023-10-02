import React, { useEffect } from "react";
import agro from './../../images/agro1.svg'
import info from './../../images/info.svg'
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.scss";
import 'aos/dist/aos.css'; // Импортируйте CSS стили AOS
import AOS from 'aos';

const Header = () => {
    useEffect(() => {
        // Инициализация AOS
        AOS.init();
    }, []);
    return (
        <div>
            <div id="header" >
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
                            <img src={agro} alt="" style={{ width: "45%" }} data-aos="fade-down"/>
                            <img src={info} alt="" style={{ width: "75%" }} data-aos="fade-down"/>
                        </div>
                        <NavLink to={"/"}>Главная</NavLink>
                        <NavLink to={"/о нас"}>О нас</NavLink>
                        <NavLink to={"/категории"}>Категории</NavLink>
                        <NavLink to={"/покупка/продажа"}>Покупка/Продажа</NavLink>
                        <button className="header--btn" data-aos="fade-down">
                           Войти
                        </button>
                        <button className="header--btns" data-aos="fade-down">
                            Регистрация
                        </button>
                        <button className="header--button" data-aos="fade-down">
                            <AiOutlineGlobal />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
