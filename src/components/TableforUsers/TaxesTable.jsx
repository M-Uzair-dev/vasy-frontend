import React, { useState } from 'react'
import DashBoardLayout from '../../layout/DashBoardLayout'
import { Table,Checkbox } from "flowbite-react";
import { PiNotePencil } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import DeleteModal from '../UI/Modals/DeleteModal';

function TaxesTable() {
  const [open, setopen] = useState(false);
    const nav = useNavigate();
  return (
    
   <DashBoardLayout heading={"Taxes"} button onClick={()=>nav("/taxes/edit")} showSearch>
     <div className="overflow-x-auto">
     {open && <DeleteModal setDeleteModal={setopen} deleteModal={open} />}
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
            {
                [1,2,3,4,5,6].map((value)=>{
     return (

     
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
           
            <Table.Cell className="p-4"> <Checkbox /></Table.Cell>
            <Table.Cell>Location{value}</Table.Cell>
            <Table.Cell>
                %
            </Table.Cell>
            <Table.Cell>
                
          
                
            </Table.Cell>
            <Table.Cell>
                
            </Table.Cell>
            <Table.Cell>
                
            </Table.Cell>
            <Table.Cell>
              <div className="flex justify-start items-center gap-4">
              <RiDeleteBin6Line 
               onClick={() => setopen(true)}
                      color="#FF3636"
                      className="w-5 h-5 cursor-pointer hover:scale-105 duration-200" 
                      />
                    <PiNotePencil
                      onClick={() => nav("/taxes/edit")}
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

export default TaxesTable
