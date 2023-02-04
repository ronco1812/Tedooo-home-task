import React, { useState } from "react";
import Button from "../../Button/Button";
import {
  Buttons,
  Footer,
  LikeAndCommentInfo,
  LikesAndCommentsContainer,
  StyledLabel,
} from "../styles";
import { ReactComponent as GreenLike } from "../../../assets/icons/greenLike.svg";
import { ReactComponent as LikeIcon } from "../../../assets/icons/likeIcon.svg";
import { ReactComponent as LikedIconBlue } from "../../../assets/icons/likedIconBlue.svg";

import { ReactComponent as CommentIcon } from "../../../assets/icons/commentIcon.svg";

interface Props {
  totalLikes: number;
  totalComments: number;
  didLike: boolean;
}

const CardFooter: React.FC<Props> = ({
  totalComments,
  totalLikes,
  didLike,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(didLike);
  let [postLikes, setPostLikes] = useState<number>(totalLikes);

  const handleLikeClick = () => {
    !isLiked ? postLikes++ : postLikes--;
    setPostLikes(postLikes);
    setIsLiked(!isLiked);
  };
  return (
    <Footer>
      <LikesAndCommentsContainer>
        <LikeAndCommentInfo>
          <GreenLike />
          {postLikes}
          <StyledLabel>Likes</StyledLabel>
        </LikeAndCommentInfo>
        <LikeAndCommentInfo>
          {totalComments}
          <StyledLabel>Comments</StyledLabel>
        </LikeAndCommentInfo>
      </LikesAndCommentsContainer>
      <Buttons>
        <Button
          text="Like"
          icon={isLiked ? <LikedIconBlue /> : <LikeIcon />}
          isLiked={isLiked}
          onClick={handleLikeClick}
        />
        <Button text="Comment" icon={<CommentIcon />} />
      </Buttons>
    </Footer>
  );
};

export default CardFooter;
