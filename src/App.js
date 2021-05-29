import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";
import Routes from "routeConfig";

function App() {
  const userInfo = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("app mounted");
    let loginData = CheckAuth(userInfo);
    console.log(loginData);
    console.log(userInfo);

    if (loginData.status) {
      dispatch(addUsernameToStore(loginData.username));
    }
  }, []);

  return (
    <div className="App">
      <Routes loggedIn={userInfo.isLoggedIn} />
    </div>
  );
}

export default App;
