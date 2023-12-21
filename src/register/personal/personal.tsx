import React from "react";
import './personal.scss'
import { Value } from "sass";

const Personal = () => {
  // const value = test.slice(test.length - 1 , test.lentgh)
  // console.log('1',value);
  
  return (
    <div id="personal">
      <div className="container">
        <div className="personal">
            <div className="personal--title">
                <h1>Личные данные</h1>
                <div className="personal--title__email">
                    <h4>ФИО</h4>
                    <input placeholder="ФИО" type="name" className="personal--title__email--inputs"/>
                    <h4>Номер телефон</h4>
                    <input placeholder="Номер телефон" type="phone" className="personal--title__email--inputs"/>
                    <h4>Email</h4>
                    <input placeholder="Email"  type="email" className="personal--title__email--inputs"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
