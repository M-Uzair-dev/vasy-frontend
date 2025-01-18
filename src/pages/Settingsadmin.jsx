import React from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

function Settingsadmin() {
  const nav = useNavigate();
  return (
    <>
      <DashBoardLayout heading={"Admin Settings"}>
        <form action="" className="flex flex-col gap-16 h-[60vh]">
          <div className="flex justify-start gap-5">
            <CustomInput label={"Name"} placeholder="Enter Name" />
            <CustomInput label={"Email"} placeholder="Enter Email" />
           
          </div>
          <h1 className="text-secondary text-2xl font-bold">Change Password</h1>
          <div className="flex justify-start gap-5">
          
            <CustomInput label={"Current Password"} placeholder="Password" />
            <CustomInput label={"New Password"} placeholder="Password" />
            <CustomInput label={"Confirm Password"} placeholder="Password" />
          </div>
          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button title="Save" />
          </div>
        </form>
      </DashBoardLayout>
    </>
  );
}

export default Settingsadmin;
