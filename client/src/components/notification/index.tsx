import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Notification: React.FC<Props> = ({ children }) => {
  return <p className="text-sm text-white uppercase">{children}</p>;
};
