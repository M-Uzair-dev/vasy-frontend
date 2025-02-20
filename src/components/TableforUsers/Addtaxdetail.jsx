import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import CustomInput from "../UI/Inputs/CustomInput";
import Button from "../button/Button";
import CustomSelect from "../UI/Selects/CustomSelect";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";

function Addtaxdetail() {
  const nav = useNavigate();
  const adminID = localStorage.getItem("userId");
  const [data, setData] = useState({
    amount: 0,
    location: "",
  });
  const [updating, setUpdating] = useState(false);

  const Add = async () => {
    try {
      if (updating) return;
      if (!adminID) return;
      setUpdating(true);
      const answer = await api.post(`/tax`, { ...data, admin: adminID });
      if (answer.status == 201) {
        toastMessage("Tax Created successfully !", "success");
        nav(-1);
      }
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <DashBoardLayout heading={"Edit tax details"}>
      <form action="" className="flex flex-col gap-7 h-[60vh] ">
        <div className="flex justify-start gap-5">
          <CustomInput
            label={"Tax %"}
            placeholder="Enter Tax rate here"
            value={data.amount}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,

                  amount: e.target.value,
                };
              });
            }}
          />
          <CustomInput
            label={"Location"}
            placeholder="Enter Location here"
            value={data.location}
            onChange={(e) => {
              setData((prev) => {
                return {
                  ...prev,
                  location: e.target.value,
                };
              });
            }}
          />
        </div>

        <div className="flex gap-4 w-full h-full items-end justify-end">
          <Button title="Back" onclick={() => nav(-1)} outline />
          <Button
            title={updating ? "saving..." : "Save"}
            onclick={() => {
              Add();
            }}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default Addtaxdetail;
