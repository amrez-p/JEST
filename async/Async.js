const axios = require("axios");

const fetchData = () => {
  const result = axios.get("https://official-joke-api.appspot.com/random_joke");
  console.log(result);
  return result;
};

module.exports = fetchData;
