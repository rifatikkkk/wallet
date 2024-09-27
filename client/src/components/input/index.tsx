import React from "react";

type Props = {
  type?: "text" | "email";
  placeholder?: string;
};

export const Input: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className=" bg-transparent rounded-[30px] border-[1px] border-white px-[18px] py-3 font-avenir text-white text-sm"
      placeholder={placeholder}
    />
  );
};
