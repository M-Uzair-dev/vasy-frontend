import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ViewUser from "./pages/ViewUser";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import Vehicle from "./pages/Vehicle";
import Rules from "./pages/Rules";
import Payout from "./pages/Payout";
import EditUser from "./pages/EditUser";
import ViewUserDetails from "./pages/ViewUserDetails";
import RestaurantHero from "./components/Restaurant component/RestaurantHero";
import Restaurantuseredit from "./components/Restaurantdetails/Restaurantuseredit";
import Orderdetailshero from "./components/Restaurantdetails/Orderdetailshero";
import Restaurants from "./pages/Restaurants";
import Rides from "./pages/Rides";
import ViewDriver from "./pages/ViewDriver";
import EditDriversdetails from "./pages/EditDriversdetails";
import RestaurantCategoriescreate from "./pages/RestaurantCategoriescreate";
import Userrep from "./pages/Userrep";
import Ridereports from "./pages/Ridereports";
import Transactionrep from "./pages/Transactionrep";
import EditVehicledetails from "./pages/EditVehicledetails";
import RestaurantCategoriesview from "./pages/RestaurantCategoriesview";
import AddVehicleform from "./pages/AddVehicleform";
import RulesEditDriver from "./pages/RulesEditDriver";
import RulesCreateDriver from "./pages/RulesCreateDriver";
import RulesDeleteddriver from "./pages/RulesDeleteddriver";
import Taxes from "./pages/Taxes";
import Zones from "./pages/Zones";
import Notification from "./pages/Notification";
import Services from "./pages/Services";
import Support from "./pages/Support";
import Setting from "./pages/Setting";
import Addtaxdetail from "./components/TableforUsers/Addtaxdetail";
import Edittaxdetail from "./components/TableforUsers/Edittaxdetail";
import ZonesEdit from "./pages/ZonesEdit";
import ZonesNew from "./pages/ZonesNew";
import Notificationadd from "./pages/Notificationadd";
import NotificationEdit from "./pages/NotificationEdit";
import SettingCommission from "./pages/SettingCommission";
import Settingsadmin from "./pages/Settingsadmin";
import Langauges from "./pages/Langauges";
import ServicesRides from "./pages/ServicesRides";
import RideOrders from "./pages/RideOrders";
import RidesservicesEdit from "./pages/RidesservicesEdit";
import RidesservicesCreate from "./pages/RideServicesCreate";
import RideOrderview from "./pages/RideOrderview";
import Driverrep from "./pages/Driverrep";
import ApprovedDriver from "./pages/ApprovedDriver";
import PendingDrivers from "./pages/PendingDrivers";
import SuperAdminlogin from "./pages/SuperAdminlogin";
import LoginAdmin from "./pages/LoginAdmin";
import LoginForget from "./pages/LoginForget";
import LoginRecovery from "./pages/LoginRecovery";
import LoginPasswordSuccess from "./pages/LoginPasswordSuccess";
import Restaurantlogin from "./pages/Restaurantlogin";
import AgentLogin from "./pages/AgentLogin";
import RouteProtector from "./components/UI/RouteProtector";
import RestaurantCategory from "./pages/RestaurantCategory";
import RestaurantCategoriesedit from "./pages/RestaurantCategoriesedit";
import RestaurantSettings from "./pages/RestaurantSettings";
import RestaurantloginPayout from "./pages/RestaurantloginPayout";
import Restaurantloginpayoutdetails from "./pages/Restaurantloginpayoutdetails";
import Restaurantloginpayoutnewrequest from "./pages/Restaurantloginpayoutnewrequest";
import UpdateValues from "./UpdateValues";
const appRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    userType: ["super-admin", "admin", "resturant"],
  },
  { path: "/users", element: <Users />, userType: ["super-admin", "admin"] },
  {
    path: "/users/edit/:userId",
    element: <EditUser />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/users/view/:userId",
    element: <ViewUserDetails />,
    userType: ["super-admin", "admin"],
  },

  {
    path: "/categories",
    element: <RestaurantCategory />,
    userType: ["resturant"],
  },
  {
    path: "/categories/edit/:id",
    element: <RestaurantCategoriesedit />,
    userType: ["resturant"],
  },
  {
    path: "/categories/view/:id",
    element: <RestaurantCategoriesview />,
    userType: ["resturant"],
  },
  {
    path: "/categories/new",
    element: <RestaurantCategoriescreate />,
    userType: ["resturant"],
  },
  {
    path: "/resturants",
    element: <Restaurants />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/resturants/ViewDetails/:id",
    element: <RestaurantHero />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/resturants/Edit/:id",
    element: <Restaurantuseredit />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/resturants/Order/:id",
    element: <Orderdetailshero />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/drivers",
    element: <Drivers />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/drivers/approved",
    element: <ApprovedDriver />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/drivers/pending",
    element: <PendingDrivers />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/drivers/view/:id",
    element: <ViewDriver />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/drivers/edit/:id",
    element: <EditDriversdetails />,
    userType: ["super-admin", "admin"],
  },
  { path: "/rides", element: <Rides />, userType: ["super-admin", "admin"] },
  {
    path: "/rides/services",
    element: <ServicesRides />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rides/order",
    element: <RideOrders />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rides/serviceedit/:id",
    element: <RidesservicesEdit />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rides/servicenew",
    element: <RidesservicesCreate />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rides/Rideview/:id",
    element: <RideOrderview />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/reports",
    element: <Reports />,
    userType: ["super-admin", "admin", "resturant"],
  },
  {
    path: "/reports/user",
    element: <Userrep />,
    userType: ["super-admin", "admin", "resturant"],
  },
  {
    path: "/reports/rider",
    element: <Ridereports />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/reports/driver",
    element: <Driverrep />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/reports/transaction",
    element: <Transactionrep />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/vehicletypes",
    element: <Vehicle />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/vehicletypes/edit/:id",
    element: <EditVehicledetails />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/vehicletypes/add",
    element: <AddVehicleform />,
    userType: ["super-admin", "admin"],
  },
  { path: "/rules", element: <Rules />, userType: ["super-admin", "admin"] },
  {
    path: "/rules/rules",
    element: <Rules />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rules/edit/:id",
    element: <RulesEditDriver />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rules/new",
    element: <RulesCreateDriver />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/rules/del",
    element: <RulesDeleteddriver />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/payoutrequests",
    element: <Payout />,
    userType: ["super-admin"],
  },
  {
    path: "/payoutrequest",
    element: <RestaurantloginPayout />,
    userType: ["resturant"],
  },
  {
    path: "/payoutrequest/details",
    element: <Restaurantloginpayoutdetails />,
    userType: ["resturant"],
  },
  {
    path: "/payoutrequest/newrequest",
    element: <Restaurantloginpayoutnewrequest />,
    userType: ["resturant"],
  },
  { path: "/taxes", element: <Taxes />, userType: ["super-admin", "admin"] },
  {
    path: "/taxes/edit/:id",
    element: <Edittaxdetail />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/taxes/new",
    element: <Addtaxdetail />,
    userType: ["super-admin", "admin"],
  },
  { path: "/zones", element: <Zones />, userType: ["super-admin", "admin"] },
  {
    path: "/zones/edit/:id",
    element: <ZonesEdit />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/zones/new",
    element: <ZonesNew />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/notification",
    element: <Notification />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/notification/add",
    element: <Notificationadd />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/notification/edit/:id",
    element: <NotificationEdit />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/support/:id",
    element: <Support />,
    userType: ["super-admin", "admin", "agent"],
  },
  {
    path: "/support",
    element: <Support />,
    userType: ["super-admin", "admin", "agent"],
  },
  {
    path: "/services",
    element: <Services />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/settings",
    element: <Setting />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/settings/admincommissions",
    element: <SettingCommission />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/settings/adminsettings",
    element: <Settingsadmin />,
    userType: ["super-admin", "admin"],
  },
  {
    path: "/settings/languages",
    element: <Langauges />,
    userType: ["super-admin", "admin", "resturant"],
  },
  {
    path: "/settings/general",
    element: <RestaurantSettings />,
    userType: ["resturant"],
  },
];

function App() {
  console.log(import.meta.env.MODE);
  return (
    <Routes>
      <Route path="/" element={<UpdateValues />}>
        <Route path="/" element={<RootLayout />}>
          <Route path="*" element={<Navigate to={"/"} />} />
          {appRoutes.map(({ path, element, userType }, index) => (
            <Route
              key={index}
              path={path}
              element={<RouteProtector element={element} userType={userType} />}
            />
          ))}{" "}
        </Route>
        <Route path="/superadmin-login" element={<SuperAdminlogin />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/resturant-login" element={<Restaurantlogin />} />
        <Route path="/agent-login" element={<AgentLogin />} />
        <Route path="/forgot-password" element={<LoginForget />} />
        <Route path="/password-success" element={<LoginPasswordSuccess />} />
        <Route path="/password-recover" element={<LoginRecovery />} />
      </Route>
    </Routes>
  );
}

export default App;
