import { fanpageService } from "src/service/fanpageService";
export const ACTION_CREATE_FANGPAGE = "ACTION_CREATE_FANGPAGE";
export const actionCreateFangpage = (data) => {
  return async (dispatch) => {
    const res = await fanpageService.createFanpage(data);
    if (res.status === 200) {
      dispatch({
        type: ACTION_CREATE_FANGPAGE,
        payload: res.data,
      });
    }
  };
};
