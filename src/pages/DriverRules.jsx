import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import { HiOutlineEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Checkbox, Table, ToggleSwitch } from "flowbite-react";
import Formimg from "../assets/Formimg.png";
import Formtoggle from "../assets/Formtoggle.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiNotePencil } from "react-icons/pi";
import CustomSwitch from "../components/UI/Switchs/CustomSwitch";
import DeleteModal from "../components/UI/Modals/DeleteModal";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
function DriverRules() {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const nav = useNavigate();

  const { apiCall, loading, response } = useApi("GET");
  useEffect(() => {
    apiCall("/rules");
  }, []);

  const handleToggle = async (checked, id) => {
    try {
      const answer = await api.put(`/rules?id=${id}`, {
        status: checked ? "active" : "inactive",
      });
      if (answer.status !== 200) {
        toastMessage("Something went erong !", "error");
        window.location.reload();
      }
    } catch (e) {
      toastMessage("Something went erong !", "error");
      window.location.reload();
    }
  };

  const deleteRule = async () => {
    try {
      if (deleting === "") {
        toastMessage("Please select a rule to delete !", "error");
      }

      await api.delete(`/rules?id=${deleting}`);

      toastMessage("Rule deleted successfully !", "success");
      setDeleted([...deleted, deleting]);
      setopen(false);
      setDeleting("");
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
    <DashBoardLayout
      heading={"DriverRules"}
      showSearch
      button
      onClick={() => nav("/rules/new")}
    >
      <div className="overflow-x-auto min-h-[80vh]">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteRule}
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
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Active</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {response?.data?.rules?.map((value, index) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                  style={deleted.includes(value._id) ? { display: "none" } : {}}
                >
                  <Table.Cell>
                    {" "}
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value?.name || "Error"}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <img
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "10px",
                      }}
                      src={value?.image || Formimg}
                      alt=""
                    />{" "}
                  </Table.Cell>
                  <Table.Cell>
                    {" "}
                    <CustomSwitch
                      id={value?._id}
                      isChecked={value?.status == "active"}
                      onChange={handleToggle}
                    />
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value?._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        color="#069803"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        onClick={() => nav(`/rules/edit/${value?._id}`)}
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

export default DriverRules;
