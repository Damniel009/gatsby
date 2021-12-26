import React from "react";
import Layout from "../components/layout/layout";
import { Button } from '@chakra-ui/react'

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
