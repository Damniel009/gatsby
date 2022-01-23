import * as React from "react";

import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";

import "./Searchbar.scss";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Helmet>
        <script src="https://cdn.tailwindcss.com"></script>
      </Helmet>

      <Navbar></Navbar>

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
