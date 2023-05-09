const initState = {
  content: "",
  photos: "",
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case post_article:
      return {
        ...state,
        auth: action.payload,
      };
    case update_article:
      return {
        ...state,
        auth: action.payload,
      };
    case delete_article:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
