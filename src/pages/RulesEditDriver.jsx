import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DashBoardLayout from '../layout/DashBoardLayout';
import CustomInput from '../components/UI/Inputs/CustomInput';
import Button from '../components/button/Button';
import ImageUploader from '../components/UI/Inputs/ImageInput';
import CustomSelect from '../components/UI/Selects/CustomSelect';

function RulesEditDriver() {
  const [selected, setselected] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
    const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Add new Rules"}>
    <form action="" className="flex flex-col gap-7 h-[60vh] ">
      <div className="flex justify-start gap-5">
        <CustomInput label={"Name"} placeholder=" Name" />
        <ImageUploader
            selectedImages={selectedImages}
            setSelectedImages={setselectedImages}
            label={"Image"}
          />
      </div>
      <div className='w-[580px]'>

      <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Country Code"}
            placeholder="Select Country Code"
          />
      </div>
     

      <div className="flex gap-4 w-full h-full items-end justify-end">
        <Button title="Back" onclick={() => nav(-1)} outline />
        <Button title="Save" />
      </div>
    </form>
</DashBoardLayout>
  )
}

export default RulesEditDriver;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];