import React from "react";

const PaginationRow = () => {
  return (
    <div className="flex justify-between  p-8 items-center  text-[#666666] font-normal">
      <div className="flex justify-center items-center gap-4">
        <div>Showing off</div>
        <div>
          <label htmlFor=""></label>
          <select name="25 " id="" className="rounded-lg h-10 cursor-pointer">
            <option value="25">25</option>{" "}
          </select>{" "}
        </div>
        <div>items per page </div>
      </div>
      <div className="flex justify-start  gap-5 cursor-pointer">
        <div className="border-2 border-[#666666] rounded-lg ">
          <button className="px-3">1</button>
        </div>
        <div>
          <button>2</button>
        </div>
        <div>Next </div>
        <div>End</div>
      </div>
    </div>
  );
};

export default PaginationRow;
