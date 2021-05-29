export const addUsernameToStore = (name) => {
  console.log(name);
  return { type: "USER_LOGIN", payload: name };
};
