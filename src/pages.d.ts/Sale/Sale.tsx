import React from "react";
import luk from "../../images/Rectangle 61.png";
import "./Sale.scss";
import { BsFillBookmarkFill } from "react-icons/bs";

const Sale = () => {
  return (
    <div id="sale">
      <div className="container">
        <div className="sale">
          <div className="sale--inp">
            <input
              style={{ marginTop: "10%" }}
              type="text"
              placeholder="Поиск"
            />
            <button>Найти</button>
            {/* <div className="sale--inp__block"> */}
            <a href="#">Расместить свой товар</a>
            {/* </div> */}
          </div>
          <div className="sale--krug">
            <button>Фрукты</button>
            <button className="one">Зер.Растении</button>
            <button>Овощи</button>
          </div>
        </div>

        <div className="sale--blocks">
          <div className="sale--blocks__big">
            <img src={luk} alt="img" />
            <div className="sale--blocks__big--mini">
              <div className="sale--blocks__big--mini__text">
                <h2>Лук Ред Барон </h2>

                <h3>20 сом</h3>
              </div>
              <div className="sale--blocks__big--btn">
                <button>Посмотреть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
