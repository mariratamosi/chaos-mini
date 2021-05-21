import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);
  useEffect(() => {
    let isLoggedIn = CheckAuth(userInfo);
    console.log(isLoggedIn);
  }, []);

  return <div className="App"></div>;
}

export default App;
