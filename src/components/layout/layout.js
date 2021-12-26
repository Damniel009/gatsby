import * as React from "react";
import { Link } from "gatsby";
import { heading, active } from "./layout.module.scss";

import "./Navbar.sass";
import "./Searchbar.scss";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo">LOGO</div>

        <div className="space"></div>

        <div className="mk-fullscreen-search-overlay" id="mk-search-overlay">
          <p className="mk-fullscreen-close" id="mk-fullscreen-close-button">
            <i className="fa fa-times"></i>
          </p>
          <div id="mk-fullscreen-search-wrapper">
            <form method="get" id="mk-fullscreen-searchform" action="">
              <input
                type="text"
                defaultValue=""
                placeholder="Search..."
                id="mk-fullscreen-search-input"
              />
              <i className="fa fa-search fullscreen-search-icon">
                <input defaultValue="" type="submit" />
              </i>
            </form>
          </div>
        </div>

        <div className="nav-options-container">
          <nav>
            <ul className="nav-links">
              <li className="nav__item">
                <Link activeClassName={active} to="/">
                  <div className="link">Home</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/servicii">
                  <div className="link">Servicii</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/work">
                  <div className="link">Work</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/introducere">
                  <div className="link">Introducere</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/about">
                  <div className="link">About</div>
                </Link>
              </li>
              <li className="nav__item searchIcon">
                <div
                  className="mk-search-trigger mk-fullscreen-trigger"
                  id="search-button-listener"
                >
                  <div id="search-button">
                    <i className="fa fa-search"></i>
                  </div>
                </div>
              </li>
            </ul>

            <Button leftIcon={<HamburgerIcon />} variant="outline"/>
              
          </nav>
        </div>
      </div>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;