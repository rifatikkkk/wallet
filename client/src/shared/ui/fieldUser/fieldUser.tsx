import React from "react";

type Props = {
  field: string;
  content: string;
};

export const FieldUser: React.FC<Props> = ({ field, content }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-white text-2xl uppercase">{field}</p>
      <p className="text-orange text-[32px] uppercase leading-tight">
        {content}
      </p>
    </div>
  );
};
