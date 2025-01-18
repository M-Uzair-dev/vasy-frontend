import React, { useState } from 'react'
import Formtoggle from '../../assets/Formtoggle.png'
import { Table,Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import DashBoardLayout from '../../layout/DashBoardLayout';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomSwitch from '../UI/Switchs/CustomSwitch';
import DeleteModal from '../UI/Modals/DeleteModal';
function Zonestable() {
  const [open, setopen] = useState(false);
    const nav = useNavigate();
  return (
     
   <DashBoardLayout heading={"Zones"} showSearch button onClick={()=>nav("/zones/edit")}>
   <div className="overflow-x-auto">
   {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
    <Table>
      <Table.Head>
      <Table.HeadCell className="p-4">
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>Location</Table.HeadCell>
        <Table.HeadCell>Availibility</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
       
      </Table.Head>
      <Table.Body className="divide-y">
          {
              [1,2,3,4,5,6].map((value)=>{
   return (

   
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
         
          <Table.Cell className="p-4"> <Checkbox /></Table.Cell>
          <Table.Cell>Location{value}</Table.Cell>
          <Table.Cell>
          <CustomSwitch />
          </Table.Cell>
          <Table.Cell>
              
        
              
          </Table.Cell>
          <Table.Cell>
              
          </Table.Cell>
          <Table.Cell>
              
          </Table.Cell>
          <Table.Cell>
            <div className="flex justify-start items-center gap-3">
                 
                   <RiDeleteBin6Line 
                    onClick={() => setopen(true)}
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200" 
                      />
                  <PiNotePencil
                    onClick={() => nav("/zones/edit")}
                    color="#069803"
                    className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                  />
                </div>
          </Table.Cell>
        </Table.Row>

) })
          }
        </Table.Body>
        </Table>
        </div>


 </DashBoardLayout>
  )
}

export default Zonestable
