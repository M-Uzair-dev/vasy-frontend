import React from "react";
import Walletlist from "../components/TableforUsers/Walletlist";
import Hero from "../components/HeroforUsers/UserDetails";

function Wallettransaction() {
  return (
    <div>
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
          <Walletlist />
        </div>
      </div>
    </div>
  );
}

export default Wallettransaction;
