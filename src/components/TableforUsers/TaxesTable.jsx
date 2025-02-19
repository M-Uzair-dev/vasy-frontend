import React, { useEffect, useState } from "react";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { Table, Checkbox } from "flowbite-react";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../UI/Modals/DeleteModal";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
import { toastMessage } from "../UI/Toast/toastMessage";
import { api } from "../../api/useAxios";

function TaxesTable() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  const { apiCall, response, loading } = useApi("GET");
  const [deleted, setDeleted] = useState([]);
  const [deleting, setDeleting] = useState("");

  useEffect(() => {
    apiCall("/tax");
  }, []);

  const deleteTax = async () => {
    try {
      await api.delete(`/tax/${deleting}`);
      setDeleted((prev) => [...prev, deleting]);
    } catch (e) {
      toastMessage("Something went wrong !", "error");
    } finally {
      setDeleting("");
      setopen(false);
    }
  };

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <DashBoardLayout
      heading={"Taxes"}
      button
      onClick={() => nav("/taxes/new")}
      showSearch
    >
      <div className="overflow-x-auto min-h-[80vh]">
        {open && (
          <DeleteModal
            handleDeleteClick={deleteTax}
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
            <Table.HeadCell>Tax</Table.HeadCell>
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
                  style={deleted.includes(value._id) ? { display: "none" } : {}}
                >
                  <Table.Cell className="p-4">
                    {" "}
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value?.location}</Table.Cell>
                  <Table.Cell>{value?.amount}%</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <RiDeleteBin6Line
                        onClick={() => {
                          setDeleting(value._id);
                          setopen(true);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/taxes/edit/${value._id}`)}
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

export default TaxesTable;
