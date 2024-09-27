import React from "react";

type Props = {
  color: string;
  children: string;
};

export const Title: React.FC<Props> = ({ color, children }) => {
  return (
    <h3 className={`uppercase text-4xl break-words ${color}`}>{children}</h3>
  );
};
