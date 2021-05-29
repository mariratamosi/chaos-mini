export const CheckAuth = () => {
  let data = getLoginData();

  if (!data) {
    return {
      status: false,
    };
  }

  return {
    status: true,
    username: JSON.parse(data).username,
  };
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

export const persistLoginData = (userInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  localStorage.setItem("loggedin", userInfo.isLoggedIn);
};

export const getLoginData = (userInfo) => {
  console.log("getLoginData", localStorage.getItem("userInfo"));
  return localStorage.getItem("userInfo");
};
