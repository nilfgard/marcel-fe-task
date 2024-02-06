import { StyledButton } from "./Button.styles";
import { FC } from "react";

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => (
  <StyledButton>{title}</StyledButton>
);
export default Button;
