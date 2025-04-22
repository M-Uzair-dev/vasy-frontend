import React from "react";

export default function MessageRow({ name, message, image, date, onClick }) {
  function formatDate(isoString) {
    const date = new Date(isoString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getUTCMonth()]
    },${date.getUTCDate()},${date.getUTCFullYear()}`;
  }

  return (
    <div
      className="flex cursor-pointer hover:bg-main/20 px-4 py-2 rounded-xl justify-between hover:scale-105 duration-200"
      onClick={onClick}
      style={{
        minWidth: "270px",
      }}
    >
      <div className="flex gap-x-2">
        <img
          width={45}
          height={45}
          alt=""
          src={image}
          style={{ height: "50px", minWidth: "50px", borderRadius: "50%" }}
        />
        <div>
          <h2 className="font-semibold text-base">{name}</h2>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <div className="text-[#92929D] font-thin text-xs">{formatDate(date)}</div>
    </div>
  );
}
export const messages = Array.from(Array(20).keys()).map((i) => ({
  name: "UserName",
  message: "Ok I got you",
  image: "https://cdn4.iconfinder.com/data/icons/characters-5/512/1-08-512.png",
  date: "11:03 AM",
}));
