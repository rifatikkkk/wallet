import React, { useEffect } from "react";
import { Layout } from "../../components/layout";
import { Header } from "../../components/header";
import { Personal } from "../../components/personal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { resetUser } from "../../features/user/userSlice";

export const User = () => {
  const navigate = useNavigate();
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
