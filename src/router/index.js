import config from "../config";
import FanPage from "../pages/private/FanPage/FanPage";
import Profile from "../pages/private/Profile/Profile";
import Accounts from "../pages/public/Accounts/Accounts";
// import ForgotPassword from "../pages/public/Accounts/ForgotPassword/ForgotPassword";
import Home from "../pages/public/Home/Home";
import Photos from "../pages/private/FanPage/components/PageInFanpage/components/Photos/Photos";
import VideosPage from "../pages/private/FanPage/components/PageInFanpage/components/VideosPage/VideosPage";
import Posts from "../pages/private/FanPage/components/PageInFanpage/components/Posts/Posts";
import More from "../pages/private/FanPage/components/PageInFanpage/components/More/More";
import FanpageLayout from "../layout/FanpageLayout";
import SettingLayout from "src/layout/SettingLayout";
import CreateFanpage from "src/pages/private/Profile/Setting/CreateFanpage/CreateFanpage";
import Notification from "src/pages/private/Profile/Setting/Notification/Notification";
import ChangePassword from "src/pages/private/Profile/Setting/ChangePassword/ChangePassword";
import admin from "src/pages/private/Admin";
import SidebarLayout from "src/layout/SidebarLayout";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
  {
    path: config.routes.notification,
    component: Notification,
    layout: SettingLayout,
  },
  {
    path: config.routes.changePassword,
    component: ChangePassword,
    layout: SettingLayout,
  },

  // {
  //   path: config.routes.ForgotPassword,
  //   component: ForgotPassword,
  //   layout: null,
  // },
  { path: config.routes.profile, component: Profile, layout: SettingLayout },
  {
    path: config.routes.createFanpage,
    component: CreateFanpage,
    layout: SettingLayout,
  },
  { path: config.routes.fanpage, component: FanPage, layout: FanpageLayout },
  { path: config.routes.posts, component: Posts, layout: FanpageLayout },
  { path: config.routes.photos, component: Photos, layout: FanpageLayout },
  { path: config.routes.videos, component: VideosPage, layout: FanpageLayout },
  { path: config.routes.more, component: More, layout: FanpageLayout },
  { path: config.routes.admin, component: admin, layout: SidebarLayout },
];

export const privateRoutes = [];

export const ownerRoutes = [];
