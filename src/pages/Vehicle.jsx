import React from "react";
import Vehicletypes from "../components/Vehicletable/Vehicletypes";
import { Dropdown } from "flowbite-react";
import DashBoardLayout from "../layout/DashBoardLayout";
import { useNavigate } from "react-router-dom";
function Vehicle() {
  const nav = useNavigate();

  return (
    <div>
      <DashBoardLayout
        heading={"Vehicle Types"}
        showSearch
        button
        onClick={() => nav("/vehicletypes/add")}
      >
        <Vehicletypes />
        <div className="mb-44"></div>
      </DashBoardLayout>
    </div>
  );
}

export default Vehicle;
