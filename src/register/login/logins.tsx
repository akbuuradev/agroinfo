import React from "react";
import { useState } from "react";
import photo from "./../../images/deatil.png";
import flower from "./../../images/flower.png";
import flowers from "./../../images/flowers.png";
import axios from "axios";
import { on } from "events";


interface IState {
  email: string;
  password: string;
}

const Logins = ({ setOpen, setClose }: any) => {
  const [detail, setDetail] = useState(false);
  const [word, setWord] = useState(false);

// const [login, setLogin] = useState<IState>({
//     email: "",
//     password: ""
// })

function onChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { value, name } = e.target;

  

  // setLogin({
  //   ...login,
  //   [name]: value,
  // });

}

const submitRegister = async () => {
  const res = await fetch('http://34.30.6.145/account/reg/', {
    method: 'POST',
    body: JSON.stringify({
      email: 'someemail@gmail.com',
      password: 'verystrongpass',
      password_confirm: 'verystrongpass'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()

  if (!res.ok) throw Error(data)

  console.log(data)
  return data
}

// function onSubmit() {


//   axios
//     .post("http://34.30.6.145/account/log/", { login })
//     .then(({ data }) => {
//       if (data.error) {
//         console.error(data.error);
//       } else {
//         console.log(data);
//       }
//     })
// }

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
            <h1>Email</h1>
            <input
            onChange={(e) => onChange(e)}
              className="detail--open__right--int"
              type="email"
              placeholder="Email"
            />
            <h1>Пароль</h1>
            <input
            onChange={(e) => onChange(e)}
              className="detail--open__right--int"
              type="password"
              placeholder="Пароль"
            />
            <h3
              onClick={() => {
                setWord(true);
                setDetail(false);
              }}
            >
              Забыли пароль?
            </h3>
            <button onClick={submitRegister} className="detail--open__right--btns3">Войти</button>
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
