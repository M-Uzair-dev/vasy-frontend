import React from "react";
import IconSearch from "../assets/IconSearch.png";
import CompleteUsers from "../components/TableforUsers/CompleteUsers";
import { FloatingLabel } from "flowbite-react";

function ViewUser() {
  return (
    <div>
      <div className="flex px-8 py-3 justify-between">
        <h1 className="text-2xl font-bold text-[#1B3B5F]">Users </h1>
        <input type="text" placeholder="Search..." />
      </div>
      <CompleteUsers />
    </div>
  );
}

export default ViewUser;
