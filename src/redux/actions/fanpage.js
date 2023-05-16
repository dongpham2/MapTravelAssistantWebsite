import { toast } from "react-toastify";
import { fanpageService } from "src/service/fanpageService";
export const ACTION_CREATE_FANGPAGE = "ACTION_CREATE_FANGPAGE";
// export const ACTION

export const actionCreateFangpage = (data) => {
  return async (dispatch) => {
    const res = await fanpageService.createFanpage(data);
    if (res.status === 201) {
      dispatch({
        type: ACTION_CREATE_FANGPAGE,
        payload: data,
      });
      toast.success("Create succesfull!");
    } else {
      toast.error("Fail to create");
    }
  };
};
