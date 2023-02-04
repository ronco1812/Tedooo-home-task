import React, { ReactElement } from "react";

interface Props {
  text: string;
  onClick?: () => void;
  icon?: ReactElement;
}

const Button: React.FC<Props> = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
