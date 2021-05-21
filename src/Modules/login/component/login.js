import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { submitUsername } from "Actions/LoginActions";
import "../../../Styles/Login.scss";

function Login() {
  const [name, setName] = useState("");
  useEffect(() => {
    // Good!
    console.log("login mounted");
    document.title = "Chaos-mini"; // Side-effect!
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    let action = submitUsername(name);
    console.log(action);

    dispatch(action);
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
}

export default Login;
