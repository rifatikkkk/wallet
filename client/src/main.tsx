import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/main";
import { User } from "./pages/user";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
