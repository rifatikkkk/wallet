import React from "react";
import { Planet } from "../planet";
import { InfoUser } from "../infoUser";

export const Personal = () => {
  return (
    <div className="relative text-white font-bebas pt-24">
      <div className="flex flex-col gap-12">
        <h2 className="text-5xl">Personal Data</h2>
        <InfoUser
          name="Rojer Waters"
          email="Charadeyouare@gmail.com"
          wallet="0xe02354bdbb79b935407488c4276ff7898802e574"
        />
      </div>

      <div className="absolute right-[-266px] top-[32px]">
        <Planet />
      </div>
    </div>
  );
};
