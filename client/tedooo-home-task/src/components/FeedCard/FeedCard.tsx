import React from "react";
import { feedItem } from "../../types/FeedItem";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";
import { ImageContainer, StyledCard, StyledImg } from "./styles";

interface Props {
  feedItem: feedItem;
}

const FeedCard: React.FC<Props> = ({ feedItem }) => {
  const {
    userId,
    username,
    text,
    comments,
    likes,
    avatar,
    date,
    shopName,
    images,
    didLike,
  } = feedItem;

  return (
    <StyledCard>
      <CardHeader
        userId={userId}
        avatar={avatar}
        date={date}
        shopName={shopName}
        text={text}
        username={username}
      />
      <ImageContainer>
        {images.map((image: string, index: number) => (
          <StyledImg key={index} src={image} alt="pic" />
        ))}
      </ImageContainer>
      <CardFooter
        totalComments={comments}
        totalLikes={likes}
        didLike={didLike}
      />
    </StyledCard>
  );
};

export default FeedCard;
