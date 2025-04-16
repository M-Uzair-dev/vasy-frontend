import {
  Cars,
  DashboardIcon,
  Notification,
  Payment,
  Reports,
  ResturantIcon,
  riders1,
  riders2,
  riders3,
  rides1,
  rides2,
  rides3,
  Rules,
  sales1,
  sales2,
  sales3,
  Support,
  Taxes,
  UserIcon,
  Zones,
  CategoryIcon,
} from "../components/UI/Icons";
export const sidebarData = [
  {
    title: "Dashboard",
    link: "/",
    Icon: DashboardIcon,
    usersAllowed: ["admin", "resturant", "super-admin"],
  },
  {
    title: "Categories",
    link: "/categories",
    Icon: CategoryIcon,
    usersAllowed: ["resturant"],
  },
  {
    title: "Users",
    link: "/users",
    Icon: UserIcon,
    usersAllowed: ["admin", "super-admin"],
  },

  {
    title: "Resturants",
    link: "/resturants",
    Icon: ResturantIcon,
    usersAllowed: ["admin", "super-admin"],
  },

  {
    title: "Drivers",
    Icon: Cars,
    usersAllowed: ["admin", "super-admin"],
    subRoutes: [
      {
        title: "All Driver",
        link: "/drivers",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Approved Drivers",
        link: "/drivers/approved",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Pending Drivers",
        link: "/drivers/pending",
        usersAllowed: ["admin", "super-admin"],
      },
    ],
  },
  {
    title: "Rides",
    Icon: Zones,
    usersAllowed: ["admin", "super-admin"],
    subRoutes: [
      {
        title: "Services",
        link: "/rides/services",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Ride Orders",
        link: "/rides/order",
        usersAllowed: ["admin", "super-admin"],
      },
    ],
  },
  {
    title: "Reports",
    Icon: Reports,
    usersAllowed: ["admin", "super-admin"],
    subRoutes: [
      {
        title: "User Reports",
        link: "/reports/user",
        usersAllowed: ["admin", "resturant", "super-admin"],
      },
      {
        title: "Diver Reports",
        link: "/reports/driver",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Ride Reports",
        link: "/reports/rider",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Transaction Reports",
        link: "/reports/Transaction",
        usersAllowed: ["admin", "super-admin"],
      },
    ],
  },
  {
    title: "Vehicle Types",
    link: "/vehicletypes",
    Icon: Cars,
    usersAllowed: ["admin", "super-admin"],
  },

  {
    title: "Rules",
    usersAllowed: ["admin", "super-admin"],
    Icon: Rules,
    subRoutes: [
      {
        title: "Driver Rules",
        link: "/rules/rules",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Deleted Rules",
        link: "/rules/del",
        usersAllowed: ["admin", "super-admin"],
      },
    ],
  },
  {
    title: "Payout Requests",
    usersAllowed: ["super-admin"],
    link: "/payoutrequests",
    Icon: Payment,
  },
  {
    title: "Payout Requests",
    usersAllowed: ["resturant"],
    link: "/payoutrequest",
    Icon: Payment,
  },
  {
    usersAllowed: ["admin", "super-admin"],
    title: "Taxes",
    link: "/taxes",
    Icon: Taxes,
  },
  {
    usersAllowed: ["admin", "super-admin"],
    title: "Zones",
    link: "/zones",
    Icon: Zones,
  },
  {
    usersAllowed: ["admin", "super-admin"],
    title: "Notification",
    link: "/notification",
    Icon: Notification,
  },
  {
    usersAllowed: ["admin", "super-admin", "agent"],
    title: "Support ",
    link: "/support",
    Icon: Support,
  },
  {
    usersAllowed: ["admin", "resturant", "super-admin"],
    title: "Settings ",
    Icon: Support,
    subRoutes: [
      {
        title: "General Setting",
        link: "/settings/general",
        usersAllowed: ["resturant"],
      },
      {
        title: "Admin Commissions",
        link: "/settings/admincommissions",
        usersAllowed: ["admin", "super-admin"],
      },
      {
        title: "Admin settings",
        link: "/settings/adminsettings",
        usersAllowed: ["admin", "super-admin"],
      },
      // {
      //   title: "Langauges ",
      //   link: "/settings/languages",
      //   usersAllowed: ["admin", "super-admin", "resturant"],
      // },
    ],
  },
];
// DASHBOARD CARDS ARRAY DATA
export const Members = [
  {
    heading: "Total Rides",
    amount: "123",
    bottom: "Intercity rides/0",
    image: rides1,
  },
  {
    heading: "Total users",
    amount: "123",
    bottom: "Intercity rides/0",
    image: rides2,
  },
  {
    heading: "Total Drivers",
    amount: "123",
    bottom: "Intercity rides/0",
    image: rides3,
  },
];
export const Riders = [
  {
    heading: "Ride Placed",
    amount: "123",
    bottom: "Intercity rides/0",
    image: riders1,
  },
  {
    heading: "Ride Active",
    amount: "123",
    bottom: "Intercity rides/0",
    image: riders2,
  },
  {
    heading: "Ride Cancelled",
    amount: "123",
    bottom: "-",
    image: riders3,
  },
];
export const Sales = [
  {
    heading: "Total Earnings",
    amount: "$0.00",
    bottom: "-",
    image: sales1,
  },
  {
    heading: "Total Admin commission",
    amount: "$0.00",
    bottom: "-",
    image: sales2,
  },
  {
    heading: "Drivers Payout",
    amount: "$0.00",
    bottom: "-",
    image: sales3,
  },
];

export const Users = [
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
  {
    name: "MAnkabit",
  },
];

export const Riderscontent = [
  {
    Ridestatus: "completed ",
    modeofpayment: "card",
    paymentstatus: "unpaid",
    amount: "$282.00",
  },
  {
    Ridestatus: "notcompleted ",
    modeofpayment: "cash",
    paymentstatus: "paid",
    amount: "$382.00",
  },
  {
    Ridestatus: "completed ",
    modeofpayment: "card",
    paymentstatus: "unpaid",
    amount: "$282.00",
  },
  {
    Ridestatus: "notcompleted ",
    modeofpayment: "cash",
    paymentstatus: "paid",
    amount: "$382.00",
  },
  {
    Ridestatus: "completed ",
    modeofpayment: "card",
    paymentstatus: "unpaid",
    amount: "$282.00",
  },
  {
    Ridestatus: "notcompleted ",
    modeofpayment: "cash",
    paymentstatus: "paid",
    amount: "$382.00",
  },
  {
    Ridestatus: "completed ",
    modeofpayment: "card",
    paymentstatus: "unpaid",
    amount: "$282.00",
  },
  {
    Ridestatus: "notcompleted ",
    modeofpayment: "cash",
    paymentstatus: "paid",
    amount: "$382.00",
  },
];

export const Wallet = [
  {
    id: "000112",
  },
  {
    id: "000112",
  },
  {
    id: "000112",
  },
  {
    id: "000112",
  },
  {
    id: "000112",
  },
  {
    id: "000112",
  },
];

export const Orderdetails = [
  {
    orderstatus: "completed",
  },
  {
    orderstatus: "completed",
  },
  {
    orderstatus: "Placed",
  },
  {
    orderstatus: "Placed",
  },
  {
    orderstatus: "completed",
  },
  {
    orderstatus: "completed",
  },
  {
    orderstatus: "Placed",
  },
  {
    orderstatus: "Placed",
  },
];
export const Generaldetail = [
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
  {
    Email: "manhackt08@gamil.com",
  },
];
