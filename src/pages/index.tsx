import * as React from "react";
import Navigation from "../components/navigation";
import { StaticImage } from "gatsby-plugin-image";
  
// markup
const IndexPage = () => {
  return (
    <div>
      <Navigation></Navigation>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </div>
  );
};

export default IndexPage;
