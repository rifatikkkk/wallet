import { Header } from "../../../widgets/ui/header";
import { Layout } from "../../../shared/ui/layout";
import { Landing } from "../../../widgets/ui/landing";
import { Action } from "../../../widgets/ui/action";
import { useAppDispatch } from "../../../app/hooks";
import { initial } from "../../../entities/user/slice/userSlice";

export const Main = () => {
  // Without update state when update Main page
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
