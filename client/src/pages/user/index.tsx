import React from "react";
import { Layout } from "../../components/layout";
import { Header } from "../../components/header";
import { Personal } from "../../components/personal";

export const User = () => {
  return (
    <>
      <Layout>
        <Header />
        <Personal />
      </Layout>
    </>
  );
};
