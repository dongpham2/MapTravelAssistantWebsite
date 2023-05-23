import { toast } from "react-toastify";
import { AuthService } from "src/service/authService";

export const _ACTION_POSTARTICLE = "_ACTION_POSTARTICLE";

export const actionSignin = (post) => {
  return async (dispatch) => {
    const { data, status } = await AuthService.postarticle(post);
    if (status === 200) {
      dispatch({
        type: _ACTION_POSTARTICLE,
        payload: data,
      });
      toast.success("Post successful");
    } else {
      toast.error("Post failed");
    }
  };
};
