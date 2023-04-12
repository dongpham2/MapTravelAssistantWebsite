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

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.accounts, component: Accounts, layout: null },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.fanpage, component: FanPage, layout: FanpageLayout },
  { path: config.routes.posts, component: Posts, layout: FanpageLayout },
  { path: config.routes.photos, component: Photos, layout: FanpageLayout },
  { path: config.routes.videos, component: VideosPage, layout: FanpageLayout },
  { path: config.routes.more, component: More, layout: FanpageLayout },
  // {
  //   path: config.routes.ForgotPassword,
  //   component: ForgotPassword,
  //   layout: null,
  // },
];

export const privateRoutes = [];
