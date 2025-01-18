import React from "react";
import { rides1 } from "../UI/Icons";
import { IconBase } from "react-icons";
// import Language from "../../assets/Language.png"

function GLobalContent({ heading, bottom, amount, Icon = rides1 }) {
  return (
    <div className="border-2 py-4 px-6 rounded-2xl w-full h-[128px]  ">
      <div className="flex justify-between  mb-1 ">
        <div className="flex flex-col   ">
          <span className=" text-base font-medium text-[#737373] ">
            {heading}
          </span>
          <span className="text-2xl font-medium line   ">{amount}</span>     
           {/* dummy data  */}
        </div>
        <div className="bg-[#1761EE] p-5 rounded-full ">
          <Icon />
        </div>
      </div >
      <span className="pt-5 text-xs font-medium pb-16 text-[#737373]">{bottom}</span>
    </div>
  );
}

export default GLobalContent;
