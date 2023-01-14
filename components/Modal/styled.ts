import styled from "@emotion/styled";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  background: #8080809c;
  position: absolute;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  visibility: visible;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const ModalContent = styled.div`
  background: white;
  min-height: 16vh;
  min-width: 36vw;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0px 0px 27px -6px rgba(0, 0, 0, 0.39);

  @media (min-width: 820px) {
    width: 350px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
`;

export const ModalBody = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  display: flex;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    background: whitesmoke;
  }
`;
