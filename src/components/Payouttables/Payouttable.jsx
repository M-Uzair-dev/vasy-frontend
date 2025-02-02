import React, { useState } from "react";
import { Badge, Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { GiCancel } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import AddAmountModal from "../UI/Modals/AddAmountModal";
import CustomBadge from "../UI/Badges/CustomBadge";
import Bank from "../UI/Modals/Bank";
import DeleteModal from "../UI/Modals/DeleteModal";
function Payouttable({ payouts, name }) {
  const [open1, setopen1] = useState(false);
  const [open, setopen] = useState(false);
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
    <>
      {open && <Bank openModal={open} setOpenModal={setopen} />}

      <div className="overflow-x-auto">
        {open1 && <DeleteModal setDeleteModal={setopen1} deleteModal={open1} />}
        <Table>
          <Table.Head>
            <Table.HeadCell>
              <Checkbox />{" "}
            </Table.HeadCell>
            <Table.HeadCell>User type</Table.HeadCell>
            <Table.HeadCell>Name </Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Paid date </Table.HeadCell>
            <Table.HeadCell>Status </Table.HeadCell>
            <Table.HeadCell>Admin note</Table.HeadCell>
            <Table.HeadCell>Action </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {payouts?.map((value) => {
              return (
                <Table.Row
                  key={value._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <>
                    <Table.Cell>
                      <Checkbox />{" "}
                    </Table.Cell>
                    <Table.Cell>Driver</Table.Cell>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{value?.amount}</Table.Cell>
                    <Table.Cell>{formatDate(value?.createdAt)}</Table.Cell>{" "}
                    <Table.Cell>
                      <CustomBadge
                        text={value?.status}
                        type={
                          value?.status == "pending"
                            ? "info"
                            : value?.status == "refunded"
                            ? "warning"
                            : value?.status == "completed"
                            ? "success"
                            : value?.status == "failed"
                            ? "error"
                            : "warning"
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>--</Table.Cell>
                    <Table.Cell>
                      <div className="flex justify-start items-center gap-3">
                        <HiOutlineEye
                          color="#000000"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                          onClick={() => setopen(true)}
                        />
                        <GiCancel
                          onClick={() => setopen1(true)}
                          color="#FF3636"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
                        />
                        <FaRegCheckCircle
                          color="#069803"
                          className="w-5 h-5 cursor-pointer hover:scale-105 duration-200"
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
    </>
  );
}

export default Payouttable;
