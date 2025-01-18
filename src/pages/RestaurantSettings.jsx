import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import ImageUploader from "../components/UI/Inputs/ImageInput";
import Button from "../components/button/Button";

function RestaurantSettings() {
  const [selectedImages, setselectedImages] = useState([]);
  const nav = useNavigate();
  return (
    <>
      <DashBoardLayout heading={"General Settings"}>
        <form action="" className="flex flex-col gap-16 h-[60vh]">
          <div className="flex justify-start gap-5">
            <CustomInput label={"Name"} placeholder="Enter Name" />
            <CustomInput label={"Email"} placeholder="Enter Email" />
            <CustomInput label={"Phone"} placeholder="Enter Email" />
          </div>
          <div className="flex justify-start gap-5">
            <ImageUploader
              selectedImages={selectedImages}
              setSelectedImages={setselectedImages}
              label={"Restaurant logo"}
            />
            <ImageUploader
              selectedImages={selectedImages}
              setSelectedImages={setselectedImages}
              label={"Restaurant cover photo"}
            />
            <div className="w-full invisible"></div>
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

export default RestaurantSettings;
