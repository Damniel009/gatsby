import * as React from "react";
import { Link } from "gatsby";
import { SearchIcon } from "@chakra-ui/icons";

import "./footer.scss";

const Footer = ({}) => {
  return (
    <footer className="site-footer">
      <hr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <h6>Rolunk</h6>
            <p className="text-justify">
              Cégünk a hőszivattyús rendszerek és a hővisszanyerős
              szellőzőrendszerek telepítésének specialistája. Minden felkérést
              komolyan veszünk és a tervezés, telepítés szakaszában is a
              legnagyobb gondossággal járunk el. Nem alkalmazunk
              alvállalkozókat, a projektek teljes kivitelezését saját
              munkaerővel valósítjuk meg!
            </p>
          </div>

          <div className="col-xs-6 col-md-2 row-half">
            <h6>Gyors gombok</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/servicii">Servicii</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/introducere">Introducere</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 row-half">
            <h6>Megtalalsz minket</h6>
            <ul className=" social-icons">
              <li>
                <a href="/" className="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/" className="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/" className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
