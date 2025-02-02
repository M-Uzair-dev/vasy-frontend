import React from "react";
import { Table } from "flowbite-react";
import { Riderscontent } from "../../data/routes";
import { Badge } from "flowbite-react";
import CustomBadge from "../UI/Badges/CustomBadge";
function RiderList({ ride, driver }) {
  console.log(ride);
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
          {ride?.length > 0 ? (
            ride?.map((value, index) => {
              return (
                <>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      {value?._id?.slice(value?._id?.length - 9)}
                    </Table.Cell>
                    <Table.Cell>
                      {value?.driver?.firstName + " " + value?.driver?.lastName}
                    </Table.Cell>
                    <Table.Cell>{value?.service?.title}</Table.Cell>
                    <Table.Cell>{formatDate(value?.createdAt)}</Table.Cell>
                    <Table.Cell>
                      <CustomBadge
                        text={value?.status}
                        type={
                          value?.status == "started" ||
                          value?.status == "placed" ||
                          value?.status == "accepted"
                            ? "info"
                            : value?.status == "rejected"
                            ? "error"
                            : value?.status == "completed"
                            ? "success"
                            : ""
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>{value?.payment?.paymentMethod}</Table.Cell>
                    <Table.Cell>
                      <CustomBadge
                        text={value?.payment?.status}
                        type={
                          value?.payment?.status == "pending"
                            ? "info"
                            : value?.payment?.status == "completed" ||
                              value?.payment?.status == "refunded"
                            ? "success"
                            : value?.payment?.status == "failed"
                            ? "error"
                            : ""
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>$ {value?.payment?.amount}</Table.Cell>
                  </Table.Row>
                </>
              );
            })
          ) : (
            <p>No Rides</p>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default RiderList;
