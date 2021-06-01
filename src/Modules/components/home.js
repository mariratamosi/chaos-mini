import { useEffect } from "react";

export const Home = (props) => {
  const { state = {} } = props.location;

  useEffect(() => {
    console.log(state.selectedEmotions);
  }, [state.selectedEmotions]);

  return (
    <div>
      Home page {state.selectedEmotions ? state.selectedEmotions.name : ""}
    </div>
  );
};
