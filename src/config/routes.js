const routes = {
  // common
  home: "/",
  accounts: "/accounts",
  forgotPassword: "/forgotPassword",
  // fanpage
  fanpage: "/fanpage/:id",
  photos: "/fanpage/photos",
  videos: "/fanpage/videos",
  more: "/fanpage/more",
  chat: "/chat",
  // setting
  profile: "/setting/profile",
  createFanpage: "/setting/createFanpage",
  changePassword: "/setting/changePassword",
  notification: "/setting/notification",
  // admin
  admin: "/admin/userManage",
  notice: "/admin/notification",
  location: "/admin/settingLocation",
  statitic: "/admin/statitic",
  settingAdmin: "/admin/setting",
  // chatbox:"/chatbox",
};

export default routes;
