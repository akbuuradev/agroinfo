import React from "react";
import "./App.scss";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import AboutUs from "./components/AboutUs/aboutUs";
import Categories from "./components/Categories/categories";
import Sale from "./components/Sale/Sale";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/о нас"} element={<AboutUs />} />
        <Route path={"/категории"} element={<Categories />} />
        <Route path={"/покупка/продажа"} element={<Sale />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
