import React from "react";
import FontAwesome from "react-fontawesome";
import { NavLink, Link } from "react-router-dom";
import logo from "../../public/images/logo.png";

export default () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <Link to="/">
            <img src={logo} alt="Nanoscale Solutions" />
          </Link>
        </div>
        <div className="header__buttons">
          <NavLink className="button-header" activeClassName="button-active" to="/about">
            About Us
            <br />
            <FontAwesome name="users" className="button-fa"/>
          </NavLink>
          <NavLink className="button-header" activeClassName="button-active" to="/blog">
            Blog
            <br />
            <FontAwesome name="comment" className="button-fa"/>
        </NavLink>
          <NavLink className="button-header" activeClassName="button-active" to="/why">
            Why Us
            <br />
            <FontAwesome name="question-circle" className="button-fa"/>
          </NavLink>
          <NavLink className="button-header" activeClassName="button-active" to="/contact">
            Contact Us
            <br />
            <FontAwesome name="envelope" className="button-fa"/>
          </NavLink>
        </div>
      </div>
    </div>
  </header>
);