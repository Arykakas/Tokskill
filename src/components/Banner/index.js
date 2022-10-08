import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { bannerItems } from "./constant";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="spectre header fixed">
      <header className="navbar container">
        <section className="navbar-logo">
          <img src={logo} alt="tokskill-logo" />
        </section>
        <section className="navbar-menu-links">
          {bannerItems.map((item, i) => (
            <NavLink key={i} to={item.link}>
              {item.view}
            </NavLink>
          ))}
          <button className="btn-primary">Login</button>
        </section>
        <div
          className="navbar-hamburger-icon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <div>
        <section
          className={`mobile-view ${showMobileMenu ? "show" : "vanish"}`}
        >
          {bannerItems.map((item, i) => {
            if (typeof item.view !== "object")
              return (
                <NavLink key={i} to={item.link}>
                  {item.view}
                </NavLink>
              );
          })}
          <button className="btn-mobile">Login</button>
        </section>
      </div>
    </div>
  );
};

export default Banner;
