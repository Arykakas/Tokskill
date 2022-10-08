import React from "react";
import instagram from "../../assets/icons/instagram.png";
import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-one">
        <div className="col-one">
          <h1>TOKSKILL COURSES</h1>
          <ul>
            <li>Creative courses</li>
            <li>Maker courses</li>
            <li>TokSkill learn</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="col-two">
          <h1>INFO</h1>
          <ul>
            <li>Teach with us</li>
            <li>Support</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Terms and conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="col-three">
          <h1>TOKSKILL LEARN HQ</h1>
          <p className="address">
            TheHub Bengaluru <br />
            Infantry Road, Bengaluru, <br />
            Karnataka, India, 560001 <br />
            P: +91 9353824815 <br />
            Write to admin@tokskill.com
          </p>
          <div className="social">
            <h1>CONNECT</h1>
            <div className="social-icons">
              <img src={instagram} />
              <img src={instagram} />
              <img src={instagram} />
              <img src={instagram} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-two">
        <p>
          {" "}
          © Copyright Tokskill Learn, Kinito Online Services Private Limited.
          All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
