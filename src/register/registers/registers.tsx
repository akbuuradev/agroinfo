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
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [error, setError] = useState(0);
  const [error1, setError1] = useState(0);
  const [error2, setError2] = useState(0);
  const [none, setNone] = useState("opens--group__right--inputs");
  const [none1, setNone1] = useState("opens--group__right--inputs");
  const [none2, setNone2] = useState("opens--group__right--inputs");

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
  function Value1(e: any) {
    setValue1(e.target.value);
    setError(0);
  }
  function Value2(e: any) {
    setValue2(e.target.value);
    setError1(0);
  }
  function Value3(e: any) {
    setValue3(e.target.value);
    setError2(0);
  }
 

  const submitRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("LOGIN", login);
    if (value3 !== value2) {
      setError2(1);
      return;
    }
    const registr = axios
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
    // localStorage.setItem("users",JSON.stringify(user))
    console.log("USER", registr);
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
          <form
            onSubmit={(e: any) => {
              // if (value3 !== value2) {
              //   e.preventDefault();
              // }
              // if (
              //     value1.length === 0 ||
              //     value2.length === 0 ||
              //     value3.length === 0
              //   ) {
              e.preventDefault();
            }}
          >
            <h4>Email</h4>
            <input
              style={{
                border: error === 1 ? "2px solid red" : "",
                outline: "none",
              }}
              onChange={(e) => {
                handleInputChange(e);
                Value1(e);
              }}
              className={`${none} ${error === 1 ? "placehol" : ""}`}
              name="email"
              type="email"
              placeholder="Email"
            />
            <small
              style={{
                visibility: error === 1 ? "initial" : "hidden",
              }}
              className="opens--group__right--errors"
            >
              Error message
            </small>

            <h4>Пароль</h4>
            <input
              style={{
                border: error1 === 1 ? "2px solid red" : "",
                outline: "none",
              }}
              onChange={(e) => {
                handleInputChange(e);
                Value2(e);
              }}
              className={`${none1} ${error1 === 1 ? "placehol" : ""}`}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <small
              style={{
                visibility: error1 === 1 ? "inherit" : "hidden",
              }}
              className="opens--group__right--errors"
            >
              Error message
            </small>
            <h4>Подвердить пароль </h4>
            <input
              style={{
                border: error2 === 1 ? "2px solid red" : "",
                outline: "none",
              }}
              onChange={(e) => {
                handleInputChange(e);
                Value3(e);
              }}
              className={`${none2} ${error2 === 1 ? "placehol" : ""}`}
              type="password"
              name="password_confirm"
              placeholder="Пароль"
            />
            <small
              style={{
                visibility: error2 === 1 ? "inherit" : "hidden",
              }}
              className="opens--group__right--errors"
            >
              Error message
            </small>
            <div className="opens--group__right--google">
              <img src={google} alt="" />
            </div>

            <button
              className="opens--group__right--btn3"
              onClick={(e) => {
                if (login.email.length === 0) {
                  setError(1);
                  setNone("shake");
                  setTimeout(() => {
                    setNone("opens--group__right--inputs");
                  }, 600);
                }
                if (login.password.length === 0) {
                  setError1(1);
                  setNone1("shake");
                  setTimeout(() => {
                    setNone1("opens--group__right--inputs");
                  }, 600);
                }
                if (login.password_confirm.length === 0) {
                  setError2(1);
                  setNone2("shake");
                  setTimeout(() => {
                    setNone2("opens--group__right--inputs");
                  }, 600);
                }
                if (
                  login.email.length !== 0 &&
                  login.password.length !== 0 &&
                  login.password_confirm.length !== 0 &&
                  value3 === value2
                ) {
                  submitRegister(e);
                  window.scroll(0, 0);
                  setClose(null);
                } else {
                  setError2(1);
                  setNone2("shake");
                  setTimeout(() => {
                    setNone2("opens--group__right--inputs");
                  }, 600);
                }
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
