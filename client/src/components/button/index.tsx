import React, { useState } from "react";
import { useSyncProviders } from "../../hooks/useSyncProviders";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>();
  const [userAccount, setUserAccount] = useState<string>("");
  const providers = useSyncProviders();

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      });

      setSelectedWallet(providerWithInfo);
      setUserAccount(accounts?.[0]);
      alert(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    providers.length > 0
      ? providers.map((provider: EIP6963ProviderDetail) =>
          handleConnect(provider)
        )
      : alert("you need add a tool metamask");
  };

  return (
    <button
      className="bg-orange font-bebas self-start px-6 py-2.5 text-white uppercase rounded-[30px] text-lg tracking-wide"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
