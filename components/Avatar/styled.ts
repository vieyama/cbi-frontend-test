import styled from "@emotion/styled";

export const AvatarWrapper = styled.div<{ size?: string }>`
  background: #cfd2cf;
  height: ${(props) => (props.size ? props.size : "40px")};
  width: ${(props) => (props.size ? props.size : "40px")};
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
