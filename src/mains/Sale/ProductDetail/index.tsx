import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import "./index.scss";

// interface iProduct {
//   title_product?: string;
//   title_company?: string;
//   address?: string;
//   description?: string;
//   category?: string;
//   price?: number;
//   number?: number;
//   user?: string;
// }

function ProductDetail() {
  const [detail, setDetail] = useState<any>({});
  const token = useSelector((state: AppState) => state.TokenSlice.token);
  const { id } = useParams();

  console.log("id", id);
  const number = "tel:" + detail.number;
  function DetailPr(token: string) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(`http://34.125.18.221/product/${id}/`, config)
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }

  useEffect(() => {
    if (token) {
      DetailPr(token);
    }
  }, [token]);

  return (
    <>
      <Header />
      <div id="product">
        <div className="container">
          <div className="product">
            <div className="product__content">
              <div className="product__content--img">
                <img src={detail.image} alt="" />
              </div>
              <div className="product__content--text">
                <div>
                  <span>Название</span>
                  <h2>{detail.title_product}</h2>
                </div>
                <div>
                  <span>Номер телефона</span>
                  <h3>
                    <a href={number}>{detail.number}</a>
                  </h3>
                </div>
                <div>
                  <span>Адрес</span>
                  <h3>{detail.address}</h3>
                </div>
                <div>
                  <span>Компания</span>
                  <h2>{detail.title_company}</h2>
                </div>
                <div>
                  <span>Цена</span>
                  <h2>{detail.price}</h2>
                </div>
              </div>
            </div>
            <div className="product__description">
              <h3>Описание</h3>
              <p>{detail.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
