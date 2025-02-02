import React, { useEffect, useState } from "react";
import DashBoardLayout from "../layout/DashBoardLayout";
// import CompleteUsers from '../components/TableforUsers/CompleteUsers'
import Generaldetails from "../components/Restaurantdetails/Generaldetails";
import OrderDetails from "../components/Restaurantdetails/OrderDetails";
import { api } from "../api/useAxios";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import LoaderSpinner from "../components/UI/Loaders/LoaderSpinner";
import { useNavigate } from "react-router-dom";

function Restaurants() {
  const tabs = ["General details", "Order details"];
  const [selectedTab, setselectedTab] = useState("General details");
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let getData = async () => {
      try {
        const res = await api.get("/restaurant/orders");
        if ((res.status = 200)) {
          setRestaurants(res.data.restaurants);
          setOrders(res.data.orders);
          setLoading(false);
        } else {
          toastMessage(res.data.message || "Something went wrong", "error");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <LoaderSpinner style={{ minHeight: "80vh" }} spinnerScale={0.5} />;
  }
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
            <Generaldetails restaurants={restaurants} />
          ) : (
            <OrderDetails orders={orders} />
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
