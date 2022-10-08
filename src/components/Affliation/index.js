import React from "react";
import wipro from "../../assets/wipro.png";
import paytm from "../../assets/paytm.png";
import tcs from "../../assets/tcs.png";
import bluestone from "../../assets/bluestone.png";
import "./styles.scss";

const Affliation = () => {
  return (
    <div className="affliation-container">
      <div className="content _section-main-heading">
        <h1>Trusted by the best</h1>
        <div className="sub-title _sub-text">
          <p>
            Leading companies use the same courses to help employees keep their
            skills fresh.
          </p>
        </div>
        <div className="brand-logo">
          <img src={paytm} />
          <img src={bluestone} />
          <img src={wipro} />
          <img src={tcs} />
        </div>
      </div>
    </div>
  );
};

export default Affliation;
