import React from "react";
import { Table } from "flowbite-react";
import { Riderscontent } from "../../data/routes";
import { Badge } from "flowbite-react";
import CustomBadge from "../UI/Badges/CustomBadge";
function RiderList() {
  return (
    <div className="overflow-x-auto ">
      <Table hoverable>
        <Table.Head className="text-xs font-medium">
          <Table.HeadCell>RIDE ID </Table.HeadCell>
          <Table.HeadCell>DRIVER</Table.HeadCell>
          <Table.HeadCell>SERVICE</Table.HeadCell>
          <Table.HeadCell>DATE</Table.HeadCell>
          <Table.HeadCell>RIDE STATUS</Table.HeadCell>
          <Table.HeadCell>PAYMENT METHOD</Table.HeadCell>
          <Table.HeadCell>PAYMENT STATUS</Table.HeadCell>
          <Table.HeadCell>TOTAL AMOUNT</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-sm font-medium">
          {Riderscontent.map((value, index) => {
            return (
              <>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>012343</Table.Cell>
                  <Table.Cell>{"Driver name "}</Table.Cell>
                  <Table.Cell>Car</Table.Cell>
                  <Table.Cell>Dec,30,2024</Table.Cell>
                  <Table.Cell>
                    <CustomBadge text="Placed" type="info" />
                  </Table.Cell>
                  <Table.Cell>{value.modeofpayment}</Table.Cell>
                  <Table.Cell>
                    <CustomBadge text="Paid" type="error" />
                  </Table.Cell>
                  <Table.Cell>{value.amount}</Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default RiderList;
