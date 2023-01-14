import { useContext, useState, useEffect, SetStateAction } from "react";
import { Virtuoso } from "react-virtuoso";
import { toast } from "react-toastify";

import SearchComponent from "components/SearchComponent";
import AvatarComponent from "components/Avatar";
import ModalDelete from "components/widgets/ModalForm/ModalDelete";
import ModalForm from "components/widgets/ModalForm";
import { QueryContext } from "contexts/contactQueryContext";
import getAcronym from "utils/acronym";
import ModalDetailContact from "../widgets/ModalDetailContact";
import customAxios from "@/utils/client";

import {
  ContactListDisplay,
  DipslayContactWrapper,
  NameDisplay,
  NumberDisplay,
} from "./styled";

import type { contactType, phoneType } from "interfaces/Contact";
import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export type modalDeleteDisplayType = {
  modalTitle: string;
  modalMessage: EmotionJSX.Element;
  id: string;
  deleteType: "contact" | "number";
};

const VirtualListComponent = () => {
  const appContext = useContext(QueryContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModalDelete, setDisplayModalDelete] = useState(false);
  const [displayModalEdit, setDisplayModalEdit] = useState(false);
  const [selectedContact, setSelectedContact] = useState<contactType>();
  const [selectedNumber, setSelectedNumber] = useState<phoneType>();

  const [modalDeleteDisplay, setModalDeleteDisplay] =
    useState<modalDeleteDisplayType>();

  useEffect(() => {
    if (!displayModalEdit) {
      setSelectedNumber(undefined);
    }
  }, [displayModalEdit]);

  const handleClickDetail = (data: contactType) => {
    setSelectedContact(data);
    setDisplayModal(true);
  };

  const detailAvatar = getAcronym(
    `${selectedContact?.firstname} ${selectedContact?.lastname}`
  );

  const handleCloseAllModal = () => {
    setDisplayModal(false);
    setDisplayModalDelete(false);
    setDisplayModalEdit(false);
    setDisplayModalEdit(false);

    setSelectedNumber(undefined);
    setSelectedContact(undefined);
  };

  const handleDelete = async () => {
    await customAxios.delete(`/contacts/${selectedContact?.id}`).then(() => {
      toast.success("Success Delete Contact!");
      appContext?.refetch();
      setDisplayModalDelete(false);
      setSelectedContact(undefined);
    });
  };

  return (
    <>
      <SearchComponent
        data-testid="search-component"
        setSearch={appContext?.setSearch}
      />
      <Virtuoso
        data-testid="virtuoso-component"
        style={{ height: "80vh" }}
        data={appContext?.data}
        endReached={appContext?.loadMore}
        itemContent={(index, user: contactType) => {
          const { acronym } = getAcronym(
            appContext?.data[index]?.firstname as string
          );

          return (
            <ContactListDisplay key={index}>
              <AvatarComponent displayString={acronym} />
              <DipslayContactWrapper onClick={() => handleClickDetail(user)}>
                <NameDisplay>
                  {user?.firstname} {user?.lastname}
                </NameDisplay>
                <NumberDisplay>{user?.phone}</NumberDisplay>
              </DipslayContactWrapper>
            </ContactListDisplay>
          );
        }}
      />
      <ModalDetailContact
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        detailAvatar={detailAvatar}
        selectedContact={selectedContact as contactType}
        setDisplayModalEdit={setDisplayModalEdit}
        setSelectedNumber={
          setSelectedNumber as unknown as React.Dispatch<
            SetStateAction<contactType>
          >
        }
        setModalDeleteDisplay={
          setModalDeleteDisplay as React.Dispatch<
            SetStateAction<modalDeleteDisplayType>
          >
        }
        setDisplayModalDelete={setDisplayModalDelete}
      />
      <ModalDelete
        displayModalDelete={displayModalDelete}
        setDisplayModalDelete={setDisplayModalDelete}
        setDisplayModalDetail={setDisplayModal}
        modalTitle={modalDeleteDisplay?.modalTitle as string}
        modalMessage={modalDeleteDisplay?.modalMessage as EmotionJSX.Element}
        handleDelete={handleDelete}
        idData={modalDeleteDisplay?.id as string}
      />
      <ModalForm
        handleCloseAllModal={handleCloseAllModal}
        setDisplayAddModal={setDisplayModalEdit}
        displayAddModal={displayModalEdit}
        dataEdit={selectedNumber}
      />
    </>
  );
};

export default VirtualListComponent;
