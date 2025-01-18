import React from "react";

const CustomBadge = ({ text = "Check", type = "success" }) => {
  const getBadgeStyles = (type) => {
    switch (type) {
      case "success":
        return "bg-[#069803]/10 text-[#069803]";
      case "error":
        return "bg-[#DD2D4A]/10 text-red-800";
      case "warning":
        return "bg-[#EAAB0A]/10 text-[#EAAB0A]";
      case "info":
        return "bg-[#0A72EA]/10 text-[#0A72EA]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`text-xs font-medium px-4 py-2 rounded-3xl ${getBadgeStyles(
        type
      )}`}
    >
      {text}
    </span>
  );
};

export default CustomBadge;
