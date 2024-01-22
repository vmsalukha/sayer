import RoutesForUser from "./RoutesForUser"
import { lazy } from "react";
const Notfoundpage = lazy(() => import("../../pages/Notfoundpage"));


const UserRoutes = RoutesForUser.map((route) => ({
  path: route.path + route.subputh,
  element: route.element,
}));

const notFoundRoute = {
  path: "/*",
  element: <Notfoundpage />
};

export default UserRoutes.concat(notFoundRoute);