import React from "react";
import { ConnectWallet } from "../../features/user/connectWallet";
import { useSelector } from "react-redux";
import { selectCurrent } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const current = useSelector(selectCurrent);
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between py-[14px] bg-background font-bebas items-center">
      <div
        className="bg-gray px-[86px] py-3 border-dashed border-[1px] border-lightGray text-white font-normal text-lg uppercase cursor-pointer"
        onClick={() => navigate("/")}
      >
        logo
      </div>
      {!current?.address ? (
        <ConnectWallet />
      ) : (
        <p className="text-orange text-lg">{current.address}</p>
      )}
    </div>
  );
};
