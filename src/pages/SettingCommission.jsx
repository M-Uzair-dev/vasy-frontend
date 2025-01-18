import React, { useState } from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import CustomInput from '../components/UI/Inputs/CustomInput'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../components/UI/Selects/CustomSelect';

function SettingCommission() {
  const [selected, setselected] = useState("");
    const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Admin commission"}>
    <form action="" className="flex flex-col gap-7 h-[60vh] ">
       <div className="flex justify-center gap-5  ">
           <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Commission Type"}
            placeholder="Select Here"
          />
         <CustomInput label={"Admin commission"} placeholder="Enter Here" />
       </div>
       <div className='w-[580px]'>
       <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Taxes "}
            placeholder="Select Here"
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

export default SettingCommission
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];