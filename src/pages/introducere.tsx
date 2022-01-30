import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>
      BlogPage
      </p>
    </Layout>
  );
};

export default BlogPage;

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
