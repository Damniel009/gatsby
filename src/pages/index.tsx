import * as React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "../components/carousel/carousel";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div>
        <div>
          <Carousel></Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
