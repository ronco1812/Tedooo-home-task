import React from "react";
import { getTimeDifference } from "../../../utils/utils";
import {
  DateAndShop,
  Dot,
  ShopName,
  StyledCardHeader,
  StyledLabel,
  StyledUsername,
  UserImage,
  UserInfoContainer,
} from "../styles";

interface Props {
  userId: string;
  avatar: string;
  date: Date;
  shopName: string;
  text: string;
  username: string;
}

const CardHeader: React.FC<Props> = ({
  avatar,
  date,
  shopName,
  text,
  username,
}) => {
  return (
    <StyledCardHeader>
      <UserInfoContainer>
        <UserImage src={avatar} alt="profile" />
        <div>
          <StyledUsername>{username}</StyledUsername>
          <DateAndShop>
            <ShopName>{shopName}</ShopName>
            <Dot />
            <StyledLabel>{getTimeDifference(date)}</StyledLabel>
          </DateAndShop>
        </div>
      </UserInfoContainer>
      <p>{text}</p>
    </StyledCardHeader>
  );
};

export default CardHeader;
