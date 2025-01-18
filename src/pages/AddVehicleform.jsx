import React, { useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/UI/Selects/CustomSelect";

function AddVehicleform() {
  const [selected, setselected] = useState("");
  const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Add Vehicle "}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
      <div className="flex justify-start gap-5">
          <CustomInput label={"Vehcile Type"} placeholder="types" />
          <CustomSelect
            selected={selected}
            setselected={setselected}
            options={options}
            label={"Status"}
            placeholder="Select Status"
          />
         
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button title="Save" />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default AddVehicleform;
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];