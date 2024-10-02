import React from "react";

type Props = {
  name: string;
  email: string;
};

export const InfoUser: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl uppercase">Name</p>
        <p className="text-orange text-[32px] uppercase leading-tight">
          {name}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-2xl uppercase">Email</p>
        <p className="text-orange text-[32px] uppercase">{email}</p>
      </div>
    </div>
  );
};
