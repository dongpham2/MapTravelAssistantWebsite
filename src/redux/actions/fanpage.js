import { toast } from "react-toastify";
import { fanpageService } from "src/service/fanpageService";
export const ACTION_CREATE_FANGPAGE = "ACTION_CREATE_FANGPAGE";
export const ACTION_GET_ALL_FANGPAGE = "ACTION_GET_ALL_FANGPAGE";
// export const ACTION

export const actionCreateFangpage = (data) => {
  return async (dispatch) => {
    const res = await fanpageService.createFanpage(data);
    if (res.status === 201) {
      dispatch({
        type: ACTION_CREATE_FANGPAGE,
        payload: [data],
      });
      toast.success("Create succesfull!");
    } else {
      toast.error("Fail to create");
    }
  };
};

export const actionGetAllFangpage = () => {
  return async (dispatch) => {
    try {
      const res = await fanpageService.getAllFanpage();
      if (res.status === 200) {
        const newArray = res.data.data.map((_elt) => {
          return {
            ..._elt,
            lat: _elt?.location?.lat,
            lon: _elt?.location?.lon,
          };
        });
        dispatch({
          type: ACTION_GET_ALL_FANGPAGE,
          payload: newArray,
        });
      }
    } catch (error) {
      toast.error("Fail to get");
    }
  };
};

export const actionGetDetailFangpage = ({ id, callBack }) => {
  return async (dispatch) => {
    try {
      const res = await fanpageService.getDetailFanpage(id);
      if (res.status === 200) {
        callBack(res.data);
        return res.data;
      }
    } catch (error) {}
  };
};

export const actionEditFangpage = ({ id, data, callBack }) => {
  return async (dispatch) => {
    const res = await fanpageService.editFanpage(id, data);
    if (res.status === 201) {
      callBack(res.data);
      toast.success("Update success!");
      return res.data;
    } else {
      toast.error("Fail to update!");
    }
  };
};
