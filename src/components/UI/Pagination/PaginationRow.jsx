import React from "react";
import { toastMessage } from "../../../components/UI/Toast/toastMessage";
const PaginationRow = ({
  dataPerPage,
  page,
  setPage,
  setDataPerPage,
  total,
  setPrevPages,
  prevPages,
  data,
  endMessage,
}) => {
  return (
    <div className="flex justify-between  p-8 items-center  text-[#666666] font-normal">
      <div className="flex justify-center items-center gap-4">
        <div>Showing off</div>
        <div>
          <label htmlFor=""></label>
          <select
            onChange={(e) => {
              setDataPerPage(e.target.value);
              setPage(1);
              setPrevPages({});
            }}
            value={dataPerPage}
            className="rounded-lg h-10 cursor-pointer"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
          </select>
        </div>
        <div>items per page </div>
      </div>
      <div className="flex justify-start  gap-5 cursor-pointer">
        {page > 1 && (
          <div>
            <button
              onClick={() => {
                setPage(page - 1);
                setPrevPages({
                  ...prevPages,
                  [page]: [data],
                });
              }}
            >
              {page - 1}
            </button>
          </div>
        )}
        <div className="border-2 border-[#666666] rounded-lg ">
          <button className="px-3">{page}</button>
        </div>
        <div>
          <button
            onClick={() => {
              if (page == total) {
                toastMessage(endMessage, "error");
                return;
              }
              setPage(page + 1);
              setPrevPages({
                ...prevPages,
                [page]: [data],
              });
            }}
          >
            {page + 1}
          </button>
        </div>{" "}
        <div
          onClick={() => {
            if (page == total) {
              toastMessage(endMessage, "error");
              return;
            }
            setPage(page + 1);
            setPrevPages({
              ...prevPages,
              [page]: [data],
            });
          }}
        >
          Next
        </div>
        <div
          onClick={() => {
            setPage(1);
            setPrevPages({
              ...prevPages,
              [page]: [data],
            });
          }}
        >
          Start
        </div>
        {/* 4240176119133 */}
        <div
          onClick={() => {
            setPage(total);
            setPrevPages({
              ...prevPages,
              [page]: [data],
            });
          }}
        >
          End
        </div>
      </div>
    </div>
  );
};

export default PaginationRow;
