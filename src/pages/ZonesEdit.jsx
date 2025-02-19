import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";

function ZonesEdit() {
  const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const { apiCall, loading } = useApi("GET", (data2) => {
    setData(data2);
    console.log(data2);
  });
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (!id) nav(-1);
    apiCall(`/zone?id=${id}`);
  }, []);

  const handleSubmit = async () => {
    try {
      if (!id) return;
      if (editing) return;
      setEditing(true);
      await api.put(`/zone?id=${id}`, data);
      toastMessage("Zone updated successfully !", "success");
      nav(-1);
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    } finally {
      setEditing(false);
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <div>
      <DashBoardLayout heading={"Edit zone"}>
        <form action="" className="flex flex-col gap-7 h-[60vh] ">
          <div className="flex justify-start  items-center gap-4">
            <CustomInput
              label={"Location"}
              placeholder="Dish Name"
              value={data?.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />
            <CustomSelect
              selected={data?.availability}
              setselected={(option) => {
                if (!option) {
                  setData({ ...data, availability: "no" });
                } else {
                  setData({ ...data, availability: option });
                }
              }}
              options={options}
              label={"Availability"}
              placeholder="Select Availability"
            />
          </div>

          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={editing ? "Saving..." : "Save"}
              onclick={handleSubmit}
            />
          </div>
        </form>
      </DashBoardLayout>
    </div>
  );
}

export default ZonesEdit;
const options = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];
