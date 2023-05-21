import { adminService } from "src/service/adminService";
// export const ACTION_GETALLUSERS = "ACTION_GETALLUSERS";

export const actionGetAllUsers = (users) => {
  return async () => {
    const { data, status } = await adminService.getAllUsers(users);
    console.log(data);
  };
};
