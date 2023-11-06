import React, { useState } from "react";
import "./index.scss";
import produce from "../../../images/producetitle.png";
import fruit from "../../../images/fruit.png";
import green from "../../../images/green.png";
import zerno from "../../../images/zerno.png";
import logo from "../../../images/titlepr.png";
import big from "../../../images/onebig.svg";

const Produce = () => {
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  return (
    <div id="produce">
      <div className="container">
        <div className="produce">
          <div className="produce--title">
            <img src={produce} alt="" />
            <h1>Продукция</h1>
          </div>
          <div className="produce--group">
            <div
              className="produce--group__block"
              style={{
                backgroundImage: `url(${fruit})`,
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                setModalOne(true);
                setModalTwo(false);
                setModalThree(false);
              }}
            >
              <h1>ФРУКТЫ</h1>
            </div>
            <div
              id="modalTwo"
              className="produce--group__block"
              style={{
                backgroundImage: `url(${green})`,
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                setModalOne(false);
                setModalTwo(true);
                setModalThree(false);
              }}
            >
              <h1>ОВОЩИ</h1>
            </div>
            <div
              id="modalThree"
              className="produce--group__block"
              style={{
                backgroundImage: `url(${zerno})`,
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => {
                setModalOne(false);
                setModalTwo(false);
                setModalThree(true);
              }}
            >
              <h1>ЗЕРНОВЫЕ РАСТЕНИЯ</h1>
            </div>
          </div>
          <div
            className="modalOneContent"
            style={{ height: modalOne ? "" : "0", transition: ".5s" }}
          >
            <div className="modalOneContent-title">
              <img src={logo} alt="" />
              <hr />
            </div>
            <ul>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
            </ul>
          </div>

          <div
            className="modalTwoContent"
            style={{ height: modalTwo ? "" : "0", transition: ".5s" }}
          >
            <div className="modalTwoContent-title">
              <img src={logo} alt="" />
              <hr />
            </div>
            <ul>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
            </ul>
          </div>

          <div
            className="modalThreeContent"
            style={{ height: modalThree ? "" : "0", transition: ".5s" }}
          >
            <div className="modalThreeContent-title">
              <img src={logo} alt="" />
              <hr />
            </div>
            <ul>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
              <li>
                <img src={big} alt="" />
                Бирдеме
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produce;
