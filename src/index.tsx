import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./mains/Home/home";
import AboutUs from "./mains/AboutUs/aboutUs";
import Sale from "./mains/Sale/Sale";
import SubProfile from "./register/profile/subProfile";
import Personal from "./register/personal/personal";
import Registers from "./register/registers/registers";
import Favorites from "./register/favorites/favorites";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import CrProduct from "./mains/Sale/CrProduct";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path={"/о нас"} element={<AboutUs />} />
          <Route path={"/покупка/продажа"} element={<Sale />} />
          <Route path={"/createProduct"} element={<CrProduct />} />
          <Route path={"/sub_profile"} element={<SubProfile />}>
            <Route index element={<Personal />} />
            <Route path={"/sub_profile/fav"} element={<Favorites />} />
          </Route>
        </Route>
        <Route path={"/wrap_registers"} element={<Registers />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
