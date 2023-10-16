import React from "react";
import "./index.scss";
import produce from "../../../images/producetitle.png";
import fruit from "../../../images/fruit.png"
import green from "../../../images/green.png"
import zerno from "../../../images/zerno.png"

const Produce = () => {
  return (
    <div id="produce">
      <div className="container">
        <div className="produce">
          <div className="produce--title">
            <img src={produce} alt="" />
            <h1>Продукция</h1>
          </div>
          <div className="produce--group">
            <div className="produce--group__block" style={{ backgroundImage: `url(${fruit})`, backgroundRepeat: "no-repeat" }}>
              <h1>ФРУКТЫ</h1>
            </div>
            <div className="produce--group__block" style={{ backgroundImage: `url(${green})`, backgroundRepeat: "no-repeat" }}>
              <h1>ОВОЩИ</h1>
            </div>
            <div className="produce--group__block" style={{ backgroundImage: `url(${zerno})`, backgroundRepeat: "no-repeat" }}>
              <h1>ЗЕРНОВЫЕ РАСТЕНИЯ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produce;
