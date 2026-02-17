import React from "react";
import Features from "../components/Features/Features";
import features from "../data/features.json";

function FeaturesPage() {
  return (
    <div className="page">
        <Features features={features} />
      </div>
  );
}

export default FeaturesPage;
