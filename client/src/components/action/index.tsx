import React from "react";
import { Text } from "../text";
import { Input } from "../input";
import { Button } from "../button";
import { Title } from "../title";
import { useGetAllUsersQuery } from "../../app/services/userApi";
import { useForm } from "react-hook-form";
import {
  selectAddress,
  selectCurrent,
  selectUsers,
  setCurrent,
} from "../../features/user/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { InfoUser } from "../infoUser";
import { ConnectWallet } from "../../features/user/connectWallet";
import { useNavigate } from "react-router-dom";
import { AddToList } from "../../features/user/addToList";

type MyUser = {
  username: string;
  email: string;
  id: string;
};

const Action = () => {
  const navigate = useNavigate();
  const wallet = useSelector(selectAddress);
  const current = useSelector(selectCurrent);
  const usersList = useSelector(selectUsers);
  const { data = usersList } = useGetAllUsersQuery(undefined, {
    skip: Boolean(usersList),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyUser>({
    mode: "onChange",
    defaultValues: {
      id: "my",
      username: "",
      email: "",
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (data: MyUser) => {
    try {
      if (wallet) dispatch(setCurrent({ ...data, address: wallet as string }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-12 pb-[86px] flex flex-row justify-between h-screen font-bebas">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-[18px]">
          <Title color="text-orange">Beta Test Registration</Title>
          <Text />
        </div>

        {current?.address !== undefined &&
        current.email !== undefined &&
        current.username !== undefined ? (
          <div className="flex flex-col gap-7">
            <InfoUser name={current.username} email={current.email} />

            <AddToList />
          </div>
        ) : (
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-2">
                <h4 className="text-white text-2xl uppercase">Name</h4>
                <Input
                  control={control}
                  name="username"
                  type="text"
                  placeholder="We will display your name in participation list"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-white text-2xl uppercase">Email</h4>
                <Input
                  control={control}
                  name="email"
                  type="email"
                  placeholder="We will display your name in participation list"
                />
              </div>
            </div>

            {current?.address === undefined ? (
              <div className="flex flex-col gap-3">
                <ConnectWallet />

                <p className="text-sm text-white uppercase">
                  You need to connect wallet before registration
                </p>
              </div>
            ) : (
              <Button type="submit">Get Early Access</Button>
            )}
          </form>
        )}
      </div>

      <div className="flex flex-col gap-9 mr-[58.75px]">
        <Title color="text-white">
          Participation listing (enable only for participants)
        </Title>
        <div
          className="table-card w-full overflow-x-auto pr-[28.25px] 
        "
        >
          {usersList ? (
            <table className="text-left table-auto min-w-full text-white overflow-x-hidden">
              <thead className="font-bebas uppercase">
                <tr className="border-b-1 border-white">
                  <th className="pb-4 px-0">
                    <h4 className="text-white text-2xl font-normal">Name</h4>
                  </th>
                  <th className="pb-4 px-0">
                    <h4 className="text-white text-2xl font-normal">Email</h4>
                  </th>
                  <th className="pb-4 px-0">
                    <h4 className="text-white text-2xl font-normal">Wallet</h4>
                  </th>
                </tr>
              </thead>

              <tbody className="font-avenir text-sm w-full">
                {usersList?.map((user) => {
                  return (
                    <tr
                      key={user.id}
                      className={
                        "border-b-1 border-white cursor-pointer " +
                        (String(user.id) === "my"
                          ? "text-orange"
                          : "text-white")
                      }
                      onClick={() =>
                        String(user.id) !== "my"
                          ? navigate(`/user/${user.id}`)
                          : false
                      }
                    >
                      <td className="py-4 pr-4 ">
                        <p>{user.username}</p>
                      </td>
                      <td className="py-4 pr-4">
                        <p>{user.email}</p>
                      </td>
                      <td className="py-4 max-w-[195px] pr-4">
                        <p className="truncate">{user.address}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Action;
