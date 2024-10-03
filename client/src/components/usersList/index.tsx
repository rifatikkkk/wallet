import React from "react";
import { User } from "../../app/types";
import { useNavigate } from "react-router-dom";
import { DeleteFromList } from "../../features/user/deleteFromList";

type Props = {
  users: User[];
};

export const UsersList: React.FC<Props> = ({ users }) => {
  const navigate = useNavigate();

  const isExistCurrent = () => {
    if (users) {
      const isExist = users.some((user) => String(user.id) === "my");
      return isExist;
    }
    return false;
  };

  return (
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
        {users?.map((user) => {
          return (
            <tr
              key={user.id}
              className={
                "border-b-1 border-white cursor-pointer " +
                (String(user.id) === "my" ? "text-orange" : "text-white")
              }
              onClick={() =>
                String(user.id) !== "my" ? navigate(`/user/${user.id}`) : false
              }
            >
              <td className="py-4 pr-4 ">
                <p>{user.username}</p>
              </td>
              <td className="py-4 pr-4">
                <p>{user.email}</p>
              </td>
              <td className="py-4 max-w-[195px]">
                {isExistCurrent() ? (
                  String(user.id) === "my" ? (
                    <div className="flex flex-row gap-4 items-center">
                      <p className="truncate">{user.address}</p>
                      <DeleteFromList user={user} />
                    </div>
                  ) : (
                    <p className="truncate pr-7">{user.address}</p>
                  )
                ) : (
                  <p className="truncate">{user.address}</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
