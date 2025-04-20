import React from "react";
import Search from "../search";

const Weather = ({
  searchCity,
  setSearchCity,
  handleSearchCity,
  loading,
  weatherData,
  error,
}) => {
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Search
        setSearchCity={setSearchCity}
        searchCity={searchCity}
        handleSearchCity={handleSearchCity}
      />

      <div className="mt-6">
        {error ? (
          <h1 className="text-red-500 text-center text-xl font-semibold">
            Error: {error}
          </h1>
        ) : loading ? (
          <h1 className="text-blue-500 text-center text-xl font-semibold">
            Loading, please wait...
          </h1>
        ) : (
          weatherData && (
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {weatherData?.name},{" "}
                <span className="text-gray-500">
                  {weatherData?.sys?.country}
                </span>
              </h2>

              <span className="block text-sm text-gray-500">
                {getCurrentDate()}
              </span>

              <div className="text-6xl font-bold text-blue-600">
                {weatherData?.main?.temp}°C
              </div>

              <p className="text-gray-700 capitalize text-lg">
                {weatherData?.weather?.[0]?.description || ""}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-xl font-semibold text-blue-700">
                    {weatherData?.wind?.speed} m/s
                  </p>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-xl">
                  <p className="text-xl font-semibold text-yellow-700">
                    {weatherData?.main?.humidity}%
                  </p>
                  <p className="text-sm text-gray-500">Humidity</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Weather;
