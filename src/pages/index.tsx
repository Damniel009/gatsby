import * as React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "../components/carousel/carousel";
import { graphql } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div>
          <Carousel></Carousel>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
