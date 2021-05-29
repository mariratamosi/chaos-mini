import { Link } from "react-router-dom";

export const Exc = (props) => {
  const { state = {} } = props.location;
  const { error } = state;
  return (
    <div>
      <h1>Chaos mini</h1>
      {error && <div>ERROR: {error}</div>}
      <Link to="/login" className="link">
        Login
      </Link>
    </div>
  );
};
