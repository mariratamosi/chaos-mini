import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeUsernameFromStore } from "redux/Actions";
import { SignIn } from "service";
import { useHistory, Link, Redirect } from "react-router-dom";
import { persistLoginData } from "service";
import { useSelector } from "react-redux";
import { removeLoginData } from "service";

import "styles/Login.scss";

export const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (e) => {
    console.log("Logout please");
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
