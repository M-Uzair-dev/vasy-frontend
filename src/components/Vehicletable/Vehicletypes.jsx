import React, { useEffect, useState } from "react";
import { Checkbox, Table, ToggleSwitch } from "flowbite-react";
import Formtoggle from "../../assets/Formtoggle.png";
import { Users } from "../../data/routes";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomSwitch from "../UI/Switchs/CustomSwitch";
import DeleteModal from "../UI/Modals/DeleteModal";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";
function Vehicletypes() {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const { apiCall, response, loading } = useApi("GET");
  const nav = useNavigate();
  useEffect(() => {
    apiCall("/vehicles");
  }, []);
  const handleChange = async (value, id) => {
    try {
      let status = value ? "active" : "in-active";
      const response = await api.put(`/vehicles/?id=${id}`, {
        status,
      });
      if (response.status == 200) {
        return;
      }
      toastMessage(response.data.message || "Something went wrong !", "error");
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
    }
  };

  const deleteVehicle = async () => {
    try {
      if (deleting == "") {
        toastMessage("Please select a vehicle to delete !", "error");
      }

      let response = await api.delete(`/vehicles?id=${deleting}`);
      if (response.status == 200) {
        toastMessage("Vehicle deleted successfully !", "success");
        setDeleted([...deleted, deleting]);
        setopen(false);
        setDeleting("");
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setopen(false);
        setDeleting("");
      }
    } catch (e) {
      toastMessage("Something went wrong !", "error");
      setopen(false);
      setDeleting("");
    }
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteVehicle}
            setDeleteModal={setopen}
            deleteModal={open}
          />
        )}

        <Table>
          <Table.Head>
            <Table.HeadCell>
              {" "}
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Active</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {response?.data?.map((value, index) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                  style={
                    deleted?.includes(value._id) ? { display: "none" } : {}
                  }
                >
                  <Table.Cell>
                    {" "}
                    <Checkbox />{" "}
                  </Table.Cell>
                  <Table.Cell>{value?.name}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <CustomSwitch
                      isChecked={value?.status === "active"}
                      onChange={handleChange}
                      id={value?._id}
                    />
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      {/* <HiOutlineEye
                      color="#000000"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      onClick={() => nav("/vehicletypes/edit")}
                    /> */}
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value?._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav("/vehicletypes/edit/" + value?._id)}
                        color="#069803"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default Vehicletypes;
