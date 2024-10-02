import React from "react";
import { ConnectWallet } from "../../features/user/connectWallet";
import { useSelector } from "react-redux";
import { selectAddress } from "../../features/user/userSlice";

export const Header = () => {
  const wallet = useSelector(selectAddress);

  return (
    <div className="w-full flex justify-between py-[14px] bg-background font-bebas items-center">
      <div className="bg-gray px-[86px] py-3 border-dashed border-[1px] border-lightGray text-white font-normal text-lg uppercase">
        logo
      </div>
      {!wallet ? (
        <ConnectWallet />
      ) : (
        <p className="text-orange text-lg">{wallet}</p>
      )}
    </div>
  );
};
