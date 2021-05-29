import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { submitUsername } from "redux/Actions";
import { SignIn } from "service";
import "styles/Login.scss";

export const Login = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("login mounted");
    document.title = "Chaos-mini"; // Side-effect!
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);

    let p = SignIn({ username: name, pw: "" });
    p.then(function (result) {
      console.log(result);
      let action = submitUsername(name);
      console.log(action);
      dispatch(action);
    }).catch(function (err) {
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
    </div>
  );
};

export default Login;
