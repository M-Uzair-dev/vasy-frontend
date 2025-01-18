import React from "react";
import SingleMessage from "./SingleMessage";
import MessageInput from "./MessageInput";

export default function MessageBody() {
  return (
    <div
      id="sidebar-items"
      className="bg-[#F3F3F3]  px-5 space-y-5 overflow-y-auto "
    >
      {data?.map((item, index) => {
        return (
          <SingleMessage message={item.text} type={item.sender} key={index} />
        );
      })}
      <div className="mt-28 "></div>
    </div>
  );
}
const data = [
  {
    id: 1,
    text: "Hello! How are you doing today?",
    sender: "user",
    timestamp: "2024-06-01T10:00:00Z",
  },
  {
    id: 2,
    text: "I'm doing great, thanks! How about you?",
    sender: "other",
    timestamp: "2024-06-01T10:01:00Z",
  },
  {
    id: 3,
    text: "I'm good as well. Have you finished the project?",
    sender: "user",
    timestamp: "2024-06-01T10:02:00Z",
  },
  {
    id: 4,
    text: "Yes, I sent the final version yesterday.",
    sender: "other",
    timestamp: "2024-06-01T10:03:00Z",
  },
  {
    id: 5,
    text: "Great! Looking forward to the feedback.",
    sender: "user",
    timestamp: "2024-06-01T10:04:00Z",
  },
  {
    id: 6,
    text: "Same here. Let's hope for the best!",
    sender: "other",
    timestamp: "2024-06-01T10:05:00Z",
  },
  {
    id: 7,
    text: "Did you get a chance to review the document?",
    sender: "user",
    timestamp: "2024-06-01T10:06:00Z",
  },
  {
    id: 8,
    text: "Yes, I did. It looks good overall.",
    sender: "other",
    timestamp: "2024-06-01T10:07:00Z",
  },
  {
    id: 9,
    text: "Any changes needed?",
    sender: "user",
    timestamp: "2024-06-01T10:08:00Z",
  },
  {
    id: 10,
    text: "Just a few minor tweaks. I'll send them to you shortly.",
    sender: "other",
    timestamp: "2024-06-01T10:09:00Z",
  },
  {
    id: 11,
    text: "Alright, I'll wait for your email.",
    sender: "user",
    timestamp: "2024-06-01T10:10:00Z",
  },
  {
    id: 12,
    text: "Have you seen the new updates on the project management tool?",
    sender: "other",
    timestamp: "2024-06-01T10:11:00Z",
  },
  {
    id: 13,
    text: "Not yet. Are there significant changes?",
    sender: "user",
    timestamp: "2024-06-01T10:12:00Z",
  },
  {
    id: 14,
    text: "Yes, they've added some new features that might be useful.",
    sender: "other",
    timestamp: "2024-06-01T10:13:00Z",
  },
  {
    id: 15,
    text: "I'll check it out soon.",
    sender: "user",
    timestamp: "2024-06-01T10:14:00Z",
  },
  {
    id: 16,
    text: "Great! Let me know if you need any help navigating through them.",
    sender: "other",
    timestamp: "2024-06-01T10:15:00Z",
  },
  {
    id: 17,
    text: "Will do. Thanks!",
    sender: "user",
    timestamp: "2024-06-01T10:16:00Z",
  },
  {
    id: 18,
    text: "By the way, are we still on for the meeting tomorrow?",
    sender: "other",
    timestamp: "2024-06-01T10:17:00Z",
  },
  {
    id: 19,
    text: "Yes, same time as always.",
    sender: "user",
    timestamp: "2024-06-01T10:18:00Z",
  },
  {
    id: 20,
    text: "Perfect. See you then!",
    sender: "other",
    timestamp: "2024-06-01T10:19:00Z",
  },
  {
    id: 21,
    text: "Do you have any updates on the client proposal?",
    sender: "user",
    timestamp: "2024-06-01T10:20:00Z",
  },
  {
    id: 22,
    text: "Yes, they approved it. We're good to go.",
    sender: "other",
    timestamp: "2024-06-01T10:21:00Z",
  },
  {
    id: 23,
    text: "That's fantastic news!",
    sender: "user",
    timestamp: "2024-06-01T10:22:00Z",
  },
  {
    id: 24,
    text: "Indeed. Let's move forward with the next steps.",
    sender: "other",
    timestamp: "2024-06-01T10:23:00Z",
  },
  {
    id: 25,
    text: "Do we have a timeline for the next phase?",
    sender: "user",
    timestamp: "2024-06-01T10:24:00Z",
  },
  {
    id: 26,
    text: "We'll need to finalize that in tomorrow's meeting.",
    sender: "other",
    timestamp: "2024-06-01T10:25:00Z",
  },
  {
    id: 27,
    text: "Got it. I'll prepare my notes.",
    sender: "user",
    timestamp: "2024-06-01T10:26:00Z",
  },
  {
    id: 28,
    text: "Thanks. Appreciate it.",
    sender: "other",
    timestamp: "2024-06-01T10:27:00Z",
  },
  {
    id: 29,
    text: "No problem. Have a great day!",
    sender: "user",
    timestamp: "2024-06-01T10:28:00Z",
  },
  {
    id: 30,
    text: "You too!",
    sender: "other",
    timestamp: "2024-06-01T10:29:00Z",
  },
];
