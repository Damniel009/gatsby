import * as React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

import "./Searchbar.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
