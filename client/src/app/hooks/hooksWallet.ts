import { useSyncExternalStore } from "react";
import { storeWallet } from "../stores";

export const useSyncProviders = () =>
  useSyncExternalStore(
    storeWallet.subscribe,
    storeWallet.value,
    storeWallet.value
  );
