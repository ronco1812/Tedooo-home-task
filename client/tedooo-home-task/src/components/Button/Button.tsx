import React, { ReactElement } from "react";
import { StyledButton } from "./styles";

interface Props {
  text: string;
  onClick?: () => void;
  icon?: ReactElement;
  selected?: boolean;
  isLiked?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  onClick,
  icon,
  selected = false,
  isLiked = false,
}) => {
  return (
    <StyledButton onClick={onClick} selected={selected} isLiked={isLiked}>
      {icon}
      {text}
    </StyledButton>
  );
};

export default Button;
