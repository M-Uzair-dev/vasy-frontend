import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import Formimg from "../../assets/Formimg.png";
import Formtoggle from "../../assets/Formtoggle.png";
import Documenticon from "../../assets/Documenticon.png";
import { Users } from "../../data/routes";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "flowbite-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../UI/Modals/DeleteModal";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import PaginationRow from "../UI/Pagination/PaginationRow";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";
import DocumentsModal from "../UI/DocumentsModal";

function Generaldetails({ approved, pending }) {
  const [open, setopen] = useState(false);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const { apiCall, response, loading } = useApi("GET", (data) => {
    console.log("DATA IS :", data);
  });
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const nav = useNavigate();
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [selectedDriverDocuments, setSelectedDriverDocuments] = useState(null);

  useEffect(() => {
    if (approved) {
      apiCall(`/driver?approved=true&page=${page}&data=${dataPerPage}`);
    } else if (pending) {
      apiCall(`/driver?pending=true&page=${page}&data=${dataPerPage}`);
    } else {
      apiCall(`/driver?page=${page}&data=${dataPerPage}`);
    }
  }, [dataPerPage, page]);

  const handleDelete = async () => {
    try {
      const res = await api.delete(`/driver?id=${deleting}`);
      if (res.status == 200) {
        toastMessage("Driver deleted successfully !", "success");
        setDeleted([...deleted, deleting]);
      } else {
        toastMessage(res.data.message || "Something went wrong !", "error");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong !", "error");
    } finally {
      setopen(false);
      setDeleting("");
    }
  };

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

  const handleDocumentClick = (driver) => {
    // The documents are nested inside driver.documents
    const documentsData = driver.documents || {};

    const driverDocuments = {
      idCardFront: documentsData.idCardFront || null,
      idCardBack: documentsData.idCardBack || null,
      drivingLicense: documentsData.drivingLicense || null,
      vehicleInsurance: documentsData.vehicleInsurance || null,
      vehiclePhotos: documentsData.vehiclePhotos || [],
    };

    setSelectedDriverDocuments(driverDocuments);
    setIsDocumentModalOpen(true);
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <div className="overflow-x-auto min-h-[80vh]">
        {open && (
          <DeleteModal
            handleDeleteClick={handleDelete}
            setDeleteModal={setopen}
            deleteModal={open}
          />
        )}

        <Table>
          <Table.Head className="text-xs text-[#84919A]">
            <Table.HeadCell>
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone</Table.HeadCell>
            <Table.HeadCell>Documents</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>service</Table.HeadCell>
            <Table.HeadCell>Vehicle types</Table.HeadCell>
            <Table.HeadCell>Total rides</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y border-[#F9FAFB] ">
            {response?.data?.drivers?.map((value, index) => {
              return (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  style={deleted.includes(value._id) ? { display: "none" } : {}}
                >
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <img src={value?.image} alt="" />
                  </Table.Cell>
                  <Table.Cell>
                    {value?.firstName + " " + value?.lastName}
                  </Table.Cell>
                  <Table.Cell>{value?.email}</Table.Cell>
                  <Table.Cell>{value?.mobileNumber}</Table.Cell>
                  <Table.Cell>
                    <img
                      src={Documenticon}
                      alt="Documents"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleDocumentClick(value)}
                    />
                  </Table.Cell>
                  <Table.Cell>{formatDate(value?.createdAt)}</Table.Cell>
                  <Table.Cell>{value?.role}</Table.Cell>
                  <Table.Cell>{value?.vehicle?.name}</Table.Cell>
                  <Table.Cell>{value?.rides}</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-7 cursor-pointer hover:scale-105 duration-200"
                        onClick={() => nav(`/drivers/view/${value._id}`)}
                      />
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-7 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/drivers/edit/${value._id}`)}
                        color="#069803"
                        className="w-5 h-7 cursor-pointer hover:scale-105 duration-200"
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>

      <PaginationRow
        dataPerPage={dataPerPage}
        page={page}
        setPage={setPage}
        setDataPerPage={setDataPerPage}
        total={response?.data?.total}
        endMessage={"No More Drivers !"}
      />

      <DocumentsModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
        documents={selectedDriverDocuments || {}}
      />
    </>
  );
}

export default Generaldetails;
