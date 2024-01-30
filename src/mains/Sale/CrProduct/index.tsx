import axios from "axios";
import "../CrProduct/index.scss";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";

interface Product {
  title_product: string;
  title_company: string;
  address: string;
  description: string;
  category: string;
  price: number;
  number: number;
  user: string;
}

const CrProduct: React.FC = () => {
  /////

  const [values, setValues] = useState<any>({
    title_product: "",
    title_company: "",
    address: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    number: 0,
    user: "",
    status: "",
  });

  const token = useSelector((state: AppState) => state.TokenSlice.token);

  const inputValues = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function addProduct(product: Product) {
    console.log(product);

    console.log(token);

    axios
      .post("http://34.125.18.221/product/", product, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.error(err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          console.error("Request failed:", err.request);
        } else {
          console.error("Error setting up the request:", err.message);
        }
      });
  }

  const getForm = () => {
    let obj = {
      title_product: values.title_product,
      title_company: values.title_company,
      address: values.address,
      description: values.description,
      category: values.category,
      price: values.price,
      number: values.number,
      user: values.user,
      status: values.status,
    };
    addProduct(obj);
  };

  return (
    <div id="crproduct">
      <div className="container">
        <center>
          <h1 className="crrroduct-title">Разместите здесь свой товар</h1>
        </center>
        {token ? (
          <div className="crproduct">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getForm();
              }}
            >
              <select name="status" onChange={inputValues}>
                <option value="">Выберите категорию</option>
                <option value="Фермер">Фермер</option>
                <option value="Магазин">Магазин</option>
              </select>
              <div className="crproduct__inputs">
                <input
                  type="text"
                  className="input"
                  placeholder="Название товара"
                  name="title_product"
                  onChange={inputValues}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Название компании"
                  name="title_company"
                  onChange={inputValues}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Место положение"
                  name="address"
                  onChange={inputValues}
                />
                <img
                  className="profile--right__tabs--card__images"
                  src={""}
                  alt=""
                  style={{ width: "25%" }}
                />

                <input
                  type="text"
                  className="input"
                  placeholder="Описание товара"
                  name="description"
                  onChange={inputValues}
                />
                <select name="category" onChange={inputValues}>
                  <option value="">Выберите тип продукта</option>
                  <option value="Фрукты">Фрукты</option>
                  <option value="Овощи">Овощи</option>
                  <option value="Зернобобовые растения">
                    Зернобобовые растения
                  </option>
                  <option value="Другое">Другое</option>
                </select>
                <input
                  type="text"
                  className="input"
                  name="price"
                  placeholder="Цена"
                  onChange={inputValues}
                />
                <input
                  type="text"
                  className="input"
                  name="number"
                  placeholder="Номер телефона"
                  onChange={inputValues}
                />
                <input
                  type="text"
                  className="input"
                  name="user"
                  placeholder="E-mail"
                  onChange={inputValues}
                />
              </div>
              <button type="submit" className="crproduct__add">
                Отправить
              </button>
            </form>
          </div>
        ) : (
          <h1>Вы не зарегистрировались!</h1>
        )}
      </div>
    </div>
  );
};

export default CrProduct;
