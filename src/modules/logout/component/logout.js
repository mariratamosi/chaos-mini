import { useDispatch } from "react-redux";
import { removeUsernameFromStore } from "redux/Actions";
import { useHistory } from "react-router-dom";
import { removeLoginData } from "service";
import "styles/login.scss";

export const Logout = (props) => {
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

  return (
    <button className={props.className} onClick={handleLogout}>
      Exit
    </button>
  );
};

export default Logout;
