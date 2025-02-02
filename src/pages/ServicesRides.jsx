import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import { Checkbox, ToggleSwitch } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import Formimg from "../assets/Formimg.png";
import Formtoggle from "../assets/Formtoggle.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import CustomSwitch from "../components/UI/Switchs/CustomSwitch";
import DeleteModal from "../components/UI/Modals/DeleteModal";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import toast from "react-hot-toast";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
function ServicesRides() {
  const [open, setopen] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const { apiCall, response, loading, error } = useApi("GET");
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    apiCall("/services");
  }, []);

  const deleteService = async () => {
    try {
      if (deleting == "") {
        toastMessage("Please select a service to delete !", "error");
      }

      let response = await api.delete(`/services?id=${deleting}`);
      if (response.status == 200) {
        toastMessage("Service deleted successfully !", "success");
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
  if (error) return <p>Something Went Wrong !</p>;
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout
      heading={"Services"}
      button
      showSearch
      onClick={() => {
        nav("/rides/servicenew");
      }}
    >
      <div className="overflow-x-auto">
        {open && (
          <DeleteModal
            setDeleteModal={setopen}
            handleDeleteClick={deleteService}
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
            <Table.HeadCell>TITLE</Table.HeadCell>
            <Table.HeadCell>IMAGE</Table.HeadCell>
            <Table.HeadCell>PEAK SURCHARGE</Table.HeadCell>
            <Table.HeadCell>km CHARGE</Table.HeadCell>
            <Table.HeadCell>WEIGHT LIMIT</Table.HeadCell>

            <Table.HeadCell>TAX</Table.HeadCell>
            <Table.HeadCell>BIDDING SYSTEM</Table.HeadCell>
            <Table.HeadCell>STATUS</Table.HeadCell>
            <Table.HeadCell>ACTIONS</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-dark text-sm font-medium">
            {response?.data?.services?.map((value, index) => {
              return (
                <Table.Row
                  key={index}
                  className="bg-white"
                  style={deleted.includes(value._id) ? { display: "none" } : {}}
                >
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value?.title}</Table.Cell>
                  <Table.Cell>
                    <img
                      src={value?.image}
                      style={{ width: "60px", height: "60px" }}
                      alt=""
                    />
                  </Table.Cell>
                  <Table.Cell>${value?.peakSurcharge}</Table.Cell>
                  <Table.Cell>${value.kmChange}</Table.Cell>
                  <Table.Cell>{value.weightLimit}kg</Table.Cell>
                  <Table.Cell>{value.tax}%</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <CustomSwitch />
                  </Table.Cell>
                  <Table.Cell>
                    <CustomSwitch />
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/rides/serviceedit/${value._id}`)}
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
      <div className="mb-16"></div>
    </DashBoardLayout>
  );
}

export default ServicesRides;
