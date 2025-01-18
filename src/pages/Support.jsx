import React, { useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import MessageRow from "../components/Message/MessageRow";
import MessageSideBar from "../components/Message/MessageSideBar";
import MessageBody from "../components/Message/MessageBody";
import MessageInput from "../components/Message/MessageInput";
const image =
  "https://cdn4.iconfinder.com/data/icons/characters-5/512/1-08-512.png";
function Support() {
  const tabs = ["Riders", "Drivers", "Restaurants"];
  const [selectedTab, setselectedTab] = useState("Riders");
  return (
    <DashBoardLayout heading={"Support"}>
      <div className="p-4 bg-[#EDF2F7] flex justify-start gap-4 pb-0 rounded-t-xl">
        {tabs.map((item) => (
          <Tab
            key={item}
            text={item}
            selected={selectedTab === item}
            onClick={() => setselectedTab(item)}
          />
        ))}
      </div>
      <div className="flex h-[60vh]">
        <MessageSideBar />
        {/* Message Other SIde */}
        <div className="basis-9/12 px-2">
          <div className="flex items-center gap-2 py-6 font-bold text-xl">
            <div className="flex gap-x-2">
              <img width={45} height={45} alt="" src={image} />
              <div>
                <h2 className="font-semibold text-secondary text-base">
                  Username
                </h2>
                <p className="text-sm text-main">Active Now</p>
              </div>
            </div>
          </div>
          <div className="flex bg-[#F3F3F3] rounded-lg flex-col justify-between gap-2 h-[85%]">
            <MessageBody />
            <div className="w-full py-5 px-5">
              <MessageInput />
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default Support;
const Tab = ({ text = "Ride List", selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-12 py-4 rounded-t-xl ${
        selected ? "bg-main " : ""
      }`}
    >
      <h1
        className={`${
          selected ? "text-white" : ""
        } hover:scale-110 duration-200 text-lg font-semibold `}
      >
        {text}
      </h1>
    </div>
  );
};
