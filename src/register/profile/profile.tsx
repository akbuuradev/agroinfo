import React, { useEffect, useRef, useState } from "react";
import logo from "./../../images/user3.png";
import "./profile.scss";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { RiUserFill } from "react-icons/ri";
import { BiSolidBookmark } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Personal from "../personal/personal";
import Favorites from "../favorites/favorites";
import { CiLogout } from "react-icons/ci";
import Yes from "../yes/yes";
import { log } from "console";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/reducer/tokenSlice";

const Profile = ({ post, setPost }: any) => {
  const [image, setImage] = useState<any>(() => {
    const storedImg = localStorage.getItem("image");
    return storedImg ? JSON.parse(storedImg) : null;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(image));
  }, [image]);
  console.log(image);

  const [logOut, setLogOut] = useState(false);
  const handleRef = useRef<any>();

  const loginLocal: any = window.localStorage.getItem("loginL");

  const [login, setLogin] = useState(JSON.parse(loginLocal) || {});

  const handleImageChange = (event: any) => {
    const file: any = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const logOutHandler = () => {
    setLogOut(true);
    window.scroll(0, 200);
    dispatch(setToken(null));
  };

  return (
    <div id="profile">
      <div className="container">
        <div className="profile">
          <div className="profile- -right">
            <Tabs className="profile--right__tabs">
              <div className="profile--right__tabs--card">
                <TabList>
                  <div className="title">
                    <img
                      className="profile--right__tabs--card__images"
                      src={image === null ? logo : image}
                      alt=""
                    />
                    <input
                      type="file"
                      ref={handleRef}
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <button
                      className="btn"
                      onClick={() => handleRef.current.click()}
                    >
                      Изменить профиль
                    </button>
                    <Tab className="profile--right__tabs--card__too">
                      <RiUserFill className="icons" />
                      <span>Личные данные</span>
                    </Tab>
                    <Tab className="profile--right__tabs--card__too">
                      <BiSolidBookmark className="icons" />
                      <span>Избранные</span>
                    </Tab>
                    <Tab className="profile--right__tabs--card__too">
                      <RiShoppingBag2Fill className="icons" />
                      <span>Мои товары</span>
                    </Tab>
                    <Tab className="profile--right__tabs--card__too">
                      <RiShoppingBag2Fill className="icons" />
                      <span>Разместить свой товар</span>
                    </Tab>
                    <button
                      onClick={() => logOutHandler()}
                      className="profile--right__tabs--card__too"
                    >
                      <CiLogout className="icons" />
                      <span>Выйти</span>
                    </button>
                    {logOut && (
                      <Yes
                        setLogOut={setLogOut}
                        login={login}
                        post={post}
                        setPost={setPost}
                      />
                    )}
                  </div>
                </TabList>
              </div>
              <TabPanel>
                <Personal />
              </TabPanel>
              <TabPanel>
                <Favorites />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
