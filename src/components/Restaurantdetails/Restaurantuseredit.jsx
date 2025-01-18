import React from "react";
import CustomInput from "../UI/Inputs/CustomInput";
import Button from "../../components/button/Button";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { useNavigate } from "react-router-dom";

const Restaurantuseredit = () => {
  const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Edit Details"}>
      <form action="" className="flex flex-col  gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput label={"Name"} placeholder="Enter Name" />
          <CustomInput label={"Email"} placeholder="Enter Name" />
          <CustomInput label={"Phone"} placeholder="Enter Name" />
        </div>
        <div className="flex justify-start gap-5 mr-[400px]">
          <CustomInput label={"Restuarant logo"} placeholder="Enter Name" />
          <CustomInput label={"Restaurant Cover Photo"} placeholder="Enter Name" />
        
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button title="Save" />
        </div>
      </form>
    </DashBoardLayout>
  );
};

export default Restaurantuseredit;
