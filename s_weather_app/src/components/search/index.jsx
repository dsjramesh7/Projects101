import React from "react";

const Search = ({ setSearchCity, searchCity, handleSearchCity }) => {
  return (
    <div className="flex gap-4">
      <input
        value={searchCity}
        type="text"
        placeholder="Search Here...."
        name="search"
        className="border border-green-500 px-4 py-2"
        onChange={(e) => {
          setSearchCity(e.target.value);
        }}
      />
      <button onClick={handleSearchCity} className="cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Search;
