export const CheckAuth = (userInfo) => {
  return userInfo.isLoggedIn;
};

export const SignIn = ({ username, pw }) => {
  return new Promise((resolve, reject) => {
    //Call API if neccessary
    if (username.length === 0) {
      reject({
        status: false,
        message: "Username not valid",
      });
    } else {
      resolve({
        status: true,
        message: "Thanks for login",
      });
    }
  });
};
