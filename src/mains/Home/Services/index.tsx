import React from "react";
import "./index.scss";
import servis01 from "../../../images/servis.png"
import servis02 from "../../../images/servis02.png"
import servis03 from "../../../images/servis03.png"

const Services = () => {
  return (
    <div id="wrap">
      <div id="services">
        <div className="container">
          <div className="services">
          <h1 className="services__title">Наши услуги</h1>
          <div className="services__box">
            <div className="services__box__block">
              <h1>01</h1>
              <li>
                Обычно включают каталог продукции с фотографиями, описаниями и
                ценами.
              </li>
              <img src={servis01} alt="" />
            </div>
            <div id="block2" className="services__box__block">
              <h1>02</h1>
              <li>
              Основное направление - обмен опытом и знаниями среди фермеров и аграрных специалистов.
              </li>
              <img src={servis02} alt="" />
            </div>
            <div className="services__box__block">
              <h1>03</h1>
              <li>
              Позволяют аграрным продавцам предлагать свои товары напрямую потребителям через интернет.
              </li>
              <img className="img3" src={servis03} alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
