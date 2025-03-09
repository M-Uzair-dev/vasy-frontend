import React from "react";
import MessageRow, { messages } from "./MessageRow";
import { useNavigate } from "react-router-dom";

export default function MessageSideBar({ data }) {
  const nav = useNavigate();
  return (
    <div id="sidebar-items" className="basis-3/12 overflow-y-auto">
      <div className="text-secondary flex items-center gap-2 p-6 font-bold text-xl">
        Inbox
      </div>
      <div className="px-6">
        <div className="text-[#92929D] font-normal mt-3">All Messages</div>
        <div className="flex flex-col gap-4 mt-5">
          {data?.map((chat) => {
            return (
              <MessageRow
                onClick={() => {
                  nav(`/support/${chat._id}`);
                }}
                date={chat?.lastMessage?.createdAt || chat?.createdAt}
                image={chat?.participant?.image}
                message={chat?.lastMessage?.content}
                name={
                  chat?.participant?.firstName + chat?.participant?.lastName
                }
                key={chat?._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
