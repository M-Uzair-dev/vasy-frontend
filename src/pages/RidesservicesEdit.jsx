import React, { useState } from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import CustomInput from '../components/UI/Inputs/CustomInput'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../components/UI/Inputs/ImageInput';
import CustomSelect from '../components/UI/Selects/CustomSelect';
function RidesservicesEdit() {
  const [selectedImages, setselectedImages] = useState([]);
  const [selected, setselected] = useState("");
  const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Add services"}>
      <form action="" className="flex flex-col gap-16 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput label={"Service Title"} placeholder="Enter Name" />
          <CustomInput label={"KM Charge"} placeholder="Charges" />
          <CustomInput label={"Commission  Type"} placeholder="select " />
        </div>
        <div className="flex justify-start gap-5">
          <CustomInput label={"Peak Surcharge"} placeholder="Surcharge" />
          <CustomInput label={"Weight Limit"} placeholder="Weightlimit" />
          <CustomInput label={"Tax"} placeholder="%Tax" />
        </div>
        <div className="flex justify-start gap-5">
          <CustomInput label={"Admin Commission"} placeholder="Admin commision" />
          <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Bidding system"}
            placeholder="Select Country Code"
          />
          <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button title="Save" />
        </div>
      </form>
      <div className='pb-64'></div>
</DashBoardLayout>
  )
}

export default RidesservicesEdit


const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];