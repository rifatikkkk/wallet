import { useEffect } from "react";
import { Layout } from "../../../shared/ui/layout";
import { Header } from "../../../widgets/ui/header";
import { Personal } from "../../../widgets/ui/personal";
import { useAppDispatch } from "../../../app/hooks";
import { resetUser } from "../../../entities/user/slice/userSlice";

export const User = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const beforeUnload = () => {
      dispatch(resetUser());
    };

    window.addEventListener("beforeunload", beforeUnload);
    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
    };
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <Personal />
      </Layout>
    </>
  );
};
