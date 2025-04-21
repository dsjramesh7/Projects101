import React from "react";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/index";
import FavouritePage from "./pages/favourites/index";
import AboutPage from "./pages/about/index";

const App = () => {
  return (
    <div>
      <div className="min-h-screen p-6 text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
