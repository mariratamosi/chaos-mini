import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";
import { SignIn } from "service";
import { useHistory, Link } from "react-router-dom";
import { persistLoginData } from "service";
import { useSelector } from "react-redux";

import "styles/Login.scss";

export const Login = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  let history = useHistory();

  useEffect(() => {
    console.log("login mounted");
    document.title = "Chaos-mini"; // Side-effect!
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    SignIn({ username: name, pw: "" }) //business logic
      .then(function (result) {
        //add to redux store
        dispatch(addUsernameToStore(name));

        console.log(userInfo);
        //store in localstore
        persistLoginData({ username: name });

        //redirect
        history.replace("/feelings");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <a href="/feelings">Next</a>
      <Link to="/feelings" className="link">
        feelings
      </Link>
    </div>
  );
};

export default Login;
