import { Logout } from "modules/components";
import { Link } from "react-router-dom";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";

export const Footer = (props) => {
  return (
    <div>
      <Logout className="bottom-left cm-white-btn" />
      <Link
        to={{
          pathname: props.continueInfo.path,
          state: props.continueInfo.state,
        }}
        className="bottom-right cm-white-btn cm-link"
      >
        Continue
        <ArrowRightOutlinedIcon />
      </Link>
    </div>
  );
};
