import React, { useState } from "react";
import Weather from "./components/weather";

const App = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=dcc2f952d505ad17d42e562fbcb4884e`
      );
      const result = await res.json();

      // console.log(result);
      if (result) {
        setWeatherData(result);
        setSearchCity("");
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearchCity = async () => {
    fetchData();
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Weather
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        handleSearchCity={handleSearchCity}
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
