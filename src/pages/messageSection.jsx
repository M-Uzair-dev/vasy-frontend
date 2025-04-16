import React, { useEffect, useState } from "react";
import MessageBody from "../components/Message/MessageBody";
import MessageInput from "../components/Message/MessageInput";
import useApi from "../api/useApi";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
const image =
  "https://cdn4.iconfinder.com/data/icons/characters-5/512/1-08-512.png";
const messageSection = ({ id }) => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [convo, setConvo] = useState({});
  const userID = localStorage.getItem("userId");
  const { apiCall, loading } = useApi("GET", (data2) => {
    setData(data2.messages);
    setConvo(data2.conversation);
    console.log(data2.conversation);
  });
  useEffect(() => {
    if (id) {
      apiCall("/chat/message/" + id);
    }
  }, [id]);

  const submit = async () => {
    try {
      if (message) {
        if (userID) {
          setData((prev) => [
            ...prev,
            {
              content: message,
              sender: { _id: userID },
              _id: Math.floor(Math.random() * 100),
              artificial: true,
            },
          ]);
          setMessage("");
          await api.post("/chat/message", {
            content: message,
            sender: userID,
            conversationId: id,
          });
        } else {
          toastMessage("Please login to send message", "error");
        }
      } else {
        toastMessage("Nothing to send.", "error");
      }
    } catch (e) {
      toastMessage(
        e.response.data.message || "Something went wrong !",
        "error"
      );
      console.log(e);
      window.location.reload();
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!id) {
    <p>No Chat Selected</p>;
  }
  return (
    <>
      <div className="flex items-center gap-2 py-6 font-bold text-xl">
        <div className="flex gap-x-2">
          <img
            width={45}
            height={45}
            alt=""
            src={convo?.participant?.image}
            style={{
              height: "70px",
              width: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <h2 className="font-semibold text-secondary text-base">
              {convo?.participant?.firstName +
                " " +
                convo?.participant?.lastName}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex bg-[#F3F3F3] rounded-lg flex-col justify-between gap-2 h-[85%]">
        <MessageBody messages={data} />
        <div className="w-full py-5 px-5">
          <MessageInput
            state={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            submit={submit}
          />
        </div>
      </div>
    </>
  );
};

export default messageSection;
