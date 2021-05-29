import { Logout } from "modules/logout/component/logout";
import { useSelector } from "react-redux";
import { Emotion } from "modules/components";
import "styles/feelingsDesc.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const FeelingsList = () => {
  const userInfo = useSelector((state) => state.user);
  const emotionsName = ["Happy", "Angry", "Afraid", "Sad", "Disgusted"];
  const [emotionsState, setEmotionsState] = useState([0, 0, 0, 0, 0]);

  const emotionsHandler = (e) => {
    console.log(e.target.dataset.id);
    console.log("emotionsHandler");
    setEmotionsState(
      emotionsState.map((_, index) => {
        if (index == e.target.dataset.id) return 1;
        return 0;
      })
    );
  };

  return (
    <div className="feelings-desc-container">
      <h1>Hello {userInfo.userName}, how are you feeling today?</h1>
      {emotionsName.map((item, index) => {
        return (
          <Emotion
            name={item}
            id={index}
            key={index}
            state={emotionsState[index]}
            handler={emotionsHandler}
          />
        );
      })}
      {/* <Emotion
        name="Happy"
        id="0"
        state={emotionsState[0]}
        handler={emotionsHandler}
      />
      <Emotion
        name="Angry"
        id="1"
        state={emotionsState[1]}
        handler={emotionsHandler}
      />
      <Emotion
        name="Afraid"
        id="2"
        state={emotionsState[2]}
        handler={emotionsHandler}
      />
      <Emotion
        name="Sad"
        id="3"
        state={emotionsState[3]}
        handler={emotionsHandler}
      />
      <Emotion
        name="Disgusted"
        id="4"
        state={emotionsState[4]}
        handler={emotionsHandler}
      /> */}
      <Link to="/login" className="link">
        Continue
      </Link>
      <Logout />
    </div>
  );
};
