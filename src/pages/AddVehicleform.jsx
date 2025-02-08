import React, { useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import { api } from "../api/useAxios";
import { toastMessage } from "../components/UI/Toast/toastMessage";

function AddVehicleform() {
  const [selected, setselected] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    status: "",
    driver: "",
  });
  const nav = useNavigate();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await api.post(`/vehicles`, data);
      if (response.status == 201) {
        toastMessage("Vehicle added successfully !", "success");
        nav(-1);
      } else {
        toastMessage("Something went wrong !", "success");
      }
    } catch (e) {
      console.log(e);
      toastMessage(e.data.message || "Something went wrong !", "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <DashBoardLayout heading={"Add Vehicle "}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Vehcile Type"}
            value={data.name}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              });
            }}
            placeholder="Vehicle name"
          />
          <CustomSelect
            selected={data.status}
            setselected={(value) => {
              if (value === "") {
                setData((prev) => {
                  return {
                    ...prev,
                    status: "in-active",
                  };
                });
              } else {
                setData((prev) => {
                  return {
                    ...prev,
                    status: value,
                  };
                });
              }
            }}
            options={options}
            label={"Status"}
            placeholder="Select Status"
          />
          <CustomInput
            label={"Driver Id"}
            value={data.driver}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  driver: e.target.value,
                };
              });
            }}
            placeholder="id"
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={loading ? "loading..." : "Add"}
            onclick={() => {
              if (!loading) {
                handleSubmit();
              }
            }}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default AddVehicleform;
const options = [
  { value: "active", label: "Active" },
  { value: "in-active", label: "Inactive" },
  { value: "maintenance", label: "Under Maintainance" },
];
