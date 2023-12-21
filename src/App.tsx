import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import { IState } from "./type/IUser";
import { setPost } from "./store/reducer/yesSlice";
import { useDispatch } from "react-redux";

interface IFormData {
  email: string;
  password: string;
  password_confirm: string;
}
function App() {
  // const [formData, setFormData] = useState<IFormData>(() => {
  //   const storedPost = localStorage.getItem('formData');
  //   return storedPost ? JSON.parse(storedPost) : { email: '', password: '', password_confirm: '' };
  // });

  // // Обновление localStorage при изменении состояния
  const dispatch = useDispatch();
  useEffect(() => {
    const postLocal = localStorage.getItem("postL");
    if (postLocal) {
      const postFromLocalStarage: IState = JSON.parse(postLocal);
      dispatch(setPost(postFromLocalStarage));
    }

    // localStorage.setItem('formData', JSON.stringify(formData));
  }, []);
  // console.log('ll',formData);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
