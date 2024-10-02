import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  name: string;
  type?: "text" | "email";
  placeholder?: string;
  control: Control<any>;
};

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  name,
  control,
}) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <input
      id={name}
      onChange={field.onChange}
      type={type}
      className=" bg-transparent rounded-[30px] border-[1px] border-lightGray placeholder-gray px-[18px] py-3 font-avenir text-white text-sm"
      placeholder={placeholder}
    />
  );
};
