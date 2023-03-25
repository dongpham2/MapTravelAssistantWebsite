import config from "../config";
import Accounts from "../pages/public/Accounts/Accounts";
import Home from "../pages/public/Home/Home";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
];

export const privateRoutes = [];
