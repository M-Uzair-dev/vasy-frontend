import React from "react";
import { Table } from "flowbite-react";
import { Wallet } from "../../data/routes";
function Walletlist() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>ID </Table.HeadCell>
          <Table.HeadCell>PAYMENT METHOD</Table.HeadCell>
          <Table.HeadCell>TXN ID</Table.HeadCell>
          <Table.HeadCell>DATE</Table.HeadCell>
          <Table.HeadCell>NOTE</Table.HeadCell>
          <Table.HeadCell>TOTAL AMOUNT</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {Wallet.map((value, index) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <Table.Cell>{value.id}</Table.Cell>
                <Table.Cell>CASH</Table.Cell>
                <Table.Cell>1454254254524</Table.Cell>
                <Table.Cell>DEC,30,2024</Table.Cell>
                <Table.Cell>--</Table.Cell>
                <Table.Cell>$350.00</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <div className="mb-16"></div>
    </div>
  );
}

export default Walletlist;
