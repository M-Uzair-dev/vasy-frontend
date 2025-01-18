import React from "react";

const LoaderSpinner = ({ height = "80vh" }) => {
  return (
    <div className={`h-[${height}] flex justify-center items-center`}>
      <div className="loader-spinner"></div>
    </div>
  );
};

export default LoaderSpinner;
