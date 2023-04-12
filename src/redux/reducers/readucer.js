const initState = {};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "profileFanpage/updateProfile":
      return {
        ...state,
      };

    default:
  }
};

export default rootReducer;
