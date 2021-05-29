import { useDispatch } from "react-redux";
import { removeUsernameFromStore } from "redux/Actions";
import { useHistory } from "react-router-dom";
import { removeLoginData } from "service";

import "styles/Login.scss";

export const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (e) => {
    //remove from redux store
    dispatch(removeUsernameFromStore());

    //remove from local-store
    removeLoginData();

    //redirect to home-page
    history.replace("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
