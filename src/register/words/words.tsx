import React from "react";
import { MdEmail } from "react-icons/md";
const Words = () => {
  return (
    <div id="words">
      <div className="container">
        <div className="words">
          <div className="words--forgot">
            <h1>Забыли пароль?</h1>
            <p>
              Пожалуйста, заполните электронное письмо, и мы вышлем вам ссылку
              для возврата в вашу учетную запись.
            </p>
            <div className="words--forgot__messag">
              <MdEmail className="words--forgot__messag--icons" />
              <input
                className="words--forgot__messag--inputs"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="words--forgot__back">
                <button className="words--forgot__back--send1">Назад</button>
                <button className="words--forgot__back--send2">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Words;
