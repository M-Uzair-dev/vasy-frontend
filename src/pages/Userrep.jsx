import React, { useState } from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import CustomInput from '../components/UI/Inputs/CustomInput'
import Button from '../components/button/Button'
import CustomSelect from '../components/UI/Selects/CustomSelect'


function Userrep() {
  const [selected, setselected] = useState("");
  return (
    <DashBoardLayout heading={"User Reports"}>
          <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
        <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Status"}
            placeholder="Select Status"
          />
          <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"File Format"}
            placeholder="File Format"
          />
          
        </div>
        <div className="flex gap-4 w-full h-full items-end justify-end">
          
          <Button title="Download" />
        </div>
      </form>
    </DashBoardLayout>
  )
}

export default Userrep

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];