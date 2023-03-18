const PORT = process.env.PORT || 8080;

const app = require("./app");
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});