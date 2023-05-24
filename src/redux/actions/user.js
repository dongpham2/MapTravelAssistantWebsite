import { toast } from "react-toastify";
import { getUserDetail, updateUser } from "src/service/userService";
export const ACTION_GET_DETAIL_USER = "ACTION_GET_DETAIL_USER";
// export const ACTION

export const actionGetDetailUser = ({ id, callBack }) => {
  return async (dispatch) => {
    const res = await getUserDetail.getDetailUser(id);
    if (res.status === 200) {
      callBack(res.data);
      return res.data;
    } else {
    }
  };
};

export const actionUpdateUser = ({ id, data, callBack }) => {
  return async (dispatch) => {
    const res = await updateUser.updateUser(id, data);
    if (res.status === 200) {
      callBack(res.data);
      toast.success("Update Success");
      return res.data;
    } else {
      toast.error("Update Fail");
    }
  };
};
