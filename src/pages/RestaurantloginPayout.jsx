import React, { useState } from "react";
import {  Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi";
import CustomBadge from "../components/UI/Badges/CustomBadge";
import DashBoardLayout from "../layout/DashBoardLayout";
import { Navigate, useNavigate } from "react-router-dom";
function RestaurantloginPayout() {
    const nav = useNavigate();
  return (
    <>
      <DashBoardLayout heading={"Payout requests"} showSearch button1 onClick={()=>nav("/payoutrequest/newrequest")} >
    

      <div className="overflow-x-auto">
     
        <Table>
          <Table.Head>
            <Table.HeadCell>
              <Checkbox />{" "}
            </Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Request Date  </Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell> </Table.HeadCell>
            <Table.HeadCell> </Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Action </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>$400.00</Table.Cell>
                    <Table.Cell>Dec,24</Table.Cell>
                    <Table.Cell><CustomBadge text="Rejected" type="error" /></Table.Cell>
                    <Table.Cell>
                      
                    </Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-start items-center gap-3">
                        <HiOutlineEye
                          color="#000000"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                          onClick={() => nav("/payoutrequest/details")}
                        />
                    
                      </div>
                    </Table.Cell>
                  </>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
      </DashBoardLayout>
    </>
  );
}

export default RestaurantloginPayout;



