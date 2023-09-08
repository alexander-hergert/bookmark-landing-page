import React from "react";
import { features } from "../../../data";
import Detail from "./Detail";

const FeatureDetails = ({ selectedFeature }) => {
  return (
    <>
      {features
        .filter((item) => selectedFeature === item.id)
        .map((item) => (
          <Detail key={item.id} {...item} />
        ))}
    </>
  );
};

export default FeatureDetails;
