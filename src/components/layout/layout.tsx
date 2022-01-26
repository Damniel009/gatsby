import * as React from "react";

import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import { Helmet } from "react-helmet";

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
