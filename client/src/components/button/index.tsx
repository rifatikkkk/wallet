import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="bg-orange font-bebas self-start px-6 py-2.5 text-white uppercase rounded-[30px] text-lg tracking-wide">
      {children}
    </button>
  );
};
