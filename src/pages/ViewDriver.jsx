import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
import heropic from "../assets/heropic.png";
import star from "../assets/star.png";
import RiderList from "../components/TableforUsers/RiderList";
import Walletlist from "../components/TableforUsers/Walletlist";
import Payouttable from "../components/Payouttables/Payouttable";
import Button from "../components/button/Button";
import AddAmountModal from "../components/UI/Modals/AddAmountModal";
import { useParams } from "react-router-dom";
import useApi from "../api/useApi";
function ViewDriver() {
  const tabs = ["Ride List", "Wallet Transactions", "Payouts Requests"];
  const [selectedTab, setselectedTab] = useState("Ride List");
  const [open, setopen] = useState(false);
  const { id } = useParams();
  const { apiCall, response, loading } = useApi("GET");

  useEffect(() => {
    apiCall(`/driver/${id}`);
  }, []);

  return (
    <>
      {open && <AddAmountModal openModal={open} setOpenModal={setopen} />}
      <DashBoardLayout heading={"View Driver"} showSearch>
        <div className="bg-[#EDF2F7] rounded-xl ">
          <div className="flex gap-4 border-b-2 py-7 px-8 justify-between  ">
            <div className="flex gap-4">
              <img src={heropic} alt="img" />
              <div className="flex flex-col gap-2 ">
                <div className="flex gap-2 items-center">
                  <h1 className="text-[#1B3B5F] text-[24px] font-[700]">
                    Restaurant name
                  </h1>
                  <img src={star} alt="" className="h-4" />
                  <span>(3.0)</span>
                </div>
                <div>
                  <h1 className="text-[16px] font-[500] text-[#737373]">
                    kumawatmamta@gmail.com
                  </h1>
                  <h1 className="text-[16px] font-[500] text-[#737373]">
                    +12898383898
                  </h1>
                </div>
              </div>
            </div>
            <div></div>
            <div>
              <h1 className="text-secondary pb-2 text-end text-2xl font-bold">
                $450.00
              </h1>
              <Button
                onclick={() => setopen(true)}
                title="Add Amount"
                className="px-7"
              />
            </div>
          </div>

          {/* <div className=" p-6 border-b-2 ">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F] ">
              Vehicle Information
            </h1>
            <div className="flex items-center justify-start gap-48 text-sm font-medium pt-3 text-[#737373] ">
              <div>Seats</div>
              <div>Vehicle Color</div>
              <div>Vehicle No</div>
              <div>Vehicle Type</div>
            </div>
            <div className="flex items-center justify-start gap-56 text-sm font-medium pt-3 text-[#737373]">
              <div>06</div>
              <div>White</div>
              <div>LOZ-123</div>
              <div>SUV</div>
            </div>
          </div> */}

          <div className=" p-6">
            <h1 className="text-[18px] font-[700] text-[#1B3B5F]">
              Bank Account Details
            </h1>
            <div className="flex items-center justify-start gap-44 text-sm font-medium pt-3 text-[#737373] ">
              <div>Account Holder</div>
              <div>Bank Name</div>
              <div>Branch Name</div>
              <div>IBAN</div>
            </div>
            <div className="flex items-center justify-start gap-44 text-sm font-medium pt-3 text-[#737373]">
              <div>Account Holder</div>
              <div>Bank Name</div>
              <div>Branch Name</div>
              <div>IBAN</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-4 px-3 py-8">
            {tabs.map((item) => (
              <Tab
                key={item}
                text={item}
                selected={selectedTab === item}
                onClick={() => setselectedTab(item)}
              />
            ))}
          </div>
          <div className="pb-52">
            {selectedTab === "Ride List" && <RiderList />}
            {selectedTab === "Wallet Transactions" && <Walletlist />}
            {selectedTab === "Payouts Requests" && <Payouttable />}
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
}

export default ViewDriver;
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
