import * as React from "react";
import { Link } from "gatsby";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

import { useI18next } from "gatsby-plugin-react-i18next";

import SearchModal from "../search-modal/searchModal";
import LanguageSwitch from "../language-switch/languageSwitch";

const {
  navbar_container,
  logo,
  space,
  nav_options_container,
  nav_options_container_mobile,
  active,
  btn,
  hamburger_icon,
  hamburger_btn,
} = require("./navbar.module.scss");

const menuOptions = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Servicii",
    link: "/servicii",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Introducere",
    link: "/introducere",
  },
  {
    name: "About",
    link: "/about",
  },
];

const convertMenuLinks = (link: string, language: string) => {
  if (language === "ro") {
    const newLink = "/ro" + link;
    return newLink;
  }
  return link;
};

const Navbar = () => {
  const { language } = useI18next();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();

  const [size, setSize] = React.useState("md");

  const openSearchDialog = () => {
    setSize("full");
    onOpen();
  };

  return (
    <div className={navbar_container}>
      <div className={logo}>
        <img
          alt="logo"
          src="https://cdn4.iconfinder.com/data/icons/smart-home-38/100/smart-home-26-512.png"
        />
      </div>

      <div className={space}></div>

      {/* Desktop navigation */}
      <div className={nav_options_container}>
        <nav>
          <ul className="nav-links">
            <li className="nav__item" key={"language_switch"}>
              <LanguageSwitch></LanguageSwitch>
            </li>
            {menuOptions.map((menuOption, index) => {
              return (
                <li className="nav__item" key={menuOption.name}>
                  <Link
                    key={menuOption.name}
                    to={convertMenuLinks(menuOption.link, language)}
                    activeClassName={active}
                  >
                    <div className="link">{menuOption.name}</div>
                  </Link>
                </li>
              );
            })}
            <li className="nav__item searchIcon" key={"search"}>
              <Button
                leftIcon={<SearchIcon />}
                variant="ghost"
                className={btn}
                onClick={() => openSearchDialog()}
              />
            </li>
          </ul>
        </nav>
      </div>

      {/* Button to open mobile navigation */}
      <div className={nav_options_container_mobile}>
        <nav>
          <Button
            className={hamburger_btn}
            colorScheme="white"
            onClick={onOpenDrawer}
          >
            <HamburgerIcon className={hamburger_icon} />
          </Button>
        </nav>
      </div>

      {/* Popup for mobile navigation */}
      <Drawer placement={"top"} onClose={onCloseDrawer} isOpen={isOpenDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {menuOptions.map((menuOption) => {
              return (
                <Link
                  key={menuOption.name}
                  to={menuOption.link}
                  activeClassName={active}
                >
                  <div className="link">{menuOption.name}</div>
                </Link>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Popup for search modal */}
      <SearchModal onClose={onClose} size={size} isOpen={isOpen}></SearchModal>
    </div>
  );
};

export default Navbar;
