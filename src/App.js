import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";
import Routes from "routeConfig";

function App() {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("app mounted");

    const checkAuth = () => {
      console.log("checking auth");
      let loginData = CheckAuth();

      if (loginData.status) {
        dispatch(addUsernameToStore(loginData.username));
      }
    };
    checkAuth();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes loggedIn={userInfo.isLoggedIn} />
    </div>
  );
}

export default App;
