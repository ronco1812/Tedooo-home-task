import styled from "styled-components";
import { NEUTRAL_COLORS } from "../../ui/globalStyles";

interface ButtonProps {
  selected: Boolean;
  isLiked: Boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  gap: 8px;
  border: none;
  background-color: white;
  align-items: center;
  color: ${({ selected, isLiked }) =>
    isLiked
      ? NEUTRAL_COLORS.LIKE_BLUE
      : selected
      ? NEUTRAL_COLORS.LIGHT_GREEN
      : NEUTRAL_COLORS.GREY_40};
  cursor: pointer;
  border-bottom: ${({ selected }) =>
    selected ? `1px solid ${NEUTRAL_COLORS.LIGHT_GREEN}` : 400};
  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  height: 100%;
  padding: 14px 0;
`;
