import { Dispatch, SetStateAction } from "react";
import { FiGrid, FiPlus } from "react-icons/fi";

import { AddButton, HeaderStyled } from "./styled";

interface IHeaderComponent {
  setDisplayAddModal: Dispatch<SetStateAction<boolean>>;
  displayAddModal: boolean;
}
const HeaderComponent: React.FC<IHeaderComponent> = ({
  setDisplayAddModal,
  displayAddModal,
}) => {
  return (
    <HeaderStyled data-testid="contact-header">
      <FiGrid />
      <h3>Contact</h3>
      <AddButton
        data-testid="btn-add-contact"
        onClick={() => setDisplayAddModal(!displayAddModal)}
      >
        <FiPlus />
      </AddButton>
    </HeaderStyled>
  );
};

export default HeaderComponent;
