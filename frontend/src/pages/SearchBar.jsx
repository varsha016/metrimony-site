import React, { useState } from "react";

const SearchBar = ({ country }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    country.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
