import React, { useEffect } from "react";
import GLobalContent from "./GLobalContent";
import graph from "../../assets/graph.png";
import chart from "../../assets/chart.svg";
import { Members, Riders, Sales } from "../../data/routes";
import DashBoardLayout from "../../layout/DashBoardLayout";
import {
  riders1,
  riders2,
  riders3,
  rides1,
  rides2,
  rides3,
  sales1,
  sales2,
  sales3,
} from "../UI/Icons";
import useApi from "../../api/useApi";
import LoaderSpinner from "../UI/Loaders/LoaderSpinner";

function Maindiv() {
  const { apiCall, response, loading } = useApi("GET", (data) =>
    console.log(data)
  );

  useEffect(() => {
    apiCall("/auth/dashboard");
  }, []);

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }

  return (
    <DashBoardLayout heading={"Members Overview"}>
      <div className="flex justify-between gap-7">
        <GLobalContent
          heading={"Total Rides"}
          amount={response?.data?.totalRides || 0}
          bottom={""}
          Icon={rides1}
        />
        <GLobalContent
          heading={"Total users"}
          amount={response?.data?.totalClients || 0}
          bottom={""}
          Icon={rides2}
        />
        <GLobalContent
          heading={"Total Drivers"}
          amount={response?.data?.totalDrivers || 0}
          bottom={""}
          Icon={rides3}
        />
      </div>

      <h1 className="text-secondary text-2xl font-bold my-9">Rides Overview</h1>
      <div className="flex justify-between gap-7">
        <GLobalContent
          heading={"Ride Placed"}
          amount={response?.data?.placedRides || 0}
          bottom={""}
          Icon={riders1}
        />
        <GLobalContent
          heading={"Ride Active"}
          amount={response?.data?.activeRides || 0}
          bottom={""}
          Icon={riders2}
        />
        <GLobalContent
          heading={"Ride Cancelled"}
          amount={response?.data?.cancelledRides || 0}
          bottom={""}
          Icon={riders3}
        />
      </div>
      <h1 className="text-secondary text-2xl font-bold my-9">Sales Overview</h1>

      <div className="flex justify-between gap-7">
        <GLobalContent
          heading={"Total Earnings"}
          amount={response?.data?.totalAmount || 0}
          Icon={sales1}
        />
        <GLobalContent
          heading={"Total Admin commission"}
          amount={response?.data?.adminCommission || 0}
          Icon={sales2}
        />
        <GLobalContent
          heading={"Drivers Payout"}
          amount={response?.data?.payouts?.length || 0}
          Icon={sales3}
        />
      </div>

      <div className=" py-10">
        <h1 className="text-secondary text-2xl font-bold my-9">
          Monthly Sales
        </h1>

        <img
          src={chart}
          alt=""
          className="w-full border-2 rounded-xl  object-cover"
        />
      </div>
    </DashBoardLayout>
  );
}

export default Maindiv;
