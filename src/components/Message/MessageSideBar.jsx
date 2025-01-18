import React from "react";
import MessageRow, { messages } from "./MessageRow";

export default function MessageSideBar() {
  return (
    <div id="sidebar-items" className="basis-3/12 overflow-y-auto">
      <div className="text-secondary flex items-center gap-2 p-6 font-bold text-xl">
        Inbox
        <span className="bg-main/25 bg-opacity-10 p-1 rounded-md text-xs">
          4 New
        </span>
      </div>
      <div className="px-6">
        <div className="text-[#92929D] font-normal mt-3">All Messages</div>
        <div className="flex flex-col gap-4 mt-5">
          {messages?.slice(0, 10).map((item, index) => {
            return (
              <MessageRow
                date={item.date}
                image={item.image}
                message={item.message}
                name={item.name}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
