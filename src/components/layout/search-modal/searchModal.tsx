import * as React from "react";
import "./Searchbar.scss";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

interface ModalProps {
  onClose: () => void;
  size: string;
  isOpen: boolean;
}

const SearchModal: React.FC<ModalProps> = ({ onClose, size, isOpen }) => {
  return (
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
  );
};

export default SearchModal;
