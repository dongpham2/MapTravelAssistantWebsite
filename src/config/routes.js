const routes = {
  // common
  home: "/",
  accounts: "/accounts",
  forgotPassword: "/forgotPassword",
  // fanpage
  fanpage: "/fanpage", // Chỗ này truyền /:id nhưng chưa có authen nên để tạm là fanpage
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
  history: "/admin/history",
  // chatbox:"/chatbox",
};

export default routes;
