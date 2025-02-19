import React, { useEffect, useState } from "react";
import Formtoggle from "../../assets/Formtoggle.png";
import { Table, Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomSwitch from "../UI/Switchs/CustomSwitch";
import DeleteModal from "../UI/Modals/DeleteModal";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import useApi from "../../api/useApi";
import { api } from "../../api/useAxios";
import { toastMessage } from "../UI/Toast/toastMessage";
function Zonestable() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  const [deleted, setDeleted] = useState([]);
  const [deleting, setDeleting] = useState("");
  const { apiCall, loading, response } = useApi("GET", (data) => {
    console.log(data);
  });
  useEffect(() => {
    apiCall("/zone");
  }, []);

  const deleteZone = async () => {
    try {
      await api.delete(`/zone?id=${deleting}`);
      setDeleted((prev) => [...prev, deleting]);
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    } finally {
      setDeleting("");
      setopen(false);
    }
  };

  const handleChange = async (id, checked) => {
    try {
      await api.put(`/zone?id=${id}`, {
        availability: checked ? "yes" : "no",
      });
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout
      heading={"Zones"}
      showSearch
      button
      onClick={() => nav("/zones/new")}
    >
      <div className="overflow-x-auto min-h-[80vh]">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteZone}
            setDeleteModal={setopen}
            deleteModal={open}
          />
        )}
        <Table>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Availibility</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {response?.data?.map((value) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  style={
                    deleted.includes(value?._id) ? { display: "none" } : {}
                  }
                  key={value?._id}
                >
                  <Table.Cell className="p-4">
                    {" "}
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value?.location}</Table.Cell>
                  <Table.Cell>
                    <CustomSwitch
                      isChecked={value?.availability == "yes"}
                      onChange={(checked) => handleChange(value?._id, checked)}
                    />
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <RiDeleteBin6Line
                        onClick={() => {
                          setDeleting(value?._id);
                          setopen(true);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/zones/edit/${value?._id}`)}
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
    </DashBoardLayout>
  );
}

export default Zonestable;
