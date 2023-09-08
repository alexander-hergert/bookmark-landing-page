import React from "react";
import Tab from "./Tab";
import { tabs } from "../../data";

const FeatureTabs = ({ handleClick, selectedFeature }) => {
  return (
    <div className="md:flex md:justify-center p-5">
      {tabs.map((item) => (
        <Tab
          key={item.id}
          handleClick={handleClick}
          selectedFeature={selectedFeature}
          title={item.title}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default FeatureTabs;
