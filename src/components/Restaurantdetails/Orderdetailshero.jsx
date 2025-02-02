import React, { useEffect } from "react";
import { Table } from "flowbite-react";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";

function Orderdetailshero() {
  const { id } = useParams();
  const { apiCall, response, loading } = useApi("GET");

  useEffect(() => {
    apiCall(`/order/${id}`);
  }, []);

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <>
      <DashBoardLayout heading={"Order details"}>
        <div className="bg-[#EDF2F7]  rounded-xl   ">
          <div className=" border-b-2 p-4">
            <h1 className=" text-[18px] font-[700] text-[#1B3B5F]">
              Orders Information
            </h1>
            <div className="pb-6">
              <div className="flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]">
                <div>Order ID</div>
                <div>Status</div>
                <div>Amount</div>
                <div>Order Items</div>
              </div>
              <div className="flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]">
                <div>
                  {response?.data?.order?._id?.slice(
                    response?.data?.order?._id?.length - 8
                  )}
                </div>
                <div>{response?.data?.order?.status}</div>
                <div>${response?.data?.order?.totalPrice}</div>
                <div>{response?.data?.order?.cartId?.items?.length}</div>
              </div>
            </div>
          </div>
          <div className="p-4  ">
            <h1 className=" text-[18px] font-[700] text-[#1B3B5F]">
              Rider Information
            </h1>
            <div className="pb-6">
              <div className="flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]">
                <div>Name</div>
                <div>Email</div>
                <div>Phone No</div>
                <div>Pickup location</div>
                <div>Dropoff location</div>
              </div>
              <div className="flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]">
                <div>
                  {response?.data?.order?.riderId?.firstName +
                    " " +
                    response?.data?.order?.riderId?.firstName}
                </div>
                <div>{response?.data?.order?.riderId?.email}</div>
                <div>{response?.data?.order?.riderId?.mobileNumber}</div>
                <div>Pickup location</div>
                <div>Dropoff location</div>
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default Orderdetailshero;
