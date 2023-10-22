import React from "react";
import luk from "../../images/Rectangle 61.svg";
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
            <div className="sale--krug__one">
              <input type="radio" placeholder="Фрукты" name="Фрукты" />
              <h4>Фрукты</h4>
            </div>
            <div className="sale--krug__two">
              <input type="radio" name="Зер.Растении" />
              <h4>Зер.Растении</h4>
            </div>
            <div className="sale--krug__three">
              <input type="radio" name="Овощи" />
              <h4>Овощи</h4>
            </div>
          </div>

          <div className="sale--blocks">
            <div className="sale--blocks__big">
              <div className="sale--blocks__big--mini">
                <img src={luk} alt="img" />
                <div className="sale--blocks__big--mini__text">
                  <p>Название</p>
                  <h2>Лук Ред Барон </h2>
                  <p>Производства</p>
                  <h2>Кыргызстан </h2>
                  <p>Компания</p>
                  <h2>ххххххххх</h2>
                  <p>Цена</p>
                  <h3>20 сом</h3>
                </div>
                <div className="sale--blocks__big--mini__btn">
                  <h4>0999-999-999</h4>
                  <BsFillBookmarkFill className="icon" />
                </div>
              </div>
              <div className="sale--blocks__big--opisanie">
                <span>Описание</span>
                <h4>
                  Этот сорт обычного лука отличается красными, средних размеров
                  луковицами. Лук предпочитает полное солнце, поэтому выбирайте
                  место для посадки с хорошей солнечной освещенностью. Взрослые
                  луковицы достигают массы 30-125 г. Выращивание репчатого лука
                  Ред Барон из семян лучше начинать в период устойчивой теплой
                  погоды, когда ночью не наблюдаются заморозки. Чем раньше вы
                  начнете высадку, тем лучше. Ред Барон может быть успешно
                  выращен в различных климатических условиях, но как и
                  большинство луковых растений, он предпочитает умеренный
                  климат. Оптимальная температура для роста и созревания
                  находится в диапазоне от 13°C до 24°C.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
