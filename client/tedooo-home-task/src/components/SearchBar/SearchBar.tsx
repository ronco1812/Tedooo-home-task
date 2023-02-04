import React from "react";

interface Props {
  placeholder: string;
}

const SearchBar: React.FC<Props> = ({ placeholder }) => {
  return (
    <div>
      <img alt="search" />
      <input placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
