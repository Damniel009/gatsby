import * as React from "react";
import { Link } from "gatsby";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

import "./Searchbar.scss";

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

const Navbar = () => {
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

      <div className={nav_options_container}>
        <nav>
          <ul className="nav-links">
            {menuOptions.map((menuOption, index) => {
              return (
                <li className="nav__item" key={menuOption.name}>
                  <Link to={menuOption.link} activeClassName={active}>
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

      <Drawer placement={"top"} onClose={onCloseDrawer} isOpen={isOpenDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            {menuOptions.map((menuOption,) => {
              return (
                <Link to={menuOption.link} activeClassName={active}>
                  <div className="link">{menuOption.name}</div>
                </Link>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal_body">
              <div className="modal_search_wrapper">
                <form method="get" className="modal_searchform" action="">
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Search..."
                    className="modal_input"
                  />
                  <SearchIcon className="modal_search_icon" />
                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
