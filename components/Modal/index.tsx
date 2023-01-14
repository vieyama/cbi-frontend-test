import React, { Dispatch, SetStateAction } from "react";
import { FiX } from "react-icons/fi";

import {
  CloseButton,
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalHeader,
} from "./styled";

interface IModal {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  modalTitle: string;
}
const Modal: React.FC<IModal> = ({
  isOpen,
  setIsOpen,
  children,
  modalTitle,
}) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <span>{modalTitle}</span>
          <CloseButton onClick={() => setIsOpen(!isOpen)}>
            <FiX />
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
