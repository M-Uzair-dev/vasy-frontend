import React, { useState } from "react";
import { Table, Checkbox } from "flowbite-react";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import DashBoardLayout from "../layout/DashBoardLayout";
import { HiOutlineEye } from "react-icons/hi";
import DeleteModal from "../components/UI/Modals/DeleteModal";
function RestaurantCategory() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  return (
    <DashBoardLayout
      heading={"Categories"}
      button
      showSearch
      onClick={() => nav("/categories/edit")}
    >
      <div className="overflow-x-auto">
        {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
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
            {[1, 2, 3, 4, 5, 6, 3, 4, 5, 6].map((value) => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    {" "}
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>category 1</Table.Cell>
                  <Table.Cell>Dish1,Dish2,Dish3</Table.Cell>
                  <Table.Cell>33</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        //   onClick={() => nav("/drivers/view")}
                      />
                      <RiDeleteBin6Line
                        onClick={() => setopen(true)}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav("/categories/edit")}
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
