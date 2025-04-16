import React, { useState } from "react";
import Search from "../Search/Search";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoBasketballOutline } from "react-icons/io5";
import Logout from "../UI/Modals/Logout";
import LanguageModal from "../UI/Modals/LanguageModal";
const NavBar = () => {
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  return (
    <>
      {open && <Logout openModal={open} setOpenModal={setopen} />}
      {open1 && <LanguageModal openModal={open1} setOpenModal={setopen1} />}
      <div className="flex border-2 border-l-0 py-3 px-6 justify-between items-center w-full">
        {/* <Search /> */}
        <div></div>
        <div className="flex gap-10">
          {/* <div
            onClick={() => setopen1(true)}
            className="flex justify-center cursor-pointer hover:scale-105 duration-200 gap-2 items-center"
          >
            <div className="border-2 border-gray-700/30 rounded-full w-12 h-12 flex justify-center items-center">
              <IoBasketballOutline color="black" className="w-9 h-9" />
            </div>
            <span className="text-base">English</span>
            <MdKeyboardArrowDown
              className="w-5 h-5"
              onClick={() => setopen1(true)}
            />
          </div> */}
          <div
            onClick={() => setopen(true)}
            className="flex items-center gap-3 cursor-pointer hover:scale-105 duration-200"
          >
            <div className="flex flex-col items-end gap-1">
              <span className="text-base font-semibold ">JaydonDias</span>
              <span className="text-sm">Mumkin@gmail.com</span>
            </div>
            <MdKeyboardArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
