import { Planet } from "../planet";
import { InfoUser } from "../infoUser";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/services/userApi";

export const Personal = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetUserByIdQuery(id ?? "");

  return (
    <div className="relative text-white font-bebas pt-24">
      <div className="flex flex-col gap-12">
        <h2 className="text-5xl">Personal Data</h2>
        {data && (
          <InfoUser
            name={data?.username}
            email={data?.email}
            wallet={data?.address}
          />
        )}
      </div>

      <div className="absolute right-[-266px] top-[32px]">
        <Planet />
      </div>
    </div>
  );
};
