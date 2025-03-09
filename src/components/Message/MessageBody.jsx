import React, { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";

export default function MessageBody({ messages }) {
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      id="sidebar-items"
      ref={containerRef}
      className="bg-[#F3F3F3] px-5 space-y-5 overflow-y-auto h-full"
    >
      {messages && messages.length > 0 ? (
        messages.map((item, index) => (
          <SingleMessage
            key={index}
            message={item.content}
            type={
              item.artificial
                ? "user"
                : item.sender._id === item.conversation.participant
                ? null
                : "user"
            }
          />
        ))
      ) : (
        <p>No messages yet.</p>
      )}
      {/* Invisible div to help scroll to bottom */}
      <div ref={messagesEndRef} />
    </div>
  );
}
