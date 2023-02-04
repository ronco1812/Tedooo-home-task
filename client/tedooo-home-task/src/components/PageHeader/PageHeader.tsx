import React from "react";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { StyledHeader, Container } from "./styles";
import { ReactComponent as TedoooLogo } from "../../assets/tedoooLogo.svg";
import { ReactComponent as DefaultUserPic } from "../../assets/defaultUserPicture.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/homeIcon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/messageIcon.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bellIcon.svg";

const PageHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <TedoooLogo />
        <SearchBar placeholder="Search" />
      </Container>
      <Container>
        <Button text="Home" icon={<HomeIcon />} selected={true} />
        <Button text="Messaging" icon={<MessageIcon />} />
        <Button text="Notifications" icon={<BellIcon />} />
        <DefaultUserPic />
      </Container>
    </StyledHeader>
  );
};

export default PageHeader;
