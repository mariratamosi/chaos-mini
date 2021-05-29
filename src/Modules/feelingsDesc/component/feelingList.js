import { Logout } from "modules/logout/component/logout";
import { useSelector } from "react-redux";
import { Emotion } from "modules/components";

export const FeelingsList = () => {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className="feelings-desc-container">
      <h1>Hello {userInfo.userName}, how are you feeling today?</h1>
      <Emotion name="Angry" />
      <Emotion name="Afraid" />
      <Emotion name="Sad" />
      <Emotion name="Disgust" />
      <Emotion name="Happy" />
      <Logout />
    </div>
  );
};
