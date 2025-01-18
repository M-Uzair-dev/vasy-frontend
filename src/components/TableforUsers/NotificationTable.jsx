import React, { useState } from 'react'
import { Table } from "flowbite-react";
import Formimg from "../../assets/Formimg.png";
// import Formtoggle from "../../assets/Formtoggle.png";
import { Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import DashBoardLayout from '../../layout/DashBoardLayout';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DeleteModal from '../UI/Modals/DeleteModal';
function NotificationTable() {
  const [open, setopen] = useState(false);
    const nav = useNavigate();
  return (
    <DashBoardLayout heading={"Notification"} showSearch button onClick={()=>nav("/notification/add")}>
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
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Subtitle</Table.HeadCell>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Audience</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
    
      </Table.Head>
      <Table.Body className="divide-y text-dark text-sm font-medium">
        {[1, 2, 3, 4, 5, 6, 7, 8, 12, 32, 43, 456].map((value, index) => {
          return (
            <Table.Row key={index} className="bg-white">
              <Table.Cell>
           
                <Checkbox />
              </Table.Cell>
              <Table.Cell>Dummy Name</Table.Cell>
              <Table.Cell>Subtitle</Table.Cell>
              <Table.Cell>
                <img src={Formimg} alt="" />
              </Table.Cell>
              <Table.Cell>All</Table.Cell>
          
              <Table.Cell>
                <div className="flex justify-start items-center gap-3">
                  <HiOutlineEye
                    color="#000000"
                    className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                    onClick={() => nav("/notification/add")}
                  />
                   <RiDeleteBin6Line 
                    onClick={() => setopen(true)}
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200" 
                      />
                  <PiNotePencil
                    onClick={() => nav("/notification/edit")}
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
  )
}

export default NotificationTable
