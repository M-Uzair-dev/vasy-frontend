import React from "react";
import { Orderdetails } from "../../data/routes";
import { Table } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "flowbite-react";
import CustomBadge from "../../components/UI/Badges/CustomBadge";
function OrderDetails({ orders }) {
  const nav = useNavigate();
  console.log(orders);
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head className="text-dark text-xs font-medium">
          <Table.HeadCell>
            {" "}
            <Checkbox />{" "}
          </Table.HeadCell>
          <Table.HeadCell>ORDER ID </Table.HeadCell>
          <Table.HeadCell>RESTAURANT NAME</Table.HeadCell>
          <Table.HeadCell>AMOUNT</Table.HeadCell>
          <Table.HeadCell>ORDER STATUS</Table.HeadCell>
          <Table.HeadCell> </Table.HeadCell>
          <Table.HeadCell> </Table.HeadCell>
          <Table.HeadCell> </Table.HeadCell>
          <Table.HeadCell> </Table.HeadCell>
          <Table.HeadCell>ACTIONS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y  text-dark text-sm font-medium">
          {orders?.map((value, index) => {
            return (
              <>
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                >
                  <Table.Cell>
                    <Checkbox />{" "}
                  </Table.Cell>
                  <Table.Cell>
                    {value._id.slice(value._id.length - 9)}
                  </Table.Cell>
                  <Table.Cell>{value.restaurantId.fullName}</Table.Cell>
                  <Table.Cell>${value.totalPrice}</Table.Cell>
                  <Table.Cell>
                    <CustomBadge
                      text={value.status}
                      type={
                        value.status == "pending" ||
                        value.status == "confirmed" ||
                        value.status == "preparing"
                          ? "info"
                          : value.status == "delivered"
                          ? "success"
                          : value.status == "cancelled"
                          ? "danger"
                          : "warning"
                      }
                    />
                  </Table.Cell>
                  <Table.Cell> </Table.Cell>
                  <Table.Cell> </Table.Cell>
                  <Table.Cell> </Table.Cell>
                  <Table.Cell> </Table.Cell>
                  <Table.Cell>
                    <HiOutlineEye
                      color="#000000"
                      className="w-7 h-7 cursor-pointer hover:scale-105 duration-200"
                      onClick={() => nav(`/resturants/Order/${value._id}`)}
                    />
                  </Table.Cell>
                </Table.Row>
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default OrderDetails;
