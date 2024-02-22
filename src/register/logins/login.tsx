import { useState } from "react";
import photo from "./../../images/deatil.png";
import flower from "./../../images/flower.png";
import flowers from "./../../images/flowers.png";
import flowers2 from "./../../images/Frame2.png";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPost } from "../../store/reducer/yesSlice";
import { ILogin } from "../../type/IUser";
import { setToken } from "../../store/reducer/tokenSlice";
import "./login.scss";
import { log } from "console";

const Login = ({ setCloce }: any) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [login, setLogin] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://34.125.18.221/account/log/", JSON.stringify(login), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.access);
        dispatch(setToken(res.data?.access));
        localStorage.setItem("token", res.data?.access);
        nav("/");
        // setClose(false);
      })
      .catch((er: any) => {
        console.log(er);
      });
  };

  return (
    <div id="logins">
      <div className="container">
        <div className="logins">
          <img className="flower" src={flower} alt="" />
          <div className="logins--open">
            <div className="logins--open__right">
              <div className="logins--open__right--account">
                <p className="logins--open__right--account__p">
                  Мы отправили на вашу электроную почту активационный код для
                  разрешения регистрации. Нажмите на кнопку
                  <span>Verifi account</span>
                </p>
              </div>
              <form
                onSubmit={(e) => {
                  submitLogin(e);
                }}
              >
                <h1>Email</h1>
                <input
                  onChange={handleInputChange}
                  className="logins--open__right--int"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <h1>Пароль</h1>
                <input
                  onChange={handleInputChange}
                  className="logins--open__right--int"
                  type="password"
                  name="password"
                  placeholder="Пароль"
                />
                <button className="logins--open__right--btns3">
                  Отправить
                </button>
              </form>
              <img className="flowers" src={flowers} alt="" />
              <img className="flowers--2" src={flowers2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
