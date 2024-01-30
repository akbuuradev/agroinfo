import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Sale.scss";
import fruit from "../../images/fruitIcon.png";
import greenIcon from "../../images/icon green.png";
import zernoIcon from "../../images/zernoicon.png";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { BsBookmark } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";

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
        console.log(res.data);
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
            <button>
              <FaSearch />
            </button>
            <Link to="/createProduct">
              Разместить свой товар <IoBagAddOutline />
            </Link>
          </div>
          <div className="sale--krug">
            <button>
              <img src={fruit} alt="" />
              фрукты
            </button>
            <button className="one">
              <img src={zernoIcon} alt="" />
              зерновые
            </button>
            <button>
              <img src={greenIcon} alt="" />
              овощи
            </button>
            <button>другое</button>
          </div>
        </div>
        {token ? (
          <div className="sale--blocks">
            {products.map((product) => (
              <div key={product.id} className="sale--blocks__big">
                <img src={product.image} alt={product.title_product} />
                <div className="sale--blocks__big--one">
                  <h2>
                    {product.title_product.length > 15
                      ? product.title_product.slice(0, 12) + "..."
                      : product.title_product}
                  </h2>
                  <BsBookmark className="icon" />
                </div>
                <div className="sale--blocks__big--mini">
                  <div className="sale--blocks__big--mini__text">
                    <h3>
                      {product.price}
                      <span>сом</span>
                    </h3>
                  </div>
                  <div className="sale--blocks__big--btn">
                    <button>Посмотреть</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3
            style={{
              textAlign: "center",
              margin: "100px auto",
              width: "250px",
              fontSize: "20px",
              borderRadius: "15px",
              padding: "10px 20px",
              border: "1px solid green",
              color: "green",
              fontWeight: "bold",
            }}
          >
            Пройдите регистрацию!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Sale;
