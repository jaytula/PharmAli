const {resetDB } = require('./db/scripts/resetdb.js');
const PORT = process.env.PORT || 8080;

const app = require("./app")({ updateComment, updateBlog });
const server = require("http").Server(app);

const WebSocket = require("ws");
const wss = new WebSocket.Server({ server });

wss.on("connection", socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === "ping") {
      socket.send(JSON.stringify("pong"));
    }
  };
});

function updateComment(add, comment) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          type: "COMMENT",
          add,
          comment
        })
      );
    }
  });
}

function updateBlog(blogs, title, add) {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({ type: "BLOGS", blogs, title: (add) ? title : undefined })
      );
    }
  });
}

server.listen(PORT, () => {
  resetDB().then(() => {
    console.log(`Listening on port ${PORT}`);
  })
});