import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Radio,
  RadioGroup,
  VStack,
  Button,
} from "@chakra-ui/react";

const LanguageSwitch = () => {
  const { languages, originalPath, language } = useI18next();

  const [value, setValue] = React.useState(language);
  return (
    <Popover>
      <PopoverTrigger>
        {/* <img src="src/images/icons/hu.svg"></img> */}
        <Button
          leftIcon={
            <i className={language === "hu" ? "hu-flag" : "ro-flag"}></i>
          }
        >
          {language === "hu" ? "HU" : "RO"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <RadioGroup onChange={setValue} value={value}>
            <VStack direction="row">
              {languages.map((lng) => (
                <Link to={originalPath} language={lng} key={lng}>
                  <Radio value={lng}>
                    {lng === "hu" ? "Magyar" : "Romana"}
                  </Radio>
                </Link>
              ))}
            </VStack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitch;
