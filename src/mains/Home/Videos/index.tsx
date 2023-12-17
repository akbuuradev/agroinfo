import React from "react";
import "./index.scss";
import play from "../../../images/video.svg";

const Videos = () => {
  return (
    <div id="videos">
      <div className="container">
        <div className="videos">
          <div className="videos__title">
            <img src={play} alt="" />
            <h1>Полезные видео</h1>
          </div>
          <div className="videos__group">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lDnYBuaAdv0?si=ErkGTqx_j2eyHEXL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dRMCazj9Eno?si=qKmn_tF9N83JwXew"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Uc92F9PPo4k?si=VTz4P8q0l1cz1N4f"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4xzcdHAkzyk?si=aIclVM0h3bYZvT3q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
