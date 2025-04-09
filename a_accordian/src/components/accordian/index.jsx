import { useState } from "react";
import { animeListData } from "../../utils/data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  console.log("selected", selected);
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen p-4">
      {animeListData && animeListData.length > 0 ? (
        animeListData.map((item) => (
          <div key={item.id}>
            <div
              onClick={() => {
                handleSingleSelection(item.id);
              }}
              className="flex justify-between"
            >
              {item.title}
              <p>➕</p>
            </div>

            {selected === item.id ? (
              <div className="border border-red-500 p-4">
                {item.description}
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <p>No Data Present</p>
      )}
    </div>
  );
};
export default Accordian;
