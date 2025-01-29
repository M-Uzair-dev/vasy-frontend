import React from "react";
import { Table } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Checkbox } from "flowbite-react";
import { useState } from "react";
import CustomSwitch from "../UI/Switchs/CustomSwitch";
import DeleteModal from "../UI/Modals/DeleteModal";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";

function Generaldetails({ restaurants }) {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const nav = useNavigate();

  const deleteRestaurant = async () => {
    try {
      const response = await api.delete(`/restaurant?id=${deleting}`);
      console.log(response);
      if (response.status == 200) {
        toastMessage("Restaurant deleted successfully !", "success");
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
          handleDeleteClick={deleteRestaurant}
          deleteModal={open}
        />
      )}
      <Table>
        <Table.Head className="text-xs font-medium">
          <Table.HeadCell>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>IMAGE</Table.HeadCell>
          <Table.HeadCell>RESTAURANT NAME</Table.HeadCell>
          <Table.HeadCell>EMAIL ADDRESS</Table.HeadCell>
          <Table.HeadCell>PHONE NUMBER</Table.HeadCell>
          <Table.HeadCell>ADDRESS</Table.HeadCell>
          <Table.HeadCell>AVAILABILITY</Table.HeadCell>
          <Table.HeadCell>ACTIONS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-dark text-sm font-medium">
          {restaurants?.map((value, index) => {
            return (
              <>
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                  style={
                    deleted.includes(value?._id) ? { display: "none" } : {}
                  }
                >
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      className="h-14 w-20 rounded-2xl"
                      src={value.image}
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>{value.fullName}</Table.Cell>
                  <Table.Cell>{value.email}</Table.Cell>
                  <Table.Cell>{value.phoneNumber}</Table.Cell>
                  <Table.Cell>{value.address}</Table.Cell>
                  <Table.Cell>
                    <CustomSwitch />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        onClick={() =>
                          nav(`/resturants/ViewDetails/${value?._id}`)
                        }
                      />
                      <RiDeleteBin6Line
                        onClick={() => {
                          setDeleting(value._id);
                          setopen(true);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/resturants/Edit/${value?._id}`)}
                        color="#069803"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Generaldetails;
