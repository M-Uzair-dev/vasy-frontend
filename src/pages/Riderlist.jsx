import React from "react";
import RiderList from "../components/TableforUsers/RiderList";
import Hero from "../components/HeroforUsers/UserDetails";

function Riderlist() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center p-6">
          <h1>View User</h1>
          <input type="text" placeholder="Search" />
        </div>
        <Hero />
        <div className="flex justify-start items-center gap-4 px-3  ">
          <h1>Rider list </h1>
          <h1>Wallet transaction </h1>
        </div>
      </div>

      <div>
        <RiderList />
      </div>
    </div>
  );
}

export default Riderlist;
