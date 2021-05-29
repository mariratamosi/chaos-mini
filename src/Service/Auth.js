export const CheckAuth = (userInfo) => {
  return userInfo.isLoggedIn;
};

export const SignIn = ({ username, pw }) => {
  console.log(username);
  let result = new Promise((resolve, reject) => {
    console.log(username);
    console.log(this);
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
