import React, { useEffect, useState } from "react";
import agro from "./../../images/agro1.png";
import info from "./../../images/info.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./header.scss";
import "aos/dist/aos.css"; // Импортируйте CSS стили AOS
import AOS from "aos";
import Regist from "../../register/regist";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppState } from "../../store/store";
import Login from "../../register/logins/login";
import Words from "../../register/words/words";

const Header = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);
  // const { post } = useSelector((state: any) => state.YesSlice);
  const token = useSelector((state: AppState) => state.TokenSlice.token);
  const user = localStorage.getItem("users");
  console.log("user", user ? "true" : "false");

  useEffect(() => {
    // Инициализация AOS
    AOS.init();
  }, [user]);

  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header--logo">
              <img
                className="header--logo__agro"
                src={agro}
                alt=""
                data-aos="fade-down"
              />
              <img
                className="header--logo__info"
                src={info}
                alt=""
                data-aos="fade-down"
              />
            </div>
            <NavLink onClick={() => window.scroll(0, 0)} to={"/"}>
              Главная
            </NavLink>
            <NavLink onClick={() => window.scroll(0, 0)} to={"/о нас"}>
              О нас
            </NavLink>
            <a onClick={() => window.scroll(0, 750)}>Категории</a>
            <NavLink
              onClick={() => window.scroll(0, 0)}
              to={"/покупка/продажа"}
            >
              Покупка/Продажа
            </NavLink>
            {token ? (
              <div>
                <NavLink to={"/sub_profile"}>
                  <button className="header--btnse" data-aos="fade-down">
                    Профиль
                  </button>
                </NavLink>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    window.scroll(0, 0);
                    setClose(true);
                  }}
                  className="header--btns"
                  data-aos="fade-down"
                >
                  Регистрация
                </button>
              </div>
            )}
            <button className="header--button" data-aos="fade-down">
              <AiOutlineGlobal />
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: close ? "" : "none" }} className="lol">
тз        <Regist open={open} setClose={setClose} setOpen={setOpen} />
      </div>
      <div
        style={{ display: close === null ? "block" : "none" }}
        className="lol"
      >
        <Login setCloce={setClose} />
      </div>
      <div
        className="lol"
        style={{ display: close === undefined ? "block" : "none" }}
      >
        <Words />
      </div>
    </div>
  );
};

export default Header;
