import React from "react";
import Button from "../../Button/Button";

interface Props {
  totalLikes: number;
  totalComments: number;
}

const CardFooter: React.FC<Props> = ({ totalComments, totalLikes }) => {
  return (
    <div>
      <div>
        <div>
          <img alt="likes" />
          {totalLikes}
        </div>
        <div>
          <img alt="comments" />
          {totalComments}
        </div>
      </div>
      <div>
        <Button text="like" />
        <Button text="comment" />
      </div>
    </div>
  );
};

export default CardFooter;
