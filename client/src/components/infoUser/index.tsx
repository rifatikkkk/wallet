import React from "react";

type Props = {
  name: string;
  email: string;
  wallet: string;
};

export const InfoUser: React.FC<Props> = ({ name, email, wallet }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-2 uppercase">
        <p className="text-white text-2xl leading-none">Name</p>
        <p className="text-orange text-[32px] leading-none">{name}</p>
      </div>
      <div className="flex flex-col gap-2 uppercase">
        <p className="text-white text-2xl leading-none">Email</p>
        <p className="text-orange text-[32px] leading-none">{email}</p>
      </div>
      <div className="flex flex-col gap-2 uppercase">
        <p className="text-white text-2xl leading-none">Wallet</p>
        <p className="text-orange text-[32px] leading-none">{wallet}</p>
      </div>
    </div>
  );
};
