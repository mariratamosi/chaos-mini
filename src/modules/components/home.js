import { useEffect, useState } from "react";
import { getRandomQuote } from "service";
import { Footer } from "modules/components";
import Loader from "react-loader-spinner";

import "styles/home.scss";

export const Home = (props) => {
  // const { state = {} } = props.location;
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    getRandomQuote()
      .then((response) => {
        console.log(response);
        setQuote(response.data);
      })
      .catch((error) => {
        //setQuote();
      });
  };

  useEffect(() => {
    console.log("home mounted");
    getQuote();
  }, []);

  return (
    <div className="home-page-1">
      <Loader type="Rings" color="white" height={100} width={100} />

      <h1>{quote ? quote.content : "no content!"}</h1>
      {/* Home page {state.selectedEmotions ? state.selectedEmotions.name : ""} */}
      <Footer
        continueInfo={{ path: "", state: null, onClickEvent: getQuote }}
      />
    </div>
  );
};
