import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import Formimg from "../../assets/Formimg.png";
// import Formtoggle from "../../assets/Formtoggle.png";
import { Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../UI/Modals/DeleteModal";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import { api } from "../../api/useAxios";
import { toastMessage } from "../UI/Toast/toastMessage";
function NotificationTable() {
  const [open, setopen] = useState(false);
  const [deleting, setDeleting] = useState("");
  const [deleted, setDeleted] = useState([]);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const { apiCall, loading, response } = useApi("GET", (data2) => {
    if (data2.data) {
      setData(data2.data);
    }
  });

  useEffect(() => {
    apiCall("/notification/all");
  }, []);

  const deleteNotification = async () => {
    try {
      if (!deleting) return;
      toastMessage("deleting...", "success");
      setopen(false);
      await api.delete("/notification/" + deleting);
      setDeleted((prev) => [...prev, deleting]);
    } catch (e) {
      toastMessage("Something went wrong while deleting this notification");
    } finally {
      setDeleting("");
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout
      heading={"Notification"}
      showSearch
      button
      onClick={() => nav("/notification/add")}
    >
      <div className="overflow-x-auto ">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteNotification}
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
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Subtitle</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Audience</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-dark text-sm font-medium">
            {data?.map((value, index) => {
              return (
                <Table.Row
                  key={index}
                  className="bg-white"
                  style={
                    deleted.includes(value?._id) ? { display: "none" } : {}
                  }
                >
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value?.title}</Table.Cell>
                  <Table.Cell>{value?.subtitle || "--"}</Table.Cell>
                  <Table.Cell>
                    <img
                      src={value?.image}
                      alt=""
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "10px",
                        border: "none",
                        outline: " none",
                      }}
                    />
                  </Table.Cell>
                  <Table.Cell>{value?.audience || "All"}</Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value?._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/notification/edit/${value?._id}`)}
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

export default NotificationTable;
