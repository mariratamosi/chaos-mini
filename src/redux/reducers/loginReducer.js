const initState = {
  isLoggedIn: false,
  userName: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };
      break;
    case "USER_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
      };
      break;
    default:
      return { ...state };
  }
};

export default userReducer;
