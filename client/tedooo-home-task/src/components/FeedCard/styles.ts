import styled from "styled-components";
import { BORDER_BOTTOM, NEUTRAL_COLORS } from "../../ui/globalStyles";

export const StyledCard = styled.div`
  box-shadow: 0px 1px 7px rgba(40, 47, 45, 0.07);
  border-radius: 4px;
  width: 100%;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 24px 16px 24px;
  background-color: ${NEUTRAL_COLORS.WHITE};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DateAndShop = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: ${NEUTRAL_COLORS.GREY_40};
`;

export const ShopName = styled.label`
  color: ${NEUTRAL_COLORS.LIKE_BLUE};
  font-weight: 500;
`;

export const StyledLabel = styled.label`
  color: ${NEUTRAL_COLORS.GREY_40};
  font-weight: 500;
`;

export const StyledUsername = styled.label`
  color: ${NEUTRAL_COLORS.BLACK};
  font-weight: 500;
  font-size: 16px;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 517px;
  justify-content: center;
  gap: 12px;
  max-width: inherit;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: ${NEUTRAL_COLORS.WHITE};
  padding: 0 24px;
`;

export const LikesAndCommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${BORDER_BOTTOM};
  height: 50%;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;
`;

export const LikeAndCommentInfo = styled.div`
  display: flex;
  gap: 4px;
  color: ${NEUTRAL_COLORS.GREY_40};
`;
