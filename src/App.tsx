import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/header";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";

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
  // useEffect(() => {
  //   localStorage.setItem('formData', JSON.stringify(formData));
  // }, [formData]);
  // console.log('ll',formData);
  
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
