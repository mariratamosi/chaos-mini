import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUsernameToStore } from "redux/Actions";
import { SignIn } from "service";
import { useHistory, Redirect } from "react-router-dom";
import { persistLoginData } from "service";
import "styles/Login.scss";

export const Login = () => {
  const [name, setName] = useState("");
  let history = useHistory();
  const nameInput = useRef(null);

  useEffect(() => {
    document.title = "Chaos-mini"; // Side-effect!
    nameInput.current.focus();
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    SignIn({ username: name, pw: "" }) //business logic
      .then(function (result) {
        //add to redux store
        dispatch(addUsernameToStore(name));

        //store in localstore
        persistLoginData({ username: name, isLoggedIn: true });

        //redirect
        history.replace("/feelings");
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return localStorage.getItem("loggedin") ? (
    <div>
      <div>You are already logged in, why try again</div>
      <Redirect
        to={{
          pathname: "/feelings",
        }}
      />
    </div>
  ) : (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Your name?"
          ref={nameInput}
        />
      </form>
    </div>
  );
};

export default Login;
