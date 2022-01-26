import React from "react";
import Layout from "../components/layout/layout";

import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle="About Me">
      <p>{t("about")}</p>
    </Layout>
  );
};

export default AboutPage;

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
