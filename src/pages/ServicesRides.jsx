import React, { useState } from "react";
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
function ServicesRides() 
{
  const [open, setopen] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const nav = useNavigate();
  return (
    <DashBoardLayout
      heading={"Services"}
      button
      showSearch
      onClick={() => nav("/rides/serviceedit")}
    >
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
            <Table.HeadCell>TITLE</Table.HeadCell>
            <Table.HeadCell>IMAGE</Table.HeadCell>
            <Table.HeadCell> PEAK SURCHARGE</Table.HeadCell>
            <Table.HeadCell>km CHARGE</Table.HeadCell>
            <Table.HeadCell>WEIGHT LIMIT</Table.HeadCell>

            <Table.HeadCell>TAX</Table.HeadCell>
            <Table.HeadCell>BIDDING SYSTEM</Table.HeadCell>
            <Table.HeadCell>STATUS</Table.HeadCell>
            <Table.HeadCell>ACTIONS</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-dark text-sm font-medium">
            {[1, 2, 3, 4].map((value, index) => {
              return (
                <Table.Row key={index} className="bg-white">
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>BIKE</Table.Cell>
                  <Table.Cell>
                    <img src={Formimg} alt="" />
                  </Table.Cell>
                  <Table.Cell>$7.00</Table.Cell>
                  <Table.Cell>12KG</Table.Cell>
                  <Table.Cell>12%</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <CustomSwitch />
                  </Table.Cell>
                  <Table.Cell>
                    <CustomSwitch />
                  </Table.Cell>
                  <Table.Cell>23</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-start items-center gap-3">
                      <RiDeleteBin6Line
                       onClick={() => setopen(true)}
                        color="#FF3636"
                        className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      />
                      <PiNotePencil
                        onClick={() => nav("/rides/serviceedit")}
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
