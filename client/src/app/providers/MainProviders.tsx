import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, storeRedux } from "../stores";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "../routers";

export const MainProviders = () => {
  return (
    <Provider store={storeRedux}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={AppRouter} />
      </PersistGate>
    </Provider>
  );
};
