import React, { useEffect } from "react";
import GLobalContent from "./GLobalContent";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Maindiv() {
  const { apiCall, response, loading } = useApi("GET", (data) =>
    console.log(data)
  );

  useEffect(() => {
    apiCall("/auth/dashboard");
  }, []);

  // Transform monthlyOrders data into array format for the chart
  const chartData = response?.data?.monthlyOrders
    ? Object.entries(response.data.monthlyOrders)
        .map(([month, count]) => {
          const [monthName, year] = month.split(" ");
          const shortMonth = monthName.substring(0, 3);
          const shortYear = year.substring(2);
          return {
            month: `${shortMonth}, ${shortYear}`,
            orders: count,
          };
        })
        .sort((a, b) => {
          // Sort by date
          const dateA = new Date(a.month);
          const dateB = new Date(b.month);
          return dateA - dateB;
        })
    : [];

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

      <div className="py-10">
        <h1 className="text-secondary text-2xl font-bold my-9">
          Monthly Orders
        </h1>

        <div className="w-full h-[400px] border-2 rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fill: "#666" }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis tick={{ fill: "#666" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashBoardLayout>
  );
}

export default Maindiv;
