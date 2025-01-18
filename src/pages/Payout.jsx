import React from "react";
import Payouttable from "../components/Payouttables/Payouttable";
import DashBoardLayout from "../layout/DashBoardLayout";

function Payout() {
  return (
    <DashBoardLayout heading={"Payout Requests"}>
      <Payouttable />
    </DashBoardLayout>
  );
}

export default Payout;
