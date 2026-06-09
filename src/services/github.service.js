const axios = require("axios");

async function getUser(username) {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return response.data;
}

async function getRepos(username) {
  const response = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );

  return response.data;
}


module.exports = { getUser, getRepos };