import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function App() {
  const userInfo = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    let isLoggedIn = CheckAuth(userInfo);
    console.log(isLoggedIn);

    if (!isLoggedIn) {
      history.replace("/login");
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
