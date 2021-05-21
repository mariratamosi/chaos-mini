export const submitUsername = (name) => {
  console.log(name);
  return { type: "SUBMIT_LOGIN_FORM", payload: name };
};
