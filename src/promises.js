const axios = require("axios").default;
const fs = require("fs").promises;

async function getPost(postId) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return response.data;
}

async function addLog(message) {
  await fs.appendFile("log.txt", message + "\n", "utf8");
}

async function readLogs() {
  const file = await fs.readFile("log.txt", "utf8");
  return file.toString();
}

module.exports = {
  getPost,
  addLog,
  readLogs,
};
