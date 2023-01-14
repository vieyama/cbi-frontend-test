import styled from "@emotion/styled";

export const ContactListDisplay = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 12px;
  cursor: pointer;

  &: hover {
    background: whitesmoke;
  }
`;

export const DipslayContactWrapper = styled.div`
  font-family: "Fira Sans", sans-serif;

  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const NameDisplay = styled.span`
  font-size: 19px;
  font-weight: bold;
`;

export const NumberDisplay = styled.span`
  font-size: 15px;
  color: grey;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
`;

export const DetailButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    width: 100%;
    align-items: center;
    column-gap: 12px;
}`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

export const DetailInfoDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  font-family: "Fira Sans", sans-serif;
  width: 100%;
`;
export const DetailNumberDisplay = styled.div`
  margin-top: 6px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
  padding: 0px 24px;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: whitesmoke;
  }
`;
