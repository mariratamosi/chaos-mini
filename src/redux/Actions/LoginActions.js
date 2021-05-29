export const submitUsername = (name) => {
  console.log(name);
  return { type: "USER_LOGIN", payload: name };
};
