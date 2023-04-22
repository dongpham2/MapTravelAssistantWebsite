const routes = {
  home: "/",
  accounts: "/accounts",
  forgotPassword: "/forgotPassword",
  fanpage: "/fanpage", // Chỗ này truyền /:id nhưng chưa có authen nên để tạm là fanpage
  // posts: "/fanpage/posts",
  photos: "/fanpage/photos",
  videos: "/fanpage/videos",
  more: "/fanpage/more",
  createFanpage: "/setting/createFanpage",
  changePassword: "/setting/changePassword",
  notification: "/setting/notification",
  chat: "/chat",
  // chatbox:"/chatbox",
};

export default routes;
