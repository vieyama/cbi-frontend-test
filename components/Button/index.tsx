import { ButtonStyled } from "./styled";

import type { ButtonProps } from "interfaces/Button";

const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export default Button;
