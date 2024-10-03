import React from "react";
import { useSyncProviders } from "../../hooks/useSyncProviders";
import { selectCurrent, setCurrent } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button } from "../../components/button";

export const ConnectWallet = () => {
  const current = useAppSelector(selectCurrent);
  const providers = useSyncProviders();
  const dispatch = useAppDispatch();

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      });
      dispatch(setCurrent({ address: accounts?.[0] }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    providers.length > 0 && !current?.address
      ? providers.map((provider: EIP6963ProviderDetail) =>
          handleConnect(provider)
        )
      : alert("You need add a tool metamask!");
  };

  return (
    <Button type="button" onClick={handleClick}>
      connect metamask
    </Button>
  );
};
