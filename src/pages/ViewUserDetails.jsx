import React, { useState } from "react";
import UserDetails from "../components/HeroforUsers/UserDetails";
import RiderList from "../components/TableforUsers/RiderList";
import DashBoardLayout from "../layout/DashBoardLayout";
import Walletlist from "../components/TableforUsers/Walletlist";

const ViewUserDetails = () => {
  const tabs = ["Ride List", "Wallet Transactions"];
  const [selectedTab, setselectedTab] = useState("Ride List");

  return (
    <>
      <DashBoardLayout heading={"View User"} showSearch>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-5">
            <UserDetails />
            <div className="flex justify-start gap-4 px-3 my-4">
              {tabs.map((item) => (
                <Tab
                  key={item}
                  text={item}
                  selected={selectedTab === item}
                  onClick={() => setselectedTab(item)}
                />
              ))}
            </div>
            {selectedTab === "Ride List" ? <RiderList /> : <Walletlist />}
          </div>
          <div className="mb-7"></div>
        </div>
      </DashBoardLayout>
    </>
  );
};

export default ViewUserDetails;
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
