import React from "react";
import IconSearch from "../../assets/IconSearch.png";

function Search() {
  return (
    <div className="flex justify-start items-center gap-2 border-2 px-5 py-1 rounded-full">
      <img src={IconSearch} alt="serch" className="h-5 " />
      <input
        type="text"
        placeholder="Search... "
        className="border-none focus:outline-none bg-transparent focus:ring-0"
      />
    </div>
  );
}
export default Search;
