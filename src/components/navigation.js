import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

//sass
import "./navigation.sass";
import "./Searchbar.scss";

const Navigation = () => {
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
                <Link to="/index">
                  <div className="link">Home</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/servicii">
                  <div className="link">Servicii</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/work">
                  <div className="link">Work</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/introducere">
                  <div className="link">Introducere</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about">
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
            <button className="button">
              <span className="button__line"></span>
              <span className="button__line"></span>
              <span className="button__line"></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
