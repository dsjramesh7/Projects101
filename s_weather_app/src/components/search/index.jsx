import React from "react";

const Search = ({ setSearchCity, searchCity, handleSearchCity }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <input
        value={searchCity}
        type="text"
        placeholder="Search for a city..."
        name="search"
        className="flex-1 border border-green-500 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        onChange={(e) => {
          setSearchCity(e.target.value);
        }}
      />
      <button
        onClick={handleSearchCity}
        className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
