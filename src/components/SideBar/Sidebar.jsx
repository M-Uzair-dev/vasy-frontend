import React from "react";
import Logo from "../UI/Logo/Logo";
import SideBarItem from "./SideBarItem";
import { sidebarData } from "../../data/routes";

const Sidebar = () => {
  return (
    <aside
      className={`fixed top-0 left-0 border-2 bg-primary w-72 h-screen pl-5 pb-5 pr-3 flex flex-col justify-start gap-5`}
    >
      <div className="pt-6 pb-[24px] border-b-2">
        <Logo />
      </div>

      <div
        id="sidebar-items2"
        className="sidebar-items flex flex-col justify-start overflow-y-scroll  overflow-x-hidden gap-4 transition-all delay-1000  duration-1000 ease-in-out "
      >
        {sidebarData?.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            link={item.link}
            Icon={item.Icon}
            subRoutes={item.subRoutes}
            usersAllowed={item.usersAllowed}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
