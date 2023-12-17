import React, { ChangeEvent, useState } from "react";
import photo from "./../../images/deatil.png";
import google from "./../../images/google.png";
import frame1 from "./../../images/Frame1.png";
import frame2 from "./../../images/Frame2.png";
import "./registers.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getPost } from "../../store/reducer/yesSlice";
// import { getPost } from "../../store/Reducers/YesSlice";

const Registers = ({ setOpen, setClose,}: any) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const {post}: any = useSelector((state) => state)

  // const submitRegister = async () => {
  //   fetch("http://34.30.6.145/account/reg/", {
  //     method: "POST",
  //     body: JSON.stringify(post),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       return res.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       // change redux
  //       // dispatch(getPost);
  //       if (Boolean(post)) {
  //         nav("/");
  //       }
  //     })
  //     .catch((er: any) => {
  //       console.log(er);
  //     });
  // };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(getPost({ ...post, [name]: value }));
  };

 

  const submitRegister = async () => {
    try {
      const response = await axios.post(
        'http://34.30.6.145/account/reg/',
        post,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
      dispatch(getPost(response.data));

      if (Boolean(post)) {
        nav('/');
      }
    } catch (err) {
      console.error(err);
    }
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

            <button onClick={()=>{
              submitRegister()
            }} className="opens--group__right--btn3">Отправить</button>
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
