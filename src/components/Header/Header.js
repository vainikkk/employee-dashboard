import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import Navigation from "./Navigation/Navigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import { LOGO_IMAGE } from "utils/imageConst";
import LOGO from "../../assets/images/logo.svg";

export default function Header() {
  const onLogout = () => {
    localStorage.clear();
  };
  const isLoggedIn = true;
  let navHTML = "";

  if (isLoggedIn) {
    navHTML = (
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="ml-auto">
          <DropdownButton
            alignRight
            title={
              <div className={style.user_icon}>
                <img src={LOGO_IMAGE} title="" alt="" />
              </div>
            }
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="4" onClick={onLogout}>
              Sign Out
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
      </>
    );
  }

  //remove sticky="top" from Navbar.
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <MobileNavigation />
          <Navbar.Brand>
            <NavLink to="/" exact>
              <img src={LOGO} title="" alt="" />
            </NavLink>
          </Navbar.Brand>
          {navHTML}
        </Container>
      </Navbar>
      <div className={style.main_navigation}>
        <Container>
          <Navigation />
        </Container>
      </div>
    </div>
  );
}
