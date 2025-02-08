import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import CustomInput from "../components/UI/Inputs/CustomInput";
import Button from "../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import CustomSelect from "../components/UI/Selects/CustomSelect";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";

function EditVehicledetails() {
  const [selected, setselected] = useState("");
  const nav = useNavigate();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState({});
  const { apiCall, loading, response } = useApi("GET", (data2) => {
    setData(data2);
    console.log(data2);
  });

  useEffect(() => {
    if (id) {
      apiCall(`/vehicles/?id=${id}`);
    } else {
      nav(-1);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      if (!id) {
        return;
      }
      setEditing(true);
      const response = await api.put(`/vehicles/?id=${id}`, data);
      if (response.status == 200) {
        toastMessage("Vehicle updated successfully !", "success");
        nav(-1);
      } else {
        toastMessage("Something went wrong !", "success");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
    } finally {
      setEditing(false);
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <div>
      <DashBoardLayout heading={"Edit Vehicle Details"}>
        <form action="" className="flex flex-col gap-7 h-[60vh] ">
          <div className="flex justify-start gap-5">
            <CustomInput
              label={"Vehcile Type"}
              placeholder="types"
              value={data.name}
              onChange={(e) => {
                setData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                });
              }}
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
          </div>

          <div className="flex gap-4 w-full h-full items-end justify-end">
            <Button title="Back" onclick={() => nav(-1)} outline />
            <Button
              title={editing ? "Saving..." : "Save"}
              onclick={() => {
                if (!loading && !editing) {
                  handleSubmit();
                }
              }}
            />
          </div>
        </form>
      </DashBoardLayout>
    </div>
  );
}

export default EditVehicledetails;

const options = [
  { value: "active", label: "Active" },
  { value: "in-active", label: "Inactive" },
  { value: "maintenance", label: "Under Maintainance" },
];
