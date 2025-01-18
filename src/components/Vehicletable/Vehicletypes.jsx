import React, { useState } from 'react'
import { Checkbox, Table, ToggleSwitch } from "flowbite-react";
import Formtoggle from '../../assets/Formtoggle.png'
import { Users } from '../../data/routes';
import { HiOutlineEye } from "react-icons/hi2";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomSwitch from '../UI/Switchs/CustomSwitch';
import DeleteModal from '../UI/Modals/DeleteModal';
function Vehicletypes() {
  const [open, setopen] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const nav = useNavigate();
  return (
    <div>

        <div className="overflow-x-auto">
        {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
         
          
      <Table>
        <Table.Head>
          <Table.HeadCell> <Checkbox/></Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Active</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
         
        </Table.Head>

        <Table.Body className="divide-y">
          {
            Users.map((value,index)=>{
              return (

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
            
            <Table.Cell> <Checkbox/> </Table.Cell>
            <Table.Cell>{value.name}</Table.Cell>
            <Table.Cell> <CustomSwitch />
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>

            <Table.Cell>
                  <div className="flex justify-start items-center gap-3">
                    <HiOutlineEye
                      color="#000000"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                      onClick={() => nav("/vehicletypes/edit")}
                    />
                    <RiDeleteBin6Line
                     onClick={() => setopen(true)} 
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200" 
                      />
                    <PiNotePencil
                      onClick={() => nav("/vehicletypes/add")}
                      color="#069803"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                    />
                  </div>
                </Table.Cell>
            
          </Table.Row>
              )
            })
          }
         
         
         
        </Table.Body>
      </Table>
    </div>

    </div>
  )
}

export default Vehicletypes
