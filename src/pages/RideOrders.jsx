import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import { Badge, Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import Formimg from "../assets/Formimg.png";
import Formtoggle from "../assets/Formtoggle.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomBadge from "../components/UI/Badges/CustomBadge";
import DeleteModal from "../components/UI/Modals/DeleteModal";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
function RideOrders() {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const { apiCall, response, loading } = useApi("GET");
  const nav = useNavigate();

  useEffect(() => {
    apiCall("/ride");
  }, []);
  function formatDate(isoString) {
    const date = new Date(isoString);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getUTCMonth()]
    },${date.getUTCDate()},${date.getUTCFullYear()}`;
  }

  const deleteOrder = async () => {
    try {
      if (deleting == "") {
        toastMessage("Please select an order to delete !", "error");
      }

      let response = await api.delete(`/ride?id=${deleting}`);
      if (response.status == 200) {
        toastMessage("Ride deleted successfully !", "success");
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
    <DashBoardLayout heading={"Ride Orders"} showSearch>
      <div className="overflow-x-auto min-h-[80vh]">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteOrder}
            setDeleteModal={setopen}
            deleteModal={open}
          />
        )}
        <Table>
          <Table.Head
            style={{ backgroundColor: "white" }}
            className="text-lightGray"
          >
            <Table.HeadCell>
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>RIDE ID </Table.HeadCell>
            <Table.HeadCell>CUSTOMER</Table.HeadCell>
            <Table.HeadCell>DRIVER</Table.HeadCell>
            <Table.HeadCell>DATE</Table.HeadCell>

            <Table.HeadCell>SERVICES</Table.HeadCell>
            <Table.HeadCell>AMOUNT</Table.HeadCell>
            <Table.HeadCell>STATUS</Table.HeadCell>
            <Table.HeadCell>ACTIONS</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-dark text-sm font-medium">
            {response?.data?.rides?.map((value, index) => {
              return (
                <Table.Row
                  style={deleted.includes(value._id) ? { display: "none" } : {}}
                  key={index}
                  className="bg-white"
                >
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    {value?._id.slice(value._id.length - 9)}
                  </Table.Cell>
                  <Table.Cell>
                    {value.client.firstName + " " + value.client.lastName}
                  </Table.Cell>
                  <Table.Cell>
                    {value.driver.firstName + " " + value.driver.lastName}
                  </Table.Cell>
                  <Table.Cell>{formatDate(value.createdAt)}</Table.Cell>
                  <Table.Cell>{value.service.title}</Table.Cell>
                  <Table.Cell>${value.amount}</Table.Cell>
                  <Table.Cell>
                    <CustomBadge
                      text={value.status}
                      type={
                        value.status == "started" ||
                        value.status == "placed" ||
                        value.status == "accepted"
                          ? "info"
                          : value.status == "rejected"
                          ? "error"
                          : value.status == "completed"
                          ? "success"
                          : "warning"
                      }
                    />
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        onClick={() => nav(`/rides/Rideview/${value._id}`)}
                      />
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value._id);
                        }}
                        color="#FF3636"
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

export default RideOrders;
