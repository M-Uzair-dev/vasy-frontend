import React, { useEffect } from "react";
import { Table } from "flowbite-react";
import DashBoardLayout from "../layout/DashBoardLayout";
import { useParams } from "react-router-dom";
import useApi from "../api/useApi";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";

function RideOrderview() {
  const { id } = useParams();
  const { apiCall, response, loading } = useApi("GET", (data) => {
    console.log(data);
  });
  function formatDate(isoString) {
    const date = new Date(isoString);
    const months = [
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
    return `${
      months[date.getUTCMonth()]
    },${date.getUTCDate()},${date.getUTCFullYear()}`;
  }

  useEffect(() => {
    apiCall(`/ride?id=${id}`);
  }, [id]);

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <>
      <DashBoardLayout heading={"Ride details"}>
        <div className="bg-[#EDF2F7] m-4 rounded-xl ">
          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              General Details
            </h1>
            <div className="flex items-center justify-start gap-32 text-sm font-medium pt-3 text-[#737373] ">
              <div>Ride ID </div>
              <div>Date Created </div>
              <div>Payment status</div>
              <div>Payment Method</div>
              <div>Ride status</div>
            </div>

            <div className="flex items-center justify-start gap-32 text-sm font-medium pt-3 text-[#737373] ">
              <div>
                {response?.data?.ride?._id.slice(
                  response?.data?.ride?._id.length - 9
                )}
              </div>
              <div>{formatDate(response?.data?.ride?.createdAt)}</div>
              <div className="ml-7">{response?.data?.payments[0]?.status}</div>
              <div className="ml-7">
                {response?.data?.payments[0]?.paymentMethod}
              </div>
              <div className="ml-12">{response?.data?.ride?.status}</div>
            </div>
          </div>

          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              Driver Details
            </h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Name</div>
              <div>Email</div>
              <div className="ml-20">Phone No</div>
            </div>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]">
              <div>
                {response?.data?.ride?.driver?.firstName +
                  " " +
                  response?.data?.ride?.driver?.lastName}
              </div>
              <div>{response?.data?.ride?.driver?.email}</div>
              <div>{response?.data?.ride?.driver?.mobileNumber}</div>
            </div>
          </div>
          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              Customer Details
            </h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Name</div>
              <div>Email</div>
              <div>Phone No</div>
              <div>Ride price</div>
            </div>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]">
              <div>
                {response?.data?.ride?.client?.firstName +
                  " " +
                  response?.data?.ride?.client?.lastName}
              </div>
              <div>{response?.data?.ride?.client?.email}</div>
              <div>{response?.data?.ride?.client?.mobileNumber}</div>
              <div>${response?.data?.ride?.amount}</div>
            </div>
          </div>
          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              Billing Details
            </h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Name</div>
              <div>Email</div>
              <div>Phone No</div>
              <div>Billing amount</div>
            </div>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]">
              <div>
                {response?.data?.ride?.client?.firstName +
                  " " +
                  response?.data?.ride?.client?.lastName}
              </div>
              <div>{response?.data?.ride?.client?.email}</div>
              <div>{response?.data?.ride?.client?.mobileNumber}</div>
              <div>${response?.data?.ride?.amount}</div>
            </div>
          </div>
          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              Location Details
            </h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Pick Up Location</div>
              <div>Drop Off Location</div>
            </div>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]">
              <div>{response?.data?.ride?.distance?.from}</div>
              <div>{response?.data?.ride?.distance?.to}</div>
            </div>
          </div>
          <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">Reviews</h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Customer Review</div>
              <div>Driver Review</div>
            </div>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373]">
              <div>
                {response?.data?.ratings?.find(
                  (item) => item?.user === response?.data?.ride?.driver?._id
                ) ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9099 6.90944H13.9099L11.9999 1.18944C11.9305 0.968017 11.7921 0.77455 11.6051 0.637199C11.418 0.499847 11.192 0.425781 10.9599 0.425781C10.7279 0.425781 10.5019 0.499847 10.3148 0.637199C10.1277 0.77455 9.98941 0.968017 9.91993 1.18944L8.09993 6.90944H2.09993C1.86204 6.90044 1.62775 6.96958 1.43285 7.10628C1.23795 7.24297 1.09316 7.43972 1.02061 7.66645C0.948053 7.89319 0.951721 8.13744 1.03105 8.36189C1.11038 8.58634 1.26102 8.77865 1.45993 8.90944L6.32993 12.4394L4.45993 18.1294C4.38763 18.3488 4.38691 18.5855 4.45786 18.8054C4.52881 19.0252 4.66777 19.2168 4.85469 19.3526C5.04161 19.4883 5.26682 19.5611 5.49782 19.5606C5.72882 19.56 5.95368 19.4861 6.13993 19.3494L10.9999 15.8194L15.8599 19.3494C16.0462 19.4861 16.271 19.56 16.502 19.5606C16.733 19.5611 16.9583 19.4883 17.1452 19.3526C17.3321 19.2168 17.4711 19.0252 17.542 18.8054C17.613 18.5855 17.6122 18.3488 17.5399 18.1294L15.6799 12.4094L20.5499 8.87944C20.7353 8.74393 20.8732 8.55332 20.9439 8.33481C21.0145 8.1163 21.0144 7.88106 20.9434 7.66265C20.8725 7.44424 20.7343 7.25382 20.5487 7.11856C20.3631 6.9833 20.1396 6.91011 19.9099 6.90944Z"
                        fill="#FFB702"
                      />
                    </svg>
                    (
                    {
                      response?.data?.ratings?.find(
                        (item) =>
                          item?.user === response?.data?.ride?.driver?._id
                      )?.rating
                    }
                    ){" - "}
                    {
                      response?.data?.ratings?.find(
                        (item) =>
                          item?.user === response?.data?.ride?.driver?._id
                      )?.feedback
                    }
                  </div>
                ) : (
                  <p>No Review</p>
                )}
              </div>
              <div>
                {response?.data?.ratings?.find(
                  (item) => item?.user === response?.data?.ride?.client?._id
                ) ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9099 6.90944H13.9099L11.9999 1.18944C11.9305 0.968017 11.7921 0.77455 11.6051 0.637199C11.418 0.499847 11.192 0.425781 10.9599 0.425781C10.7279 0.425781 10.5019 0.499847 10.3148 0.637199C10.1277 0.77455 9.98941 0.968017 9.91993 1.18944L8.09993 6.90944H2.09993C1.86204 6.90044 1.62775 6.96958 1.43285 7.10628C1.23795 7.24297 1.09316 7.43972 1.02061 7.66645C0.948053 7.89319 0.951721 8.13744 1.03105 8.36189C1.11038 8.58634 1.26102 8.77865 1.45993 8.90944L6.32993 12.4394L4.45993 18.1294C4.38763 18.3488 4.38691 18.5855 4.45786 18.8054C4.52881 19.0252 4.66777 19.2168 4.85469 19.3526C5.04161 19.4883 5.26682 19.5611 5.49782 19.5606C5.72882 19.56 5.95368 19.4861 6.13993 19.3494L10.9999 15.8194L15.8599 19.3494C16.0462 19.4861 16.271 19.56 16.502 19.5606C16.733 19.5611 16.9583 19.4883 17.1452 19.3526C17.3321 19.2168 17.4711 19.0252 17.542 18.8054C17.613 18.5855 17.6122 18.3488 17.5399 18.1294L15.6799 12.4094L20.5499 8.87944C20.7353 8.74393 20.8732 8.55332 20.9439 8.33481C21.0145 8.1163 21.0144 7.88106 20.9434 7.66265C20.8725 7.44424 20.7343 7.25382 20.5487 7.11856C20.3631 6.9833 20.1396 6.91011 19.9099 6.90944Z"
                        fill="#FFB702"
                      />
                    </svg>
                    (
                    {
                      response?.data?.ratings?.find(
                        (item) =>
                          item?.user === response?.data?.ride?.client?._id
                      )?.rating
                    }
                    ){" - "}
                    {
                      response?.data?.ratings?.find(
                        (item) =>
                          item?.user === response?.data?.ride?.client?._id
                      )?.feedback
                    }
                  </div>
                ) : (
                  <p>No Review</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default RideOrderview;
