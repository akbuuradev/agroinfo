import React from "react";
import Slider from "react-slick";
import "./index.scss";
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };
  return (
    <>
      <div>
        <div id="home" data-aos="fade-right" data-aos-delay="600">
          <div className="container">
            <div className="home">
              <Slider {...settings}>
                <div className="home--slide">
                  <div className="home--slide__text" data-aos="fade-right" data-aos-delay="500">
                    <h1>Установлен новый мировой рекорд урожайности сои</h1>
                  </div>
                </div>
                <div className="home--slide2">
                  <div className="home--slide2__text">
                    <h1>
                      Агро.КГ - Надёжный партнер и помощник вашего Агро
                      хозяйства
                    </h1>
                  </div>
                </div>
                <div className="home--slide">
                  <div className="home--slide__text">
                    <h1>Установлен новый мировой рекорд урожайности сои</h1>
                  </div>
                </div>
                <div className="home--slide2">
                  <div className="home--slide2__text">
                    <h1>
                      Агро.КГ - Надёжный партнер и помощник вашего Агро
                      хозяйства
                    </h1>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
