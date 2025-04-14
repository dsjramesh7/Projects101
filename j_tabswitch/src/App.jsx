import React from "react";
import TabsSwitchArc101 from "../components/tabs-switch-arc";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

const App = () => {
  const tabsContent = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentIndex) => {
    console.log(currentIndex);
  };

  return (
    <>
      <TabsSwitchArc101 tabContent={tabsContent} onChange={handleChange} />
    </>
  );
};

export default App;
