import { Link } from "react-router-dom";

export const Exc = () => {
  return (
    <div>
      <h1>i am a public page</h1>
      <Link to="/login" className="link">
        Login
      </Link>
    </div>
  );
};
