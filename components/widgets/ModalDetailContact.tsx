import React from "react";

import Modal from "../Modal";

import type { Dispatch, SetStateAction } from "react";
import {
  DetailButtonWrapper,
  DetailInfoDisplay,
  DetailNumberDisplay,
  DetailWrapper,
  EditButton,
  NameDisplay,
  NumberDisplay,
} from "../VirtualList/styled";
import AvatarComponent from "../Avatar";
import { contactType } from "@/interfaces/Contact";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { modalDeleteDisplayType } from "../VirtualList";
import Button from "../Button";

interface IModalDetailContact {
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  detailAvatar: {
    acronym: string;
  };
  selectedContact: contactType;
  setDisplayModalEdit: Dispatch<SetStateAction<boolean>>;
  setModalDeleteDisplay: Dispatch<SetStateAction<modalDeleteDisplayType>>;
  setDisplayModalDelete: Dispatch<SetStateAction<boolean>>;
  setSelectedNumber: Dispatch<SetStateAction<contactType>>;
}

const ModalDetailContact: React.FC<IModalDetailContact> = ({
  displayModal,
  setDisplayModal,
  detailAvatar,
  selectedContact,
  setDisplayModalEdit,
  setModalDeleteDisplay,
  setDisplayModalDelete,
  setSelectedNumber,
}) => {
  return (
    <Modal
      isOpen={displayModal}
      setIsOpen={setDisplayModal}
      modalTitle="Detail Contact"
    >
      <DetailWrapper>
        <AvatarComponent
          displayString={detailAvatar.acronym || ""}
          size="60px"
        />
        <DetailInfoDisplay>
          <NameDisplay>
            {selectedContact?.firstname} {selectedContact?.lastname}
          </NameDisplay>
          <DetailNumberDisplay>
            <NumberDisplay>
              {selectedContact?.phone}{" "}
              <div className="button-wrapper">
                <EditButton
                  onClick={() => {
                    setDisplayModalEdit(true);
                    setSelectedNumber(selectedContact);
                  }}
                >
                  <FiEdit />
                </EditButton>
                <EditButton
                  data-testid="btn-delete-number"
                  onClick={() => {
                    setModalDeleteDisplay({
                      modalTitle: "Delete Number",
                      modalMessage: (
                        <span>
                          Are you sure you want to delete{" "}
                          <b>{selectedContact?.phone}</b> from your contact ?
                        </span>
                      ),
                      deleteType: "number",
                      id: selectedContact?.phone as string,
                    });
                    setDisplayModal(false);
                    setDisplayModalDelete(true);
                  }}
                >
                  <FiTrash2 />
                </EditButton>
              </div>
            </NumberDisplay>
          </DetailNumberDisplay>
        </DetailInfoDisplay>
      </DetailWrapper>
    </Modal>
  );
};

export default ModalDetailContact;
