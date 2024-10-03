import React, { useEffect } from "react";
import { FieldUser } from "../fieldUser";
import { selectCurrent } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

type Props = {
  name: string;
  email: string;
  wallet: string;
};

export const PersonalData: React.FC<Props> = ({ name, email, wallet }) => {
  const current = useAppSelector(selectCurrent);
  const navigate = useNavigate();

  useEffect(() => {
    if (!current) navigate("/");
  }, []);

  return (
    <div className="flex flex-col gap-[22px]">
      <FieldUser field="name" content={name} />
      <FieldUser field="email" content={email} />
      <FieldUser field="wallet" content={wallet} />
    </div>
  );
};
