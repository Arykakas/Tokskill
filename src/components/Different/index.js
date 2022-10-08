import React from "react";
import "./styles.scss";
import diffImg from "../../assets/makesUsDifferent.jpeg";
import { data } from "./constant";

const Different = () => {
  return (
    <div className="different-container">
      <div className="diff-img">
        <div className="img-show">
          <img src={diffImg} />
        </div>
      </div>
      <div className="diff-text">
        <div className="header _section-main-heading ">
          <h1>What makes us different</h1>
          <div className="bullet-points">
            {data.map(({ icon, title, text }, i) => (
              <div key={i} className="child-bullet">
                <div className="icon">
                  <img src={icon} />
                </div>
                <div className="sub-title _section-heading _sub-text">
                  <h3>
                    <b>{title}</b>
                  </h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
