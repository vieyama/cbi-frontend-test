import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useEffect,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import VirtualKeyboard from "components/VirtualKeyboard";
import Modal from "components/Modal";
import Button from "components/Button";
import { QueryContext } from "contexts/contactQueryContext";
import customAxios from "@/utils/client";

import { FormStyled } from "./styled";

import { phoneType } from "interfaces/Contact";
import { BASE_URL } from "constants/globalVariable";

interface IModalForm {
  setDisplayAddModal: Dispatch<SetStateAction<boolean>>;
  displayAddModal: boolean;
  dataEdit?: phoneType;
  handleCloseAllModal?: () => void;
}

type FormValuesType = {
  firstname: string;
  lastname: string;
  phone: string;
};

const ModalForm: React.FC<IModalForm> = ({
  displayAddModal,
  setDisplayAddModal,
  dataEdit,
  handleCloseAllModal,
}) => {
  const [input, setInput] = useState("");
  const keyboard = React.useRef<{
    input: { value: string };
    setInput: Dispatch<SetStateAction<string>>;
  }>(null);
  const appContext = useContext(QueryContext);

  const { register, handleSubmit, setValue } = useForm<FormValuesType>();

  useEffect(() => {
    setValue("firstname", dataEdit?.firstname as string);
    setValue("lastname", dataEdit?.lastname as string);
    setValue("phone", dataEdit?.phone as string);
  }, [dataEdit]);

  const onSubmit = async (data: FormValuesType) => {
    const dataSave = {
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
    };

    await customAxios
      .post(`${BASE_URL}/contacts`, {
        ...dataSave,
      })
      .then(() => {
        toast.success("Success Add New Contact!");
        appContext?.refetch();
        setDisplayAddModal(false);
      });
  };

  const onSubmitEdit = async (data: FormValuesType) => {
    const dataSave = {
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
    };

    await customAxios
      .put(`${BASE_URL}/contacts/${dataEdit?.id}`, {
        ...dataSave,
      })
      .then(() => {
        toast.success("Success Edit Contact!");
        appContext?.refetch();
        handleCloseAllModal && handleCloseAllModal();
      });
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboard.current?.setInput(input);
  };
  return (
    <Modal
      isOpen={displayAddModal}
      setIsOpen={setDisplayAddModal}
      modalTitle="Add Contact"
    >
      <FormStyled onSubmit={handleSubmit(dataEdit ? onSubmitEdit : onSubmit)}>
        <input
          className="input"
          {...register("firstname")}
          placeholder="First Name"
        />
        <input
          className="input"
          {...register("lastname")}
          placeholder="Last Name"
        />
        <input
          className="input"
          value={input}
          placeholder="Phone Number"
          maxLength={14}
          {...register("phone")}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeInput(e)
          }
        />
        <VirtualKeyboard keyboardRef={keyboard} onChange={setInput} />
        <Button type="submit">Submit</Button>
      </FormStyled>
    </Modal>
  );
};

export default ModalForm;
