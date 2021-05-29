import { useEffect } from "react";

export const Home = (props) => {
  const { state = {} } = props.location;

  useEffect(() => {
    console.log(state.selectedEmotions);
  }, []);

  return <div>Home page {state.selectedEmotions.name}</div>;
};
