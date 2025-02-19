import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";

function ZonesNew() {
  const [selected, setselected] = useState("");
  const nav = useNavigate();
  return (
    <div>
      <DashBoardLayout heading={"New Zones"}>
        <form action="" className="flex flex-col gap-7 h-[60vh] ">
          <div className="flex justify-start  items-center gap-4">
            <CustomInput label={"Location"} placeholder="Dish Name" />
            <CustomInput label={"Location"} placeholder="Dish Name" />

            <Button
              title="Addmore"
              outline
              className=" h-10 text-sm  text-center mt-5"
            />
          </div>

          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button title="Save" />
          </div>
        </form>
      </DashBoardLayout>
    </div>
  );
}

export default ZonesNew;
