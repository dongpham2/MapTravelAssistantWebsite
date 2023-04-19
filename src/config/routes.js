const routes = {
  home: "/",
  accounts: "/accounts",
  forgotPassword: "/forgotPassword",
  profile: "/setting/profile",
  fanpage: "/fanpage", // Chỗ này truyền /:id nhưng chưa có authen nên để tạm là fanpage
  // posts: "/fanpage/posts",
  photos: "/fanpage/photos",
  videos: "/fanpage/videos",
  more: "/fanpage/more",
  createFanpage: "/setting/createFanpage",
  changePassword: "/setting/changePassword",
  notification: "/setting/notification",
};

export default routes;
