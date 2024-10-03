import React from "react";
import { Control, useController } from "react-hook-form";

type Props = {
  name: string;
  type?: "text" | "email";
  placeholder?: string;
  control: Control<any>;
  className?: string;
  disabled?: boolean;
};

export const Input: React.FC<Props> = ({
  type,
  placeholder,
  name,
  control,
  className,
  disabled,
}) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <input
      disabled={disabled}
      id={name}
      onChange={field.onChange}
      type={type}
      className={`bg-transparent rounded-[30px] border-[1px] border-white px-[18px] py-3 font-avenir text-white text-sm focus:placeholder:text-transparent ${className}`}
      placeholder={placeholder}
    />
  );
};
