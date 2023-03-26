import config from "../config";
import Accounts from "../pages/public/Accounts/Accounts";
// import ForgotPassword from "../pages/public/Accounts/ForgotPassword/ForgotPassword";
import Home from "../pages/public/Home/Home";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
  // {
  //   path: config.routes.ForgotPassword,
  //   component: ForgotPassword,
  //   layout: null,
  // },
];

export const privateRoutes = [];
