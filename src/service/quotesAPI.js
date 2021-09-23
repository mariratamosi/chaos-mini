import axios from "axios";

export const getRandomQuote = () =>
  axios({
    method: "GET",
    url: "https://api.quotable.io/random",
  });
