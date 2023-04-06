import config from "../config";
import FanPage from "../pages/private/FanPage/FanPage";
import Accounts from "../pages/public/Accounts/Accounts";
// import ForgotPassword from "../pages/public/Accounts/ForgotPassword/ForgotPassword";
import Home from "../pages/public/Home/Home";
// import Chat from "../pages/private/Chat/Chat"
import ChatBox from "../pages/private/Chat/ChatBox"

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
  { path: config.routes.fanpage, component: FanPage },
  { path: config.routes.chat, component: ChatBox},
  // { path: config.routes.chatbox, component: ChatBox},
  // {
  //   path: config.routes.ForgotPassword,
  //   component: ForgotPassword,
  //   layout: null,
  // },
];

export const privateRoutes = [];
