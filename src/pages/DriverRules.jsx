import React, { useState } from 'react'
import DashBoardLayout from '../layout/DashBoardLayout'
import { HiOutlineEye } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Checkbox, Table, ToggleSwitch } from "flowbite-react";
import Formimg from '../assets/Formimg.png'
import Formtoggle from '../assets/Formtoggle.png'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiNotePencil } from 'react-icons/pi';
import CustomSwitch from '../components/UI/Switchs/CustomSwitch';
import DeleteModal from '../components/UI/Modals/DeleteModal';
function DriverRules() {
  const [open, setopen] = useState(false);
  const [switch2, setSwitch2] = useState(true)
    const nav = useNavigate();
  return (
   <DashBoardLayout heading={"DriverRules"} showSearch button onClick={()=> nav("/rules/edit")}>
        <div className="overflow-x-auto">
        {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
          
         <Table>
           <Table.Head>
             <Table.HeadCell>  <Checkbox/></Table.HeadCell>
             <Table.HeadCell>Name</Table.HeadCell>
             <Table.HeadCell>Image</Table.HeadCell>
             <Table.HeadCell>Active</Table.HeadCell>
             <Table.HeadCell></Table.HeadCell>
             <Table.HeadCell></Table.HeadCell>
             <Table.HeadCell></Table.HeadCell>
             <Table.HeadCell></Table.HeadCell>
             <Table.HeadCell>Actions</Table.HeadCell>
            
           </Table.Head>
   
           <Table.Body className="divide-y">
             {
               [1,2,3,4,5,6,7,8,9].map((index)=>{
                 return (
   
             <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
               
               <Table.Cell>  <Checkbox/></Table.Cell>
               <Table.Cell>[User name]</Table.Cell>
               <Table.Cell> <img src={Formimg} alt="" /> </Table.Cell>
               <Table.Cell>  <CustomSwitch />
               </Table.Cell>
               <Table.Cell></Table.Cell>
               <Table.Cell></Table.Cell>
               <Table.Cell></Table.Cell>
               <Table.Cell></Table.Cell>
   
               <Table.Cell>
                     <div className="flex justify-start items-center gap-4">
                     <RiDeleteBin6Line 
                      onClick={() => setopen(true)}
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200" 
                      />
                       <PiNotePencil
                         color="#069803"
                         className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                         onClick={() => nav("/rules/edit")}
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
   </DashBoardLayout>
  )
}

export default DriverRules
