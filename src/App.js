import { CheckAuth } from "service";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";

function App() {
  const userInfo = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let loginData = CheckAuth(userInfo);
    console.log(loginData);

    if (!loginData.status) {
      history.replace("/login");
    } else {
      //add to redux store
      dispatch(addUsernameToStore(loginData.username));
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
