import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { HiOutlineEye } from "react-icons/hi";
import CustomBadge from "../components/UI/Badges/CustomBadge";
import DashBoardLayout from "../layout/DashBoardLayout";
import { Navigate, useNavigate } from "react-router-dom";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import useApi from "../api/useApi";
function RestaurantloginPayout() {
  const nav = useNavigate();
  const restaurantId = localStorage.getItem("userId");
  const {
    apiCall: getPayout,
    loading,
    response,
  } = useApi("GET", (data) => {
    console.log(data);
  });
  useEffect(() => {
    if (restaurantId) {
      getPayout(`/payment?restaurantId=${restaurantId}`);
    } else {
      toastMessage("Restaurant ID not found", "error");
      nav("/");
    }
  }, []);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <DashBoardLayout
        heading={"Payout requests"}
        showSearch
        button1
        onClick={() => nav("/payoutrequest/newrequest")}
      >
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>
                <Checkbox />{" "}
              </Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Request Date </Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {response?.data?.payments?.map((value) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <>
                      <Table.Cell>
                        <Checkbox />
                      </Table.Cell>
                      <Table.Cell>{value?.amount}</Table.Cell>
                      <Table.Cell>{formatDate(value?.createdAt)}</Table.Cell>
                      <Table.Cell>
                        <CustomBadge
                          text={value?.status}
                          type={
                            value?.status === "pending" ||
                            value?.status === "refunded"
                              ? "info"
                              : value?.status === "completed"
                              ? "success"
                              : "error"
                          }
                        />
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
