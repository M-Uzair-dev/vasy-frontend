import React from "react";

const LoaderSpinner = ({ height = "80vh", style, spinnerScale = 1 }) => {
  return (
    <div
      className={`h-[${height}] flex justify-center items-center`}
      style={style}
    >
      <div
        className="loader-spinner"
        style={{ scale: `${spinnerScale}` }}
      ></div>
    </div>
  );
};

export default LoaderSpinner;
