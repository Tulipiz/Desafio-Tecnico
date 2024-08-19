const axios = require("axios");

async function getUser() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}
module.exports = {
    getUser,
  };