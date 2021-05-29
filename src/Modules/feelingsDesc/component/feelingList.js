import { Logout } from "modules/logout/component/logout";
import { useSelector } from "react-redux";
import { Emotion } from "modules/components";
import "styles/feelingsDesc.scss";
import { Link } from "react-router-dom";

export const FeelingsList = () => {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className="feelings-desc-container">
      <h1>Hello {userInfo.userName}, how are you feeling today?</h1>
      <Emotion name="Angry" id="1" />
      <Emotion name="Afraid" id="2" />
      <Emotion name="Sad" id="3" />
      <Emotion name="Disgust" id="4" />
      <Emotion name="Happy" id="5" />
      <Link to="/login" className="link">
        Continue
      </Link>
      <Logout />
    </div>
  );
};
