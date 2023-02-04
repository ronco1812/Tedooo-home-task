import React from "react";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

const PageHeader: React.FC = () => {
  return (
    <div>
      <div>
        <img alt="icon" />
        <SearchBar placeholder="Search" />
      </div>
      <div>
        <Button text="Home" />
        <Button text="Messaging" />
        <Button text="Notifications" />
        <img alt="userPic" />
      </div>
    </div>
  );
};

export default PageHeader;
