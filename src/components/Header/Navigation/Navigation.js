import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div>
      <ul className={style.nav_links}>
        <li>
          <NavLink exact to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
