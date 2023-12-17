import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './yes.scss'
// import { deletePost } from "../../store/Reducers/YesSlice";

const Yes = ({ setLogOut, formData, setFormData }: any) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

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
                onClick={(e: any) => {
                  localStorage.removeItem('post')
                  nav("/");
                  window.scroll(0, 0);
                }}
                style={{ margin: "0 10px 0 25px" }}
              >
                <a className="well" href="">Да</a>
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
