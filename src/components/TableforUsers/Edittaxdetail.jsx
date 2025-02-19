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
  const [selected, setselected] = useState("");
  const nav = useNavigate();
  const [data, setData] = useState({});
  const { apiCall, loading } = useApi("GET", (data2) => {
    if (data2) {
      setData(data2);
    } else {
      nav(-1);
    }
  });
  const [updating, setUpdating] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      apiCall(`/tax?id=${id}`);
    } else {
      nav(-1);
    }
  }, []);

  const update = async () => {
    try {
      if (updating) return;
      setUpdating(true);
      const answer = await api.put(`/tax?id=${id}`, data);
      if (answer.status == 200) {
        toastMessage("Tax updated successfully !", "success");
        nav(-1);
      }
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
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
              update();
            }}
          />
        </div>
      </form>
    </DashBoardLayout>
  );
}

export default Addtaxdetail;
