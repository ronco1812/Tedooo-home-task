import styled from "styled-components";
import { NEUTRAL_COLORS } from "../../ui/globalStyles";

export const StyledHeader = styled.div`
  display: flex;
  background-color: ${NEUTRAL_COLORS.WHITE};
  height: 58px;
  justify-content: space-between;
  align-items: center;
  padding: 0 160px;
`;

export const Container = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  height: 100%;
`;
