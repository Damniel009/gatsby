import React from "react";
import Layout from "../components/layout/layout";
import { Button } from '@chakra-ui/react'
import { graphql } from "gatsby";

const ServiciiPage = () => {
  return (
    <Layout pageTitle="Servicii">
      <p>
        Servicii
      </p>
    </Layout>
  );
};

export default ServiciiPage;

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
