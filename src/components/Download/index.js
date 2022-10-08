import React from "react";
import googleplay from "../../assets/googleplay.png";
import applestore from "../../assets/applestore.png";
import "./styles.scss";

const Download = () => {
  return (
    <div className="download-container _section-main-heading">
      <h1>DOWNLOAD THE TOKSKILL LEARN APP</h1>
      <img src={googleplay} />
      <img src={applestore} />
    </div>
  );
};

export default Download;
