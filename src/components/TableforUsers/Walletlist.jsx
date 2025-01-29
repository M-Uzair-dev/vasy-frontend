import React from "react";
import { Table } from "flowbite-react";
import { Wallet } from "../../data/routes";
function Walletlist({ transactions }) {
  function formatDate(isoDateString) {
    const date = new Date(isoDateString); // Parse the ISO date string

    // Define an array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get the components for the formatted date
    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Return the formatted date as a string
    return `${month} ${day}, ${year}`;
  }
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
        {transactions.length > 0 ? (
          <Table.Body className="divide-y">
            {transactions.map((value, index) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                >
                  <Table.Cell>
                    {value._id.slice(value._id.length - 9)}
                  </Table.Cell>
                  <Table.Cell>{value.method}</Table.Cell>
                  <Table.Cell>{value.TxnId}</Table.Cell>
                  <Table.Cell>{formatDate(value.createdAt)}</Table.Cell>
                  <Table.Cell>{value.note}</Table.Cell>
                  <Table.Cell>$ {value.amount}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        ) : (
          <p>No transactions</p>
        )}
      </Table>

      <div className="mb-16"></div>
    </div>
  );
}

export default Walletlist;
