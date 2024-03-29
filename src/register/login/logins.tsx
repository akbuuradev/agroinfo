import { useState } from "react";
import photo from "./../../images/deatil.png";
import flower from "./../../images/flower.png";
import flowers from "./../../images/flowers.png";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPost } from "../../store/reducer/yesSlice";
import { ILogin } from "../../type/IUser";
import { setToken } from "../../store/reducer/tokenSlice";

const Logins = ({ setOpen, setClose }: any) => {
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
        setClose(false);
      })
      .catch((er: any) => {
        // console.log(er);
      });
  };

  return (
    <div>
      <div className="detail">
        <img className="flower" src={flower} alt="" />
        <div className="detail--open">
          <div className="detail--open__right">
            <div className="detail--open__right--btns">
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="detail--open__right--btns__btns1"
              >
                Регистрация
              </button>
              <button className="detail--open__right--btns__btns2">
                Войти
              </button>
            </div>
            <form onSubmit={(e) => submitLogin(e)}>
              <h1>Email</h1>
              <input
                onChange={handleInputChange}
                className="detail--open__right--int"
                type="email"
                placeholder="Email"
                name="email"
              />
              <h1>Пароль</h1>
              <input
                onChange={handleInputChange}
                className="detail--open__right--int"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <h3 onClick={() => setClose(undefined)}>Забыли пароль?</h3>
              <button className="detail--open__right--btns3">Войти</button>
            </form>
            <h2>
              Ещё не зарегистрированы? <span>Регистрация</span>
            </h2>
            <img className="flowers" src={flowers} alt="" />
          </div>
          <div className="detail--open__left">
            <h6
              onClick={() => setClose(false)}
              className="detail--open__left--not"
            >
              X
            </h6>
            <img className="detail--open__left--photo" src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
