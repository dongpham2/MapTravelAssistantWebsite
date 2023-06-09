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
import UsersManage from "src/pages/private/Admin/UsersManage";
import Notice from "src/pages/private/Admin/Notice/Notice";
import Statitical from "src/pages/private/Admin/Statitical/Statitical";
import SettingAdmin from "src/pages/private/Admin/SettingAdmin/SettingAdmin";
import Locations from "src/pages/private/Admin/Locations/Locations";

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
  // {
  //   path: config.routes.ForgotPassword,
  //   component: ForgotPassword,
  //   layout: null,
  // },

  {
    path: config.routes.changePassword,
    component: ChangePassword,
    layout: SettingLayout,
  },
  {
    path: config.routes.createFanpage,
    component: CreateFanpage,
    layout: SettingLayout,
  },
];

export const privateRoutes = [
  { path: config.routes.profile, component: Profile, layout: SettingLayout },
  { path: config.routes.fanpage, component: FanPage, layout: FanpageLayout },
  { path: config.routes.posts, component: Posts, layout: FanpageLayout },
  { path: config.routes.photos, component: Photos, layout: FanpageLayout },
  { path: config.routes.videos, component: VideosPage, layout: FanpageLayout },
  { path: config.routes.more, component: More, layout: FanpageLayout },

  { path: config.routes.notice, component: Notice, layout: SidebarLayout },
  {
    path: config.routes.notification,
    component: Notification,
    layout: SettingLayout,
  },
];

export const adminRouter = [
  {
    path: config.routes.admin,
    component: UsersManage,
    layout: SidebarLayout,
  },
  {
    path: config.routes.location,
    component: Locations,
    layout: SidebarLayout,
  },
  {
    path: config.routes.statitic,
    component: Statitical,
    layout: SidebarLayout,
  },
  {
    path: config.routes.settingAdmin,
    component: SettingAdmin,
    layout: SidebarLayout,
  },
];
