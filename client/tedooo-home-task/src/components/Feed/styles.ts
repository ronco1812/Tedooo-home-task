import styled from "styled-components";
import { NEUTRAL_COLORS } from "../../ui/globalStyles";

export const Container = styled.div`
  background-color: ${NEUTRAL_COLORS.GREY_20};
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 160px;
  align-items: center;
`;
