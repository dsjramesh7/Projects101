import { useState } from "react";
import { animeListData } from "../../utils/data";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  // for single selection
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  // for mulit Selection
  const handleMultiSelection = (getCurrentId) => {
    let cpyMutliSelection = [...multipleSelected];
    const findIndexOfGetCurrentID = cpyMutliSelection.indexOf(getCurrentId);
    // console.log(findIndexOfGetCurrentID);
    if (findIndexOfGetCurrentID === -1) {
      cpyMutliSelection.push(getCurrentId);
    } else {
      cpyMutliSelection.splice(findIndexOfGetCurrentID, 1);
    }
    console.log(cpyMutliSelection);
    setMultipleSelected(cpyMutliSelection);
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6 tracking-wider">
        🔥 Anime Info Drop 🔥
      </h1>

      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={`relative overflow-hidden text-lg sm:text-xl font-bold px-8 py-4 rounded-xl border-2 
    ${
      enableMultiSelection
        ? "border-green-500 text-green-300"
        : "border-purple-500 text-purple-300"
    } 
   `}
      >
        {enableMultiSelection
          ? "🔥 Enable Single Selection Mode"
          : "🌀 Enable Multi Selection Mode"}
      </button>

      {animeListData && animeListData.length > 0 ? (
        animeListData.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-xl bg-gray-700 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.01]"
          >
            <div
              onClick={
                enableMultiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSingleSelection(item.id)
              }
              className="flex justify-between items-center cursor-pointer p-4 text-lg font-semibold bg-gray-800 rounded-t-2xl hover:bg-purple-700 transition-colors duration-300"
            >
              <span>{item.title}</span>
              {selected === item.id ? (
                <ChevronUp className="text-purple-300" />
              ) : (
                <ChevronDown className="text-purple-300" />
              )}
            </div>

            {enableMultiSelection
              ? multipleSelected.indexOf(item.id) !== -1 && (
                  <div className="bg-gray-900 text-purple-200 p-4 rounded-b-2xl border-t border-purple-600 transition-all duration-300">
                    {item.description}
                  </div>
                )
              : selected === item.id && (
                  <div className="bg-gray-900 text-purple-200 p-4 rounded-b-2xl border-t border-purple-600 transition-all duration-300">
                    {item.description}
                  </div>
                )}
          </div>
        ))
      ) : (
        <p className="text-red-400 text-xl font-medium">No Data Present 😔</p>
      )}
    </div>
  );
};

export default Accordion;
