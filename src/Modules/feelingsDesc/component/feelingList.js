import { Logout } from "modules/logout/component/logout";
import { useSelector } from "react-redux";
import { Emotion } from "modules/components";
import "styles/feelingsDesc.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CONSTANTS } from "utils";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";

export const FeelingsList = () => {
  const userInfo = useSelector((state) => state.user);
  const [emotionsInfo, setEmotionsInfo] = useState(CONSTANTS.EMOTIONS);

  const emotionsHandler = (e) => {
    console.log(e.target.dataset.id);
    console.log("emotionsHandler");
    setEmotionsInfo(
      emotionsInfo.map((item, index) => {
        if (index === +e.target.dataset.id) {
          return {
            ...item,
            state: 1,
          };
        }
        return {
          ...item,
          state: 0,
        };
      })
    );
  };

  return (
    <div className="feelings-desc-container">
      <h1>{userInfo.userName}, how are you feeling today?</h1>
      <div className="emotions-list">
        {emotionsInfo.map((item, index) => {
          return (
            <Emotion
              name={item.name}
              id={index}
              key={index}
              state={item.state}
              handler={emotionsHandler}
            />
          );
        })}
      </div>
      <div className="cm-btn-group"></div>
      <Logout className="bottom-left cm-white-btn" />
      <Link
        to={{
          pathname: "/home",
          state: {
            selectedEmotions: emotionsInfo.find((item) => item.state === 1),
          },
        }}
        className="bottom-right cm-white-btn cm-link"
      >
        Continue
        <ArrowRightOutlinedIcon />
      </Link>
    </div>
  );
};
