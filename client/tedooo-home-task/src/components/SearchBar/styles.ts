import styled from "styled-components";
import { NEUTRAL_COLORS } from "../../ui/globalStyles";

export const SearchContainer = styled.div`
  display: flex;
  background-color: ${NEUTRAL_COLORS.GREY_20};
  border-radius: 32px;
  padding: 11px 12px;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
`;
