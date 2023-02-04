import React from "react";
import { feedItem } from "../../types/FeedItem.type";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";

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
  } = feedItem;
  return (
    <div>
      <CardHeader
        userId={userId}
        avatar={avatar}
        date={date}
        shopName={shopName}
        text={text}
        username={username}
      />
      <div>
        {Array.isArray(images) ? (
          images.map((image, index) => (
            <img key={index} src={image} alt="pic" />
          ))
        ) : (
          <img src={images} alt="pic" />
        )}
      </div>
      <CardFooter totalComments={comments} totalLikes={likes} />
    </div>
  );
};

export default FeedCard;
