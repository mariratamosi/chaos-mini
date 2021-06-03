import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";
import Routes from "routeConfig";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("app started");

    let loginData = CheckAuth();

    if (loginData.status) {
      dispatch(addUsernameToStore(loginData.username));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
