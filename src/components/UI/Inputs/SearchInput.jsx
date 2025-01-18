import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchInput({ onchange }) {
  return (
    <div className="flex justify-start items-center border-2 px-3 rounded-xl">
      <IoMdSearch color="gray" className="w-6 h-6" />
      <input
        onChange={onchange}
        type="text"
        placeholder="Search..."
        className="border-none focus:outline-none bg-transparent focus:ring-0"
      />
    </div>
  );
}
export default SearchInput;
