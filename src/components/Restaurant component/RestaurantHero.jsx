import React, { useEffect } from "react";
import heropic from "../../assets/heropic.png";
import star from "../../assets/star.png";
import { Table } from "flowbite-react";
import DashBoardLayout from "../../layout/DashBoardLayout";
import { useParams } from "react-router-dom";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";
function RestaurantHero() {
  const { id } = useParams();
  const {
    apiCall: fetchRestaurant,
    response: restaurantResponse,
    loading: loadingRestaurant,
  } = useApi("GET");
  const {
    apiCall: fetchAnotherData,
    response: orderResponse,
    loading: loadingAnotherData,
  } = useApi("GET");

  useEffect(() => {
    fetchRestaurant(`/restaurant?id=${id}`);
    fetchAnotherData(`/order/status/${id}`);
  }, [id]);
  if (loadingRestaurant || loadingAnotherData) {
    return <LoaderSpinner />;
  }
  return (
    <DashBoardLayout heading={"View Details"} showSearch>
      <div className="bg-[#EDF2F7]  rounded-xl ">
        <div className="py-6">
          <div className="flex flex-col">
            <div className="flex gap-4 border-b-2 px-6 py-4 items-center ">
              <div>
                <img src={heropic} alt="img" />
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2 items-center">
                  <h1 className="text-[#1B3B5F] text-[24px] font-[700]">
                    {restaurantResponse?.data?.restaurant?.fullName}
                  </h1>
                  <img src={star} alt="" className="h-4" />
                  <span>(3.0)</span>
                </div>
                <div>
                  <h1 className="text-[16px] font-[500] text-[#737373]">
                    {restaurantResponse?.data?.restaurant?.email}{" "}
                  </h1>
                  <h1 className="text-[16px] font-[500] text-[#737373]">
                    {restaurantResponse?.data?.restaurant?.phoneNumber}
                  </h1>
                </div>
              </div>
            </div>
            <div className=" p-6">
              <h1 className="text-[18px] font-[700] text-[#1B3B5F]">
                Orders Information
              </h1>
              <div className="flex items-center justify-start gap-36 text-sm font-medium pt-3 text-[#737373]">
                <div>Total Orders</div>
                <div>Order Placed</div>
                <div>Orders Active</div>
                <div>Orders Cancelled</div>
              </div>
              <div className="flex items-center justify-start gap-56 text-sm font-medium pt-3 text-[#737373]">
                <div>3456</div>
                <div>45</div>
                <div>56</div>
                <div>8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </DashBoardLayout>
  );
}

export default RestaurantHero;
