import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 60px);
  row-gap: 15px;
`;

export const ContactListWrapper = styled.div`
  width: 100%;
`;

export const LoginText = styled.div`
  font-size: 25px;
  font-weight: 400;
`;

export const ButtonStyled = styled.button`
  font-size: 15px;
  font-weight: 400;
  background: white;
  border: 1px solid #b4b4b4;
  height: 35px;
  border-radius: 10px;
  width: 250px;
  cursor: pointer;

  &:hover {
    background: #42b549;
  }
`;

export const InputStyled = styled.input`
  width: 250px;
  height: 30px;
  border: 1px solid #b4b4b4;
  border-radius: 10px;
  padding: 15px;
`;
