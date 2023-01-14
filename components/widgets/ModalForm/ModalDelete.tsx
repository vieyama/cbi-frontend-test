import React, { Dispatch, SetStateAction } from "react";

import Button from "components/Button";
import Modal from "components/Modal";
import { DetailButtonWrapper } from "components/VirtualList/styled";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";

interface IModalDelete {
  displayModalDelete: boolean;
  setDisplayModalDelete: Dispatch<SetStateAction<boolean>>;
  setDisplayModalDetail: Dispatch<SetStateAction<boolean>>;
  modalTitle: string;
  modalMessage: EmotionJSX.Element;
  handleDelete: (id: string) => void;
  idData: string;
}
const ModalDelete: React.FC<IModalDelete> = ({
  displayModalDelete,
  setDisplayModalDelete,
  setDisplayModalDetail,
  modalTitle,
  modalMessage,
  handleDelete,
  idData,
}) => {
  return (
    <Modal
      isOpen={displayModalDelete}
      setIsOpen={setDisplayModalDelete}
      modalTitle={modalTitle}
    >
      {modalMessage}
      <br />
      <DetailButtonWrapper>
        <Button onClick={() => handleDelete(idData)}>Delete</Button>
        <Button
          onClick={() => {
            setDisplayModalDetail(true);
            setDisplayModalDelete(false);
          }}
        >
          Cancel
        </Button>
      </DetailButtonWrapper>
    </Modal>
  );
};

export default ModalDelete;
