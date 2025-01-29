import React, { useState } from "react";
import UserDetailspic from "../../assets/heropic.png";
import Button from "../button/Button";
import AddAmountModal from "../UI/Modals/AddAmountModal";

function UserDetails({ user }) {
  const [open, setopen] = useState(false);
  return (
    <>
      {open && <AddAmountModal openModal={open} setOpenModal={setopen} />}
      <div className="flex justify-between bg-[#EDF2F7] px-5 py-6 items-center rounded-md">
        <div className="flex justify-start items-center gap-5">
          <div className="">
            <img
              src={user.image}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className=" space-y-2">
            <h1 className="text-secondary text-2xl font-bold">
              {user.firstName + " " + user.lastName}
            </h1>
            <p>{user.email}</p>
            <p>{user.mobileNumber}</p>
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
