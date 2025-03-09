import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import MessageRow from "../components/Message/MessageRow";
import MessageSideBar from "../components/Message/MessageSideBar";
import MessageBody from "../components/Message/MessageBody";
import MessageInput from "../components/Message/MessageInput";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { useParams } from "react-router-dom";
import MessageSection from "./messageSection";

function Support() {
  const tabs = ["client", "driver", "Restaurant"];
  const [selectedTab, setselectedTab] = useState("client");
  const { response, loading, apiCall } = useApi("GET", (data) => {
    console.log(data);
  });
  const { id } = useParams();
  const [chatId, setChatId] = useState(id);

  useEffect(() => {
    setChatId(null);
    apiCall(`/chat/conversation/${selectedTab}`);
  }, [selectedTab]);
  useEffect(() => {
    setChatId(id);
  }, [id]);
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout heading={"Support"}>
      <div className="p-4 bg-[#EDF2F7] flex justify-start gap-4 pb-0 rounded-t-xl ">
        {tabs.map((item) => (
          <Tab
            key={item}
            text={`${item}`.charAt(0).toUpperCase() + item.slice(1) + "s"}
            selected={selectedTab === item}
            onClick={() => setselectedTab(item)}
          />
        ))}
      </div>
      <div className="flex h-[60vh]">
        <MessageSideBar data={response?.data} />
        {/* Message Other SIde */}
        <div className="basis-9/12 px-2">
          {chatId ? (
            <>
              <MessageSection id={chatId} />
            </>
          ) : (
            <p>No Chat Selected</p>
          )}
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
