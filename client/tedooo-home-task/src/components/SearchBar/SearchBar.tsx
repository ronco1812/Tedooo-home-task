import React from "react";
import { SearchContainer, SearchInput } from "./styles";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";

interface Props {
  placeholder: string;
}

const SearchBar: React.FC<Props> = ({ placeholder }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder={placeholder} />
    </SearchContainer>
  );
};

export default SearchBar;
