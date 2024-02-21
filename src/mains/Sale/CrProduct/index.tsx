import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import "./index.scss";
import { addProduct } from "../../../store/reducer/productSlice";

export interface Iproduct {
  title_product: string;
  title_company: string;
  address: string;
  description: string;
  category: string;
  image: string;
  price: number;
  number: string;
  user: string;
  status: string;
}

const CrProduct: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [values, setValues] = useState<Iproduct>({
    title_product: "",
    title_company: "",
    address: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    number: "+996",
    user: "",
    status: "",
  });
  const token = useSelector((state: AppState) => state.TokenSlice.token);
  const dispatch = useDispatch();
  const inputValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const resizedImage = await resizeImage(file, 800, 600);
        setSelectedFile(resizedImage);
        const reader = new FileReader();
        reader.onloadend = () => {
          setValues({ ...values, image: reader.result as string });
        };
        reader.readAsDataURL(resizedImage);
      } catch (error) {
        console.error("Ошибка при обработке изображения:", error);
      }
    }
  };

  const createProduct = async (product: Iproduct) => {
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      dispatch(addProduct(product));
      const response = await axios.post(
        "http://34.125.18.221/product/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error: any) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request failed:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(values);
    setValues({
      title_product: "",
      title_company: "",
      address: "",
      description: "",
      category: "",
      price: 0,
      image: "",
      number: "+996",
      user: "",
      status: "",
    });
  };

  const resizeImage = async (
    file: File,
    maxWidth: number,
    maxHeight: number
  ): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(new File([blob], file.name, { type: file.type }));
          } else {
            reject(new Error("Ошибка при уменьшении изображения"));
          }
        }, file.type);
      };
      img.onerror = () => {
        reject(new Error("Ошибка загрузки изображения"));
      };
    });
  };

  return (
    <div id="crproduct">
      <div className="container">
        <center>
          <h1 className="crrroduct-title">Разместите здесь свой товар</h1>
        </center>
        {token ? (
          <div className="crproduct">
            <form onSubmit={handleSubmit}>
              <div className="crproduct__inputs">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <select name="status" onChange={inputValues}>
                    <option value="">Выберите категорию</option>
                    <option value="Фермер">Фермер</option>
                    <option value="Магазин">Магазин</option>
                  </select>
                  <input
                    value={values.title_product}
                    required
                    type="text"
                    className="input"
                    placeholder="Название товара"
                    name="title_product"
                    onChange={inputValues}
                  />
                  <input
                    value={values.title_company}
                    type="text"
                    className="input"
                    placeholder="Название компании"
                    name="title_company"
                    onChange={inputValues}
                  />
                  <input
                    value={values.address}
                    required
                    type="text"
                    className="input"
                    placeholder="Место положение"
                    name="address"
                    onChange={inputValues}
                  />
                  <input
                    value={values.description}
                    type="text"
                    required
                    className="input"
                    placeholder="Описание товара"
                    name="description"
                    onChange={inputValues}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <select
                    name="category"
                    required
                    value={values.category}
                    onChange={inputValues}
                  >
                    <option value="">Выберите тип продукта</option>
                    <option value="Фрукты">Фрукты</option>
                    <option value="Овощи">Овощи</option>
                    <option value="Зернобобовые растения">
                      Зерновые растения
                    </option>
                    <option value="Другое">Другое</option>
                  </select>
                  <input
                    value={values.price}
                    required
                    type="text"
                    className="input"
                    name="price"
                    placeholder="Цена"
                    onChange={inputValues}
                  />
                  <input
                    value={values.number}
                    required
                    type="text"
                    className="input"
                    name="number"
                    placeholder="Номер телефона"
                    onChange={inputValues}
                  />
                  <input
                    value={values.user}
                    required
                    type="text"
                    className="input"
                    name="user"
                    placeholder="E-mail"
                    onChange={inputValues}
                  />
                  <img
                    className="profile--right__tabs--card__images"
                    src={values.image}
                    alt=""
                    style={{ width: "25%" }}
                  />
                  <input
                    required
                    type="file"
                    name="image"
                    placeholder="photo"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <center>
                <button type="submit" className="crproduct__add">
                  Отправить
                </button>
              </center>
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
