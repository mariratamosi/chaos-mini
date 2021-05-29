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
    case "USER_LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
      };
    default:
      return { ...state };
  }
};

export default userReducer;
