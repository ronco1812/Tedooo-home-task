import React from "react";

interface Props {
  userId: string;
  avatar: string;
  date: string | Date;
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
    <div>
      <div>
        <img src={avatar} alt="profile" />
        <div>
          {username}
          <div>{`${shopName} ${date}`}</div>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CardHeader;
