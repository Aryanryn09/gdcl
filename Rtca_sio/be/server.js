const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("What is this socket all about", socket);
  //this is for setting the stage for the application to make connection
  socket.on("chat", (payload) => {
    console.log("what is a payload", payload);
    io.emit("chat", payload);
  });
  //when the server is on teh extra info can be transferred over here
  //it may be the implementation details of the json.stringify objects ,images, data packets ....\
  //you can select a specific information from the payload and render it backand forth
});
server.listen(3000, () => {
  console.log("app is listen");
});
