import { Link } from "react-router-dom";
import "styles/exc.scss";

export const Exc = (props) => {
  const { state = {} } = props.location;
  const { error } = state;
  return (
    <div class="init-page">
      <Link to="/login" className="cm-h-link">
        Chaos
      </Link>
    </div>
  );
};
