import React from "react";
import { Input } from "../input";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCurrent, setCurrent } from "../../features/user/userSlice";
import { useForm } from "react-hook-form";
import { ConnectWallet } from "../../features/user/connectWallet";
import { Button } from "../button";
import { Notification } from "../notification";

type MyUser = {
  username: string;
  email: string;
  id: string;
};

export const FormData = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrent);

  const { handleSubmit, control } = useForm<MyUser>({
    mode: "onChange",
    defaultValues: {
      id: "my",
      username: "",
      email: "",
    },
  });

  const onSubmit = async (data: MyUser) => {
    try {
      if (data.username === "" || data.email === "") {
        alert("You need fill all field!");
        return;
      }
      if (currentUser?.address)
        dispatch(
          setCurrent({ ...data, address: currentUser.address as string })
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2">
          <p className="text-white text-2xl uppercase">Name</p>
          <Input
            className={
              currentUser?.address
                ? "placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-orange"
                : "border-opacity-50 placeholder-passThrough"
            }
            disabled={currentUser?.address ? false : true}
            control={control}
            name="username"
            type="text"
            placeholder="We will display your name in participation list"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white text-2xl uppercase">Email</p>
          <Input
            className={
              currentUser?.address
                ? "border-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-orange "
                : "border-opacity-50 placeholder-passThrough"
            }
            disabled={currentUser?.address ? false : true}
            control={control}
            name="email"
            type="email"
            placeholder="We will display your email in participation list"
          />
        </div>
      </div>

      {currentUser?.address === undefined ? (
        <div className="flex flex-col gap-3">
          <ConnectWallet />

          <Notification>
            You need to connect wallet before registration
          </Notification>
        </div>
      ) : (
        <Button type="submit">Get Early Access</Button>
      )}
    </form>
  );
};
