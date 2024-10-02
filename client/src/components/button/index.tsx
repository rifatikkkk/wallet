import React, { useState } from "react";
import { useSyncProviders } from "../../hooks/useSyncProviders";
import { selectAddress, setCurrent } from "../../features/user/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
};

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={`bg-orange font-bebas self-start px-6 py-2.5 text-white uppercase rounded-[30px] text-lg tracking-wide ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
