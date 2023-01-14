import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px;
`;

export const HeaderStyled = styled.div`
  font-family: "Fira Sans", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 600px) {
    width: 64vw;
  }
`;

export const AddButton = styled.button`
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
