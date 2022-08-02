import React, { useState } from "react";
import style from "./MobileNavigation.module.scss";
import { NavLink, Link } from "react-router-dom";
import { LOGO } from "utils/imageConst";

/**
 * PROPS : reviewer
 */

export default function MobileNavigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const notificationToggle = () => {
    if (!showNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setShowNavigation(!showNavigation);
    document.body.style.overflow = !showNavigation ? "hidden" : "";
  };
  const notifyClass = showNavigation ? "show_mobile_nav" : "";

  const onLogout = () => {
    localStorage.clear();
    notificationToggle();
  };

  return (
    <>
      <span className={style.hamburger_menu} onClick={notificationToggle}>
        <i className={style.line}></i>
      </span>
      <div className={["mobile_nav_wrapper", notifyClass].join(" ")}>
        <div className="mobile_nav_overlay" onClick={notificationToggle}></div>
        <div className="mobile_nav_slider">
          <div className="header">
            <div className="header-top">
              <div className="logo">
                <img src={LOGO} title="" alt="" />
              </div>
            </div>
            <div className="profile-detail">
              <Link to="/home" onClick={notificationToggle}>
                <span className="user_icon">TT</span>
                <div className="emp-info">
                  <h5>Test</h5>
                  <span>Engineer</span>
                </div>
              </Link>
              <span className="logoff" onClick={onLogout}></span>
            </div>
          </div>
          <div className="mobile_nav_list_wrapper">
            <ul className="nav-link">
              <li className="nav-item">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
