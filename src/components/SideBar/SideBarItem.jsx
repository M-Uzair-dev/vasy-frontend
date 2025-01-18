import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { DashboardIcon } from "../UI/Icons";
import { HiArrowNarrowRight } from "react-icons/hi";
import useLocalUser from "../../hooks/user/useLocalUser";

const SideBarItem = ({
  title = "Some Title",
  Icon = DashboardIcon,
  link = "",
  subRoutes,
  usersAllowed,
}) => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [showSubRoutes, setshowSubRoutes] = useState(false);
  const [selected, setselected] = useState(false);
  const user = useLocalUser();
  useEffect(() => {
    setselected(false);
    setshowSubRoutes(false);
    // Matching Only Slash ROute
    if (link === "/" && pathname === "/") {
      return setselected(true);
    }
    // Matching routes without slash and not have sub routes
    if (link !== "/" && pathname !== "/") {
      if (pathname === link) {
        return setselected(true);
      }
    }
    // Handle Specific Sub Route in the Array
    const subRouteFound = subRoutes?.find((item) => item.link === pathname);
    // Verifying the current pathName in founded SUbroutes
    if (pathname === subRouteFound?.link) {
      setshowSubRoutes(true);

      return setselected(true);
    }
  }, [pathname]);
  const handleClick = () => {
    if (subRoutes) {
      const subRoutesAccess = subRoutes?.filter((i) =>
        i?.usersAllowed?.includes(user)
      );
      setshowSubRoutes(true);
      return nav(subRoutesAccess?.[0]?.link);
    }
    nav(link);
  };
  const sideBarShow = usersAllowed?.find((i) => user === i);

  if (!sideBarShow) {
    return <></>;
  }
  const subRoutesAccess =
    subRoutes?.filter((i) => i.usersAllowed.includes(user))?.length > 1;

  return (
    <>
      <div
        onClick={handleClick}
        className={`flex w-[90%] cursor-pointer ${
          selected ? "bg-main" : "bg-transparent"
        }  rounded-[14px]  px-4 py-3 items-center justify-between text-white`}
      >
        <div className="flex justify-center items-center gap-4">
          <Icon color={selected ? "white" : "#0D062D"} />
          <span
            className={`${
              selected ? "text-white" : "text-secondary"
            } font-medium text-base`}
          >
            {title}
          </span>
        </div>
        <div>
          <HiArrowNarrowRight color="white" className="w-5 h-5 scale-110" />
        </div>
      </div>
      {showSubRoutes && subRoutesAccess && (
        <ul
          className=" list-disc list-inside flex flex-col gap-6 justify-center items-center
          transition-opacity duration-300 ease-in-out"
        >
          {subRoutes?.map((item, index) => {
            return <ListItem item={item} key={index} />;
          })}
        </ul>
      )}
    </>
  );
};

export default SideBarItem;
const ListItem = ({ item }) => {
  const user = useLocalUser();
  const { pathname } = useLocation();
  const nav = useNavigate();
  const selected = item?.link === pathname;
  const allowedSubRooute = item.usersAllowed?.find((i) => i === user);
  if (!allowedSubRooute) {
    return <></>;
  }
  return (
    <li
      className={`text-base ${
        selected ? "text-main" : "text-secondary"
      }  cursor-pointer hover:scale-105  w-full pl-10 font-normal 
        transition-all duration-200  ease-in-out`}
      onClick={() => nav(item.link)}
    >
      {item.title}
    </li>
  );
};
