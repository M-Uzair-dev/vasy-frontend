import React, { useState } from "react";
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
function RideOrders() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Ride Orders"} showSearch>
      <div className="overflow-x-auto">
      {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 12, 32].map((value, index) => {
              return (
                <Table.Row key={index} className="bg-white">
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>45425</Table.Cell>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Driver name</Table.Cell>
                  <Table.Cell>Dec,30,2024</Table.Cell>
                  <Table.Cell>Car</Table.Cell>
                  <Table.Cell>$24.00</Table.Cell>
                  <Table.Cell>
                    <CustomBadge text="Rejected" type="error" />
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex justify-start items-center gap-4">
                      <HiOutlineEye
                        color="#000000"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        onClick={() => nav("/rides/Rideview")}
                      />
                      <RiDeleteBin6Line
                       onClick={() => setopen(true)}
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
