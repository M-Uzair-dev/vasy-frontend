import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";

function Restaurantloginpayoutnewrequest() {
   
   
  const nav = useNavigate();
  return (
    <>
      <DashBoardLayout heading={"Request new "}>

         <div className="flex justify-between bg-[#EDF2F7] px-5 py-5 items-center rounded-md">
            <h1 className="text-[#666666] text-xl font-bold">Available balance : <span className="text-[#1B3B5F] text-2xl"> $450.00</span></h1>
            <div className="flex justify-end items-center">
          <Button
            onclick={() => setopen(true)}
            title="Send request "
            className="px-7"
          />
          </div>
          </div>
    
        <div>
        
        </div>
     
        <form action="" className="flex flex-col gap-16 h-[60vh] pt-4">
        
       
          <h1 className="text-secondary text-2xl font-bold">Bank Details</h1>
          <div className="flex justify-start gap-5">
          
            <CustomInput label={"Account no "} placeholder="Account no" />
            <CustomInput label={"Account Holder"} placeholder="Account Holder" />
            <CustomInput label={"Bank name "} placeholder="Bank name" />
          </div>
          <div className="w-96">
            <CustomInput label={"IBAN no "} placeholder="IBAN no" />

          </div>


         
        </form>
      </DashBoardLayout>
    </>
  );
}

export default Restaurantloginpayoutnewrequest;

