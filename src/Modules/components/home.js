import { useEffect, useState } from "react";
import { getRandomQuote } from "service";
import "styles/home.scss";

export const Home = (props) => {
  const { state = {} } = props.location;
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote()
      .then((response) => {
        console.log(response);
        setQuote(response.data);
      })
      .catch((error) => {
        //setQuote();
      });
  }, [setQuote]);

  return (
    <div class="home-page-1">
      <h1>{quote ? quote.content : "no content!"}</h1>
      {/* Home page {state.selectedEmotions ? state.selectedEmotions.name : ""} */}
    </div>
  );
};
