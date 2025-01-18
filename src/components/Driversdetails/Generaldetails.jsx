import React, { useState } from "react";
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
function Generaldetails() {
  const [open, setopen] = useState(false);
  const nav = useNavigate();
  return (
    <div className="overflow-x-auto">
      {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
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
          {Users.map((value, index) => {
            return (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell>
                  <img src={Formimg} alt="" />
                </Table.Cell>
                <Table.Cell>{value.name}</Table.Cell>
                <Table.Cell>Usermail</Table.Cell>
                <Table.Cell>+989898989</Table.Cell>
                <Table.Cell>
                  <img src={Documenticon} alt="" />
                </Table.Cell>
                <Table.Cell>Dec,30,2024</Table.Cell>
                <Table.Cell> Car </Table.Cell>
                <Table.Cell>SUV</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-start items-center gap-3">
                    <HiOutlineEye
                      color="#000000"
                      className="w-5 h-7 cursor-pointer hover:scale-105 duration-200"
                      onClick={() => nav("/drivers/view")}
                    />
                    <RiDeleteBin6Line
                     onClick={() => setopen(true)}
                      color="#FF3636"
                      className="w-5 h-7 cursor-pointer hover:scale-105 duration-200"
                    />
                    <PiNotePencil
                      onClick={() => nav("/drivers/edit")}
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
  );
}

export default Generaldetails;
