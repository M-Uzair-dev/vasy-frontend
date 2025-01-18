import React from "react";
import GLobalContent from "./GLobalContent";
import graph from "../../assets/graph.png";
import chart from "../../assets/chart.svg";
import { Members, Riders, Sales } from "../../data/routes";
import DashBoardLayout from "../../layout/DashBoardLayout";

function Maindiv() {
  return (
    <DashBoardLayout heading={"Members Overview"}>
      <div className="flex justify-between gap-7">
        {Members?.map((item, index) => (
          <GLobalContent
            key={index}
            heading={item.heading}
            amount={item.amount}
            bottom={item.bottom}
            Icon={item.image}
          />
        ))}
      </div>

      <h1 className="text-secondary text-2xl font-bold my-9">Rides Overview</h1>
      <div className="flex justify-between gap-7">
        {Riders?.map((item, index) => (
          <GLobalContent
            key={index}
            heading={item.heading}
            amount={item.amount}
            bottom={item.bottom}
            Icon={item.image}
          />
        ))}
      </div>
      <h1 className="text-secondary text-2xl font-bold my-9">Sales Overview</h1>

      <div className="flex justify-between gap-7">
        {Sales?.map((item, index) => (
          <GLobalContent
            key={index}
            heading={item.heading}
            amount={item.amount}
            bottom={item.bottom}
            Icon={item.image}
          />
        ))}
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
