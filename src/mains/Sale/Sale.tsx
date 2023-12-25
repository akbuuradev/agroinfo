import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "./Sale.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

interface Product {
  id: number;
  title_product: string;
  price: number;
  image: string;
}

const Sale: React.FC = () => {
  let api = "http://34.125.18.221/product/";
  const [products, setProducts] = useState<Product[]>([]);

  const token = useSelector((state: AppState) => state.TokenSlice.token);

  const getProduct = (token: string) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(api, config)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    if (token) {
      getProduct(token);
    }
  }, [token]);

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
            <a href="#">Разместить свой товар</a>
          </div>
          <div className="sale--krug">
            <button>Фрукты</button>
            <button className="one">Зерновые растения</button>
            <button>Овощи</button>
          </div>
        </div>
        <div className="sale--blocks">
          {products.map((product) => (
            <div key={product.id} className="sale--blocks__big">
              <img src={product.image} alt={product.title_product} />
              <div className="sale--blocks__big--mini">
                <div className="sale--blocks__big--mini__text">
                  <h2>{product.title_product}</h2>
                  <h3>{product.price} сом</h3>
                </div>
                <div className="sale--blocks__big--btn">
                  <button>Посмотреть</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
