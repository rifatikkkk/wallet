import React from "react";

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
