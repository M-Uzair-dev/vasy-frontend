import React from "react";
import Generaldetails from "../components/Driversdetails/Generaldetails";
import DashBoardLayout from "../layout/DashBoardLayout";
function Drivers() {
  return (
    <DashBoardLayout heading={"All Drivers"} showSearch>
      <Generaldetails />
    </DashBoardLayout>
  );
}

export default Drivers;
