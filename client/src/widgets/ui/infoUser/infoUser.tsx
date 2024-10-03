import React from "react";
import { FieldUser } from "../../../shared/ui/fieldUser";

type Props = {
  name: string;
  email: string;
};

export const InfoUser: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <FieldUser field="name" content={name} />
      <FieldUser field="email" content={email} />
    </div>
  );
};
