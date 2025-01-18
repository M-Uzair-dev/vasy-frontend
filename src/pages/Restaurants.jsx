import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
// import CompleteUsers from '../components/TableforUsers/CompleteUsers'
import Generaldetails from "../components/Restaurantdetails/Generaldetails";
import OrderDetails from "../components/Restaurantdetails/OrderDetails";

function Restaurants() {
  const tabs = ["General details", "Order details"];
  const [selectedTab, setselectedTab] = useState("General details");

  return (
    <>
      <div>
        <DashBoardLayout heading={"Restaurants"} showSearch>
          <div className="flex justify-start gap-4 pb-7  ">
            {tabs.map((item) => (
              <Tab
                key={item}
                text={item}
                selected={selectedTab === item}
                onClick={() => setselectedTab(item)}
              />
            ))}
          </div>
          {selectedTab === "General details" ? (
            <Generaldetails />
          ) : (
            <OrderDetails />
          )}

          <div className="mt-20"></div>
        </DashBoardLayout>
      </div>
    </>
  );
}

export default Restaurants;

const Tab = ({ text = "Ride List", selected, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {selected ? (
        <>
          <h1 className="text-secondary text-xl font-bold ">{text}</h1>
          <hr className="mt-2 w-9 h-1 rounded-full bg-secondary" />
        </>
      ) : (
        <>
          <h1 className="text-secondary text-xl font-medium ">{text}</h1>
        </>
      )}
    </div>
  );
};
