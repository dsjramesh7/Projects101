import React, { useState } from "react";
import Weather from "./components/weather";

const App = () => {
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchCity = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Weather
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearchCity={handleSearchCity}
      />
    </div>
  );
};

export default App;
