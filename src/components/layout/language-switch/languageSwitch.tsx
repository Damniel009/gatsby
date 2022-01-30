import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { Select } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const LanguageSwitch = () => {
  const { languages, originalPath, language } = useI18next();

  const [value, setValue] = React.useState(language);
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        {languages.map((lng) => (
          <Link to={originalPath} language={lng} key={lng}>
            <Radio value={lng}>{lng}</Radio>
          </Link>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default LanguageSwitch;
