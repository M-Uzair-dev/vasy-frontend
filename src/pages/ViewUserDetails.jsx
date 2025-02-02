import React, { useEffect, useState } from "react";
import UserDetails from "../components/HeroforUsers/UserDetails";
import RiderList from "../components/TableforUsers/RiderList";
import DashBoardLayout from "../layout/DashBoardLayout";
import Walletlist from "../components/TableforUsers/Walletlist";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";
import { useNavigate } from "react-router-dom";

const ViewUserDetails = () => {
  const { userId } = useParams();
  const tabs = ["Ride List", "Wallet Transactions"];
  const [selectedTab, setselectedTab] = useState("Ride List");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [rideDetails, setRideDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const getUserDetails = async () => {
    try {
      if (!userId) {
        toastMessage("User not found !", "error");
        setLoading(false);
        navigate("/");
      }

      const response = await api.get(`/client/profile?id=${userId}`);
      if (response.status == 200) {
        setUser({ ...response.data.client, balance: response.data.balance });
        setRideDetails(response.data.rideDetails);
        setTransactions(response.data.transactions);
        setLoading(false);
      } else {
        toastMessage(
          response.data.message || "Something went wrong !",
          "error"
        );
        setLoading(false);
        navigate("/");
      }
    } catch (e) {
      toastMessage(e.data.message || "Something went wrong", "error");
      setLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
  return (
    <>
      <DashBoardLayout heading={"View User"} showSearch>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-5">
            <UserDetails user={user} />
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
            {selectedTab === "Ride List" ? (
              <RiderList ride={rideDetails} />
            ) : (
              <Walletlist transactions={transactions} />
            )}
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
