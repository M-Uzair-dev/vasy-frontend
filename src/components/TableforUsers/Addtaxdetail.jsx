import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DashBoardLayout from '../../layout/DashBoardLayout';
import CustomInput from '../UI/Inputs/CustomInput';
import Button from '../button/Button';
import CustomSelect from '../UI/Selects/CustomSelect';


function Addtaxdetail() {
  const [selected, setselected] = useState("");
    const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Add New Tax Information"}>
    <form action="" className="flex flex-col gap-7 h-[60vh] ">
       <div className="flex justify-start gap-5">
         <CustomInput label={"Tax"} placeholder="Enter Here" />
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

export default Addtaxdetail
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];