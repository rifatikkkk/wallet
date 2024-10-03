import React from "react";

type Props = {
  children: React.ReactElement[] | React.ReactElement;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-16 bg-background min-h-screen h-auto flex flex-col overflow-hidden">
      {children}
    </div>
  );
};
