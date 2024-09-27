import React from "react";

type Props = {
  children: React.ReactElement[] | React.ReactElement;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="flex h-full ">{children}</div>;
};

export default Container;
