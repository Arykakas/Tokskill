import React from "react";
import "./styles.scss";

const Card = ({ img, text, buttonText }) => {
  return (
    <div className="card-container">
      <div className="img-box">
        <img src={img} />
      </div>
      <h3>
        <b>{text}</b>
      </h3>
      <button className="btn-course _common-btn">{buttonText}</button>
    </div>
  );
};

export default Card;
