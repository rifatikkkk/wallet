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
  ref?: React.LegacyRef<HTMLButtonElement> | undefined;
};

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  className,
  ref,
}) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`bg-orange font-bebas self-start px-6 py-2.5 text-white uppercase rounded-[30px] text-lg tracking-wide ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
