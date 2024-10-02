import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { Landing } from "../../components/landing";
import Action from "../../components/action";
import { useAppDispatch } from "../../app/hooks";
import { initial } from "../../features/user/userSlice";

export const Main = () => {
  const dispatch = useAppDispatch();
  dispatch(initial());
  return (
    <>
      <Layout>
        <Header />
        <Landing />
        <Action />
      </Layout>
    </>
  );
};
