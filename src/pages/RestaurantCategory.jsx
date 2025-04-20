import React, { useEffect, useState } from "react";
import { Table, Checkbox } from "flowbite-react";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import DashBoardLayout from "../layout/DashBoardLayout";
import { HiOutlineEye } from "react-icons/hi";
import DeleteModal from "../components/UI/Modals/DeleteModal";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
function RestaurantCategory() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  const [deleting, setDeleting] = useState(null);
  const {
    apiCall: getCategories,
    loading,
    response,
  } = useApi("GET", (data) => {
    console.log(data);
  });
  const [deleted, setDeleted] = useState([]);
  const userId = localStorage.getItem("userId");
  const { apiCall: deleteCategory } = useApi("DELETE");
  useEffect(() => {
    if (userId) {
      getCategories(`/category?restaurantId=${userId}`);
    } else {
      toastMessage("User not found", "error");
      navigate("/");
    }
  }, []);
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <DashBoardLayout
      heading={"Categories"}
      button
      showSearch
      onClick={() => nav("/categories/new")}
    >
      <div className="overflow-x-auto">
        {open && (
          <DeleteModal
            handleDeleteClick={() => {
              if (deleting) {
                deleteCategory(`/category?id=${deleting}`);
              }
              setDeleted((prev) => [...prev, deleting]);
              setopen(false);
              setDeleting(null);
            }}
            setDeleteModal={setopen}
            deleteModal={open}
          />
        )}
        <Table>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>CATEGORY NAME</Table.HeadCell>
            <Table.HeadCell>DISHES</Table.HeadCell>
            <Table.HeadCell>TOTAL DISHES</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {response?.data?.categories?.map((value) => {
              return (
                <Table.Row
                  key={value._id}
                  style={
                    deleted?.includes(value._id)
                      ? { display: "none" }
                      : { display: "table-row" }
                  }
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="p-4">
                    {" "}
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>{value.name}</Table.Cell>
                  <Table.Cell>
                    {!value?.dishes || value?.dishes?.length == 0
                      ? "No Dishes"
                      : value.dishes.length > 3
                      ? value.dishes
                          .map((dish) => dish.name)
                          .slice(0, 3)
                          .join(",") + "..."
                      : value.dishes.map((dish) => dish.name).join(",")}
                  </Table.Cell>
                  <Table.Cell>{value.dishes.length}</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        onClick={() => nav(`/categories/view/${value._id}`)}
                      />
                      <RiDeleteBin6Line
                        onClick={() => {
                          setopen(true);
                          setDeleting(value._id);
                        }}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav(`/categories/edit/${value._id}`)}
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
      <div className="mb-44"></div>
    </DashBoardLayout>
  );
}

export default RestaurantCategory;
