import io from "socket.io-client";
import { nonoid } from "nanoid";
import { useEffect, useState } from "react";
import "./App.css";
const socket = io.connect("http://localhost:3000");
function App() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([""]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { msg });
    setMsg("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <div
      className="App"
      style={{ height: "100% ", overflow: "hidden", backgroundColor: "purple" }}
    >
      <h1
        style={{
          backgroundColor: "#282c34",
          color: "white",
          padding: "20px",
          fontSize: "45px",
        }}
      >
        Chatty application
      </h1>
      <header className="App-header">
        {chat.map((payload, index) => {
          return (
            <p key={index} style={{ color: "white" }}>
              {payload.msg}
            </p>
          );
        })}

        <form action="" onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button type=" submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
