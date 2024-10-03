import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../pages/main";
import { User } from "../../pages/user";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
]);
