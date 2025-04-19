import React, { useState } from "react";
import { Table, ToggleSwitch } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomSwitch from "../UI/Switchs/CustomSwitch";
import { toastMessage } from "../UI/Toast/toastMessage";
import DeleteModal from "../UI/Modals/DeleteModal";
import { api } from "../../api/useAxios";

function CompleteUsers({ users }) {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);

  const nav = useNavigate();

  const deleteUser = async () => {
    try {
      const response = await api.delete(`/client/${deleting}`);
      if (response.status == 204) {
        toastMessage("User deleted successfully !", "success");
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
      toastMessage(e.data.message || "Something went wrong !", "error");
      setopen(false);
      setDeleting("");
    }
  };

  return (
    <div className="overflow-x-auto">
      {open && (
        <DeleteModal
          setDeleteModal={setopen}
          handleDeleteClick={deleteUser}
          deleteModal={open}
        />
      )}
      <Table>
        <Table.Head
          style={{ backgroundColor: "white" }}
          className="text-lightGray text-xs font-medium"
        >
          <Table.HeadCell>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>

          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>TotalRides</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-dark text-sm font-medium">
          {users?.map((value, index) => {
            return (
              <Table.Row
                key={index}
                style={deleted.includes(value?._id) ? { display: "none" } : {}}
                className="bg-white"
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <img
                    src={value?.image}
                    style={{
                      borderRadius: "5px",
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                      backgroundColor: "rgba(1,1,1,0.05)",
                      border: "none",
                    }}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell>
                  {value?.firstName + " " + value?.lastName}
                </Table.Cell>
                <Table.Cell>{value?.email}</Table.Cell>
                <Table.Cell>{value?.mobileNumber}</Table.Cell>
                <Table.Cell>
                  {new Date(value?.createdAt).toDateString()}
                </Table.Cell>

                <Table.Cell>{value?.rides}</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-start items-center gap-3">
                    <HiOutlineEye
                      color="#000000"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      onClick={() => nav(`/users/view/${value?._id}`)}
                    />
                    <RiDeleteBin6Line
                      onClick={() => {
                        setDeleting(value?._id);
                        setopen(true);
                      }}
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                    />
                    <PiNotePencil
                      onClick={() => nav(`/users/edit/${value?._id}`)}
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
  );
}

export default CompleteUsers;
