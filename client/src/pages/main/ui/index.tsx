import { Header } from "../../../widgets/ui/header";
import { Layout } from "../../../shared/ui/layout";
import { Landing } from "../../../widgets/ui/landing";
import { Action } from "../../../widgets/ui/action";

export const Main = () => {
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
