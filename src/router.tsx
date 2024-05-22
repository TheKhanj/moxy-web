import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { Host } from "./routes/hosts/host";
import { Login } from "./routes/login/login";
import { SERVICES } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () =>
      SERVICES.account.isLoggedIn() ? (
        <Navigate to="/hosts/0" />
      ) : (
        <Navigate to={`/login?redirectUrl:${encodeURIComponent("/")}`} />
      ),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/hosts/:hostId",
    Component: Host,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
