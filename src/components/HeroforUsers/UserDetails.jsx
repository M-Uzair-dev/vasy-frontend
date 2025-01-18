import React, { useState } from "react";
import UserDetailspic from "../../assets/heropic.png";
import Button from "../button/Button";
import AddAmountModal from "../UI/Modals/AddAmountModal";

function UserDetails() {
  const [open, setopen] = useState(false);
  return (
    <>
      {open && <AddAmountModal openModal={open} setOpenModal={setopen} />}
      <div className="flex justify-between bg-[#EDF2F7] px-5 py-6 items-center rounded-md">
        <div className="flex justify-start items-center gap-5">
          <div className="">
            <img src={UserDetailspic} alt="" />
          </div>
          <div className=" space-y-2">
            <h1 className="text-secondary text-2xl font-bold">kumawat mamta</h1>
            <p>kumawatmamta@gmail.com</p>
            <p>+92345678967</p>
          </div>
        </div>
        <div>
          <h1 className="text-secondary pb-2 text-end text-2xl font-bold">
            $450.00
          </h1>
          <Button
            onclick={() => setopen(true)}
            title="Add Amount"
            className="px-7"
          />
        </div>
      </div>
    </>
  );
}

export default UserDetails;
