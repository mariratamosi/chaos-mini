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
    default:
      return { ...state };
  }
};

export default userReducer;
