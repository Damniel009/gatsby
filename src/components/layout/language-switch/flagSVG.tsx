import React from "react";
import HUflag from "../../../images/icons/hu.svg";
import ROflag from "../../../images/icons/ro.svg";

interface Flag {
  language: string;
}

const Flag: React.FC<Flag> = ({ language }) => {
  if (language === "hu") {
    return <HUflag width="12px"/>;
  } else {
    return <ROflag width="12px"/>;
  }
};

export default Flag;
