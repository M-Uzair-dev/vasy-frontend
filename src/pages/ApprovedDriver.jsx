import React from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import Generaldetails from "../components/Driversdetails/Generaldetails";
import PaginationRow from "../components/UI/Pagination/PaginationRow";

function ApprovedDriver() {
  return (
    <div>
      <DashBoardLayout heading={"Approved Drivers"} showSearch>
        <Generaldetails approved />
        <div className="mb-10"></div>
      </DashBoardLayout>
    </div>
  );
}

export default ApprovedDriver;
