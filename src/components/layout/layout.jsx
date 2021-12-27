import * as React from "react";
import { Link } from "gatsby";
import {
  navbar_container,
  logo,
  space,
  nav_options_container,
  active,
  btn,
} from "./layout.module.scss";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import Footer from '../layout/footer'

import { SearchIcon } from "@chakra-ui/icons";

import "./Searchbar.scss";

const Layout = ({ pageTitle, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const openSearchDialog = () => {
    setSize("full");
    onOpen();
  };

  return (
    <div>
      <div className={navbar_container}>
        <div className={logo}>
          <img alt="logo" src="https://cdn4.iconfinder.com/data/icons/smart-home-38/100/smart-home-26-512.png" />
        </div>

        <div className={space}></div>

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

        <div className={nav_options_container}>
          <nav>
            <ul className="nav-links">
              <li className="nav__item">
                <Link activeClassName={active} to="/">
                  <div className="link">Home</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/servicii">
                  <div className="link">Servicii</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/work">
                  <div className="link">Work</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/introducere">
                  <div className="link">Introducere</div>
                </Link>
              </li>
              <li className="nav__item">
                <Link activeClassName={active} to="/about">
                  <div className="link">About</div>
                </Link>
              </li>
              <li className="nav__item searchIcon">
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
      </div>

      <main>{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
