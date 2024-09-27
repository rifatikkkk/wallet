import React from "react";
import { Button } from "../button";

export const Header = () => {
  return (
    <div className="w-full flex justify-between py-[14px] bg-background font-bebas">
      <div className="bg-gray px-[86px] py-3 border-dashed border-[1px] border-lightGray text-white font-normal text-lg uppercase">
        logo
      </div>
      <Button>connect metamask</Button>
    </div>
  );
};
