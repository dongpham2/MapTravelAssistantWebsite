import { toast } from "react-toastify";
import { postService } from "src/service/postService";
export const ACTION_CREATE_POST = "ACTION_CREATE_POST";
// export const ACTION

export const actionCreatePost = (data) => {
  return async (dispatch) => {
    const res = await postService.createPost(data);
    if (res.status === 201) {
      dispatch({
        type: ACTION_CREATE_POST,
        payload: data,
      });
      toast.success("Create succesfull!");
    } else {
      toast.error("Fail to create");
    }
  };
};
