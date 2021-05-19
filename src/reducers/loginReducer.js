const initState = {
  isLoggedIn: false,
  userName: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUBMIT_LOGIN_FORM":
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
