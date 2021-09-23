const initState = {
  currentCounter: 0,
};

const calculateReducer = (state = initState, action) => {
  switch (action.type) {
    case "calculate/increment":
      return {
        ...state,
        currentCounter: state.currentCounter + 1,
      };
    case "calculate/decrement":
      return {
        ...state,
        currentCounter: state.currentCounter - 1,
      };
    default:
      return { ...state };
  }
};

export default calculateReducer;
