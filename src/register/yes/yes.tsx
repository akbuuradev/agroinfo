import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./yes.scss";
import { deletePost } from "../../store/reducer/yesSlice";
import { setToken } from "../../store/reducer/tokenSlice";
import axios from "axios";
import { ILogin, IState } from "../../type/IUser";
// const clearLocal = null;
const Yes = ({ setLogOut, formData, setFormData }: any) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState<IState>({
    email: "",
    password: "",
    password_confirm: "",
  });

  const logOutHandler = () => {
    setLogOut(true);
    window.scroll(0, 0);
    dispatch(setToken(null));
    // localStorage.removeItem("users")
    nav("/");
  };

  return (
    <div id="yes">
      <div className="container">
        <div className="yes">
          <div className="yes--no">
            <h4>
              Действительно хотите <br />
              выйти или нет?
            </h4>
            <div className="yes--no__btn1">
              <button
                onClick={() => logOutHandler()}
                style={{ margin: "0 10px 0 25px" }}
              >
                <a className="well" href="">
                  Да
                </a>
              </button>
              <button onClick={() => setLogOut(false)}>Нет</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yes;
