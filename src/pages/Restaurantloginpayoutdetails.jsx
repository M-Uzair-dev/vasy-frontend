import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import Button from "../components/button/Button";

function Restaurantloginpayoutdetails() {
   
    const [selectedImages, setselectedImages] = useState([]);
  const nav = useNavigate();
  return (
    <>
      <DashBoardLayout heading={"Payout details"}>
        <form action="" className="flex flex-col gap-16 h-[60vh]">
          <div className="flex justify-start gap-5">
            <CustomInput label={"Amount"} placeholder="Amount" />
            <CustomInput label={"Request Date"} placeholder="Date" />
            <CustomInput label={"Status"} placeholder="Status" />
           
          </div>
       
          <h1 className="text-secondary text-2xl font-bold">Bank Details</h1>
          <div className="flex justify-start gap-5">
          
            <CustomInput label={"Account no "} placeholder="Account no" />
            <CustomInput label={"Account Holder"} placeholder="Account Holder" />
            <CustomInput label={"Bank name "} placeholder="Bank name" />
          </div>
          <div className="w-96">
            <CustomInput label={"IBAN no  "} placeholder="IBAN no" />

          </div>


        
        </form>
      </DashBoardLayout>
    </>
  );
}

export default Restaurantloginpayoutdetails;

