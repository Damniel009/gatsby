import React from "react";
import Layout from "../components/layout/layout";
import { Button } from '@chakra-ui/react'
import { graphql } from "gatsby";

const ChakraPage = () => {
  return (
    <Layout pageTitle="This is chakra">
      <p>
        Chakra UI
        <Button colorScheme='blue'>Button</Button>
      </p>
    </Layout>
  );
};

export default ChakraPage;

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
