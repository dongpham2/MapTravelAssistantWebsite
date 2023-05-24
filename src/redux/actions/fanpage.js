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

// export const actionGetAllFangpage = ({ callBack }) => {
//   return async (dispatch) => {
//     try {
//       const res = await fanpageService.getAllFanpage();
//       if (res.status === 200) {
//         // dispatch({
//         //   type: ACTION_GET_ALL_FANGPAGE,
//         // });
//         callBack(res.data);
//         // toast.success("Get All success!");
//         return res.data;
//       }
//     } catch (error) {
//       // toast.error("Fail to get");
//     }
//   };
// };
