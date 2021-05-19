import { useEffect } from "react";

function Login() {
  useEffect(() => {
    // Good!
    console.log("login mounted");
    document.title = "Chaos-mini"; // Side-effect!
  }, []);

  return (
    <div>
      <h1>Login page</h1>
    </div>
  );
}

export default Login;
