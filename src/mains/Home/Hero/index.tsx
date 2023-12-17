import React, { useState } from "react";
import Slider from "react-slick";
import "./index.scss";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import biglog from "../../../images/biglogo.png";

const Home = () => {
 

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div id="hero" data-aos="fade-right" data-aos-delay="600">
        <div className="blur">
        <div className="container">
          <div className="hero">
            <center>
              <div className="hero__info">
              <img src={biglog} alt=""/>
              <h1 data-aos="fade-right" className="hero-title">
                Agro<b>info</b>
              </h1>
              </div>
              <p data-aos="fade-right">АгроИнфо.КГ— информационная поддержка сельского хозяйства и пищевой промышленностю</p>
            </center>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
