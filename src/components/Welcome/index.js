import React, { useEffect } from "react";
import { welcomeText } from "./constant";
import largeMacbook from "../../assets/welcome_01.png";
import smallMacbook from "../../assets/welcome_02.png";
import "./styles.scss";

const Welcome = () => {
  const scrollBarEvent = () => {
    let smallImg = document.querySelector(".small-img");
    let largeImg = document.querySelector(".large-img");
    let smImg = smallImg.getElementsByTagName("img")[0];
    let lgImg = largeImg.getElementsByTagName("img")[0];
    if (smImg && lgImg) {
      if (window.pageYOffset === 0) {
        smImg.style.transform = "translateX(0px)";
        lgImg.style.transform = "translateX(0px)";
        smImg.style.opacity = "0.2";
      } else if (window.pageYOffset <= 20) {
        smImg.style.transform = "translateX(-20px)";
        lgImg.style.transform = "translateX(-20px)";
        smImg.style.opacity = "0.7";
      } else {
        smImg.style.transform = "translateX(-40px)";
        lgImg.style.transform = "translateX(-30px)";
        smImg.style.opacity = "1";
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 840) {
      document.addEventListener("scroll", scrollBarEvent);
    }
    return () => {
      document.removeEventListener("scroll", scrollBarEvent);
    };
  }, []);
  return (
    <div className="welcome-container">
      <div className="welcome-text">
        <div className="headline">
          <p>
            <b>{welcomeText[0]}</b>
          </p>
        </div>
        <div className="sub-heading _section-main-heading _sub-text">
          <h1>{welcomeText[1]}</h1>
          <p>{welcomeText[2]}</p>
        </div>
        <div className="start-learning-today">
          <button className="slt-btn">Start Learning Today</button>
        </div>
      </div>
      <div className="image-container">
        <div className="small-img">
          <img src={smallMacbook} />
        </div>
        <div className="large-img">
          <img src={largeMacbook} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
