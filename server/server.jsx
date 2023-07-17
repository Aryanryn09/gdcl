const io = require("socket.io")(3001, {
  cors: {
    //cross origin request support
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("connected to socket dot io");
});
