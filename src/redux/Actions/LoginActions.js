export const addUsernameToStore = (name) => {
  console.log(name);
  return { type: "USER_LOGIN", payload: name };
};

export const removeUsernameFromStore = () => {
  return { type: "USER_LOGOUT" };
};
