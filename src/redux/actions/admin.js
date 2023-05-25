import { toast } from "react-toastify";
import { adminService } from "src/service/adminService";
export const ACTION_GETALLUSERS = "ACTION_GETALLUSERS";

export const actionGetAllUsers = ({ callback, isLoad }) => {
  return async (dispatch) => {
    // const { data, status } = await adminService.getAllUsers({});
    // dispatch({
    //   type: ACTION_GETALLUSERS,
    //   payload: data,
    // });
    const res = await adminService.getAllUsers();
    if (res.status === 200) {
      callback(res.data);
      return res.data;
    }
  };
};

export const actionDeleteUsers = (id) => {
  return async (dispatch, getState) => {
    const users = getState()["listUsers"];
    const { data, status } = await adminService.deleteUsers(id);
    if (status === 200) {
      console.log("users", users);
      const newData = users.filter((user) => user._id !== id);
      dispatch({
        type: ACTION_GETALLUSERS,
        payload: newData,
      });

      toast.success("Deleted Successfull");
    }
  };
};
