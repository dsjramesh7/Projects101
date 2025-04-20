import React from "react";
import Search from "../search";

const Weather = ({ searchCity, setSearchCity, handleSearchCity }) => {
  return (
    <div>
      <Search
        setSearchCity={setSearchCity}
        searchCity={searchCity}
        handleSearchCity={handleSearchCity}
      />
    </div>
  );
};

export default Weather;
