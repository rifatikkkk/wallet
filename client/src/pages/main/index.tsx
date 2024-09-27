// import React from "react";
import { Header } from "../../components/header";
// import Container from "../../components/container";
import { Layout } from "../../components/layout";
import { Landing } from "../../components/landing";
import Action from "../../components/action";

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
