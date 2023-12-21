import React, { ChangeEvent, useState } from "react";
import photo from "./../../images/deatil.png";
import google from "./../../images/google.png";
import frame1 from "./../../images/Frame1.png";
import frame2 from "./../../images/Frame2.png";
import "./registers.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setPost } from "../../store/reducer/yesSlice";
import { IState } from "../../type/IUser";
// import { getPost } from "../../store/Reducers/YesSlice";

const Registers = ({ setOpen, setClose }: any) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [login, setLogin] = useState<IState>({
    email: "",
    password: "",
    password_confirm: "",
  });


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const submitRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(login);
    axios
      .post("http://34.125.18.221/account/reg/", JSON.stringify(login), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(setPost(login));
        nav("/");
      })
      .catch((er: any) => {
        console.log(er);
      });
  };

  return (
    <div className="opens">
      <img className="frame1" src={frame1} alt="" />
      <div className="opens--group">
        <div className="opens--group__right">
          <div className="opens--group__right--btn">
            <button className="opens--group__right--btn__btn1">
              Регистрация
            </button>
            <button
              onClick={() => setOpen(false)}
              className="opens--group__right--btn__btn2"
            >
              Войти
            </button>
          </div>
          <form>
            <h4>Email</h4>
            <input
              onChange={handleInputChange}
              className="opens--group__right--inputs"
              name="email"
              type="email"
              placeholder="Email"
            />

            <h4>Пароль</h4>
            <input
              onChange={handleInputChange}
              className="opens--group__right--inputs"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <h4>Подвердить пароль </h4>
            <input
              onChange={handleInputChange}
              className="opens--group__right--inputs"
              type="password"
              name="password_confirm"
              placeholder="Пароль"
            />
            <div className="opens--group__right--google">
              <img src={google} alt="" />
            </div>

            <button
              className="opens--group__right--btn3"
              onClick={(e) => {
                submitRegister(e)
                window.scroll(0,0)
              }}
            >
              Отправить
            </button>
          </form>
          <img className="frame2" src={frame2} alt="" />
        </div>
        <div className="opens--group__left">
          <h5 onClick={() => setClose(false)}>X</h5>
          <img className="opens--group__left--images" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registers;
