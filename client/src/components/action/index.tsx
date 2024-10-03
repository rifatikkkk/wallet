import React from "react";
import { Text } from "../text";
import { Title } from "../title";
import { useGetAllUsersQuery } from "../../app/services/userApi";
import { selectCurrent, selectUsers } from "../../features/user/userSlice";
import { InfoUser } from "../infoUser";
import { AddToList } from "../../features/user/addToList";
import { UsersList } from "../usersList";
import { FormData } from "../formData";
import { useAppSelector } from "../../app/hooks";

const Action = () => {
  const current = useAppSelector(selectCurrent);
  const usersList = useAppSelector(selectUsers);
  const { data = usersList } = useGetAllUsersQuery(undefined, {
    skip: Boolean(usersList),
  });

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
          <FormData />
        )}
      </div>

      {current?.address && current.email && current.username && (
        <div className="flex flex-col gap-9 mr-[58.75px] min-w-[698px]">
          <Title color="text-white">
            Participation listing (enable only for participants)
          </Title>
          <div
            className="table-card w-full overflow-x-auto pr-[28.25px] 
        "
          >
            {usersList ? <UsersList users={usersList} /> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Action;
