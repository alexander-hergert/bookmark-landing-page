import React, { useState } from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeatureTabs from "./FeatureTabs/FeatureTabs";
import FeatureDetails from "./FeatureDetails/FeatureDetails";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState("1");

  const handleClick = (e) => {
    const dataSetValue = e.target.getAttribute("data-set");
    setSelectedFeature(dataSetValue);
  };

  return (
    <section className="w-full md:mt-32">
      <FeaturesTitle />
      <FeatureTabs
        handleClick={handleClick}
        selectedFeature={selectedFeature}
      />
      <FeatureDetails selectedFeature={selectedFeature} />
    </section>
  );
};

export default Features;
