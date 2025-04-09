import { useEffect, useState } from "react";

export default function RandomBackgroundGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [bgColor, setBgColor] = useState("#000000");

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleGenerateRGBColor();
    } else {
      handleGenerateHEXColor();
    }
  }, [typeOfColor]);

  // random number
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // hex code generate function
  const handleGenerateHEXColor = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += list[randomColorUtility(list.length)];
    }
    setBgColor(hexCode);
  };

  // rgb code generate function
  const handleGenerateRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setBgColor(`rgb(${r},${g},${b})`);
  };
  return (
    <div
      className="h-screen w-full flex flex-col justify-center items-center text-center transition-all duration-500"
      style={{
        background: bgColor,
        color: "white",
      }}
    >
      <div className="bg-black/40 backdrop-blur-md px-8 py-10 rounded-2xl shadow-2xl flex flex-col gap-6 items-center max-w-md w-full border border-white/20">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide drop-shadow-md">
          🎨 Random Color Generator
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setTypeOfColor("hex")}
            className={`px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 
          ${
            typeOfColor === "hex"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-white text-purple-700 hover:bg-purple-100"
          }`}
          >
            HEX Mode
          </button>
          <button
            onClick={() => setTypeOfColor("rgb")}
            className={`px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 
          ${
            typeOfColor === "rgb"
              ? "bg-green-600 text-white shadow-lg"
              : "bg-white text-green-700 hover:bg-green-100"
          }`}
          >
            RGB Mode
          </button>
        </div>

        <button
          onClick={
            typeOfColor === "hex"
              ? handleGenerateHEXColor
              : handleGenerateRGBColor
          }
          className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300"
        >
          🔁 Generate Color
        </button>

        <div className="text-center mt-4">
          <h3 className="text-lg sm:text-xl font-bold">
            {typeOfColor === "hex" ? "HEX Color" : "RGB Color"}
          </h3>
          <p className="text-lg font-mono tracking-widest">{bgColor}</p>
        </div>
      </div>
    </div>
  );
}
