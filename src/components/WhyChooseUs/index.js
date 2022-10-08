import React from "react";
import "./styles.scss";
import { data } from "./constant";

const WhyChooseUs = () => {
  return (
    <div className="choose-container _section-main-heading ">
      <h1>Why choose Tokskill Learn?</h1>
      <div className="reasons">
        {data.map(({ title, subText, img }, i) => (
          <div className="single-box" key={i}>
            <div className="icon">
              <img src={img} />
            </div>
            <div className="title _section-heading">
              <h3>
                <b>{title}</b>
              </h3>
            </div>
            <div className="text _sub-text">
              <p>{subText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
